/**
 * Blue Orchid Salon - 3D Graphics Engine
 * Integrates Three.js for interactive 3D elements
 * Luxury Aesthetic: Rotating orchid, salon interior glimpses, product showcases
 */

// ===== THREE.JS SCENE INITIALIZATION =====
let scene, camera, renderer, orchidFlower, salonEnvironment;
const isMobile = window.innerWidth < 980;
const isHighEnd = !isMobile && navigator.hardwareConcurrency > 2;

function initThreeScene() {
  const container = document.getElementById('canvas-3d');
  if (!container) return;

  // Scene Setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1B1427);
  scene.fog = new THREE.Fog(0x1B1427, 100, 500);

  // Camera
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 3.5;

  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    preserveDrawingBuffer: false,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = isHighEnd;
  renderer.shadowMap.type = THREE.PCFShadowShadowMap;
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xE8B8D2, 1.2, 100); // Orchid Pink
  pointLight1.position.set(5, 5, 5);
  pointLight1.castShadow = isHighEnd;
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xB79BFF, 0.8, 100); // Lavender
  pointLight2.position.set(-5, -5, 5);
  pointLight2.castShadow = isHighEnd;
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0xE6C56F, 0.6, 80); // Gold
  pointLight3.position.set(0, 10, -5);
  scene.add(pointLight3);

  // Create 3D Orchid
  createOrchid();

  // Handle Resize
  window.addEventListener('resize', () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });

  // Animation Loop
  animate();
}

// ===== CREATE 3D ORCHID =====
function createOrchid() {
  const group = new THREE.Group();

  // Petal Geometry - More realistic flower
  const petalGeometry = new THREE.IcosahedronGeometry(0.8, 5);
  
  const petalMaterial = new THREE.MeshPhongMaterial({
    color: 0xE8B8D2,
    emissive: 0xD4AF37,
    emissiveIntensity: 0.3,
    shininess: 100,
    side: THREE.DoubleSide
  });

  // Create 5 petals arranged in a circle
  const petalPositions = [
    { x: 0, y: 1, z: 0, rotX: 0, rotY: 0 },
    { x: 0.8, y: 0.5, z: 0, rotX: 0, rotY: Math.PI * 0.4 },
    { x: -0.8, y: 0.5, z: 0, rotX: 0, rotY: Math.PI * -0.4 },
    { x: 0.5, y: -0.3, z: 0.6, rotX: Math.PI * 0.2, rotY: Math.PI * 0.2 },
    { x: -0.5, y: -0.3, z: 0.6, rotX: Math.PI * 0.2, rotY: Math.PI * -0.2 }
  ];

  petalPositions.forEach((pos, index) => {
    const petal = new THREE.Mesh(petalGeometry, petalMaterial.clone());
    petal.position.set(pos.x, pos.y, pos.z);
    petal.rotation.x = pos.rotX;
    petal.rotation.y = pos.rotY;
    petal.scale.set(0.6, 0.8, 0.6);
    petal.castShadow = isHighEnd;
    petal.receiveShadow = isHighEnd;
    group.add(petal);

    // Animate each petal
    petal.userData.index = index;
    petal.userData.baseY = pos.y;
  });

  // Center Stamen
  const stamenGeometry = new THREE.SphereGeometry(0.4, 32, 32);
  const stamenMaterial = new THREE.MeshPhongMaterial({
    color: 0xD4AF37,
    emissive: 0xE6C56F,
    emissiveIntensity: 0.5,
    shininess: 120
  });
  const stamen = new THREE.Mesh(stamenGeometry, stamenMaterial);
  stamen.castShadow = isHighEnd;
  stamen.receiveShadow = isHighEnd;
  group.add(stamen);

  // Glow Sphere (post-processing effect)
  const glowGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xE8B8D2,
    transparent: true,
    opacity: 0.1,
    side: THREE.BackSide
  });
  const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
  glowSphere.userData.isGlow = true;
  group.add(glowSphere);

  group.userData.petals = group.children.filter(child => child.userData.index !== undefined);
  orchidFlower = group;
  scene.add(orchidFlower);
}

// ===== ANIMATION LOOP =====
let time = 0;

function animate() {
  requestAnimationFrame(animate);
  time += 0.01;

  if (orchidFlower) {
    // Main rotation
    orchidFlower.rotation.x = Math.sin(time * 0.5) * 0.3;
    orchidFlower.rotation.y += 0.003;
    orchidFlower.rotation.z = Math.cos(time * 0.4) * 0.2;

    // Petal sway animation
    orchidFlower.children.forEach(child => {
      if (child.userData.index !== undefined) {
        const index = child.userData.index;
        const sway = Math.sin(time + index) * 0.15;
        child.position.y = child.userData.baseY + sway;
        child.scale.z = 0.6 + Math.sin(time * 0.8 + index) * 0.08;
      }
    });

    // Glow pulse
    const glowChild = orchidFlower.children.find(c => c.userData.isGlow);
    if (glowChild) {
      glowChild.material.opacity = 0.1 + Math.sin(time) * 0.05;
      glowChild.scale.set(
        1.5 + Math.sin(time * 0.6) * 0.1,
        1.5 + Math.sin(time * 0.6) * 0.1,
        1.5 + Math.sin(time * 0.6) * 0.1
      );
    }
  }

  renderer.render(scene, camera);
}

// ===== GSAP INTEGRATION WITH SCROLLTRIGGER =====
function integrateWithScrollTrigger() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 3D Orchid Rotation based on scroll
  ScrollTrigger.create({
    trigger: '.hero',
    onUpdate: (self) => {
      if (orchidFlower) {
        orchidFlower.rotation.z = self.getVelocity() * 0.0001;
      }
    }
  });

  // Fade in/out when scrolling past hero
  gsap.to('#canvas-3d', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      end: 'top top',
      scrub: 1
    }
  });
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Only load Three.js if WebGL is supported
  if (!window.WebGLRenderingContext) {
    console.error('WebGL not supported. 3D graphics disabled.');
    return;
  }

  // Load Three.js dynamically
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = () => {
    initThreeScene();
    integrateWithScrollTrigger();
  };
  document.head.appendChild(script);
});

// ===== MOUSE INTERACTION =====
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  if (!orchidFlower || isMobile) return;
  
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

  gsap.to(orchidFlower.rotation, {
    x: mouseY * 0.3,
    y: mouseX * 0.5,
    duration: 1,
    overwrite: 'auto'
  });
});

// ===== TOUCH INTERACTION FOR MOBILE =====
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
  if (!orchidFlower || !isMobile) return;
  
  const deltaX = e.touches[0].clientX - touchStartX;
  const deltaY = e.touches[0].clientY - touchStartY;

  orchidFlower.rotation.y += deltaX * 0.005;
  orchidFlower.rotation.x += deltaY * 0.005;
});

// ===== PERFORMANCE MONITORING =====
function monitorPerformance() {
  let frameCount = 0;
  let lastTime = performance.now();

  function checkFPS() {
    const now = performance.now();
    const delta = now - lastTime;

    if (delta >= 1000) {
      console.log(`FPS: ${Math.round(frameCount / (delta / 1000))}`);
      frameCount = 0;
      lastTime = now;
    }

    frameCount++;
    requestAnimationFrame(checkFPS);
  }

  // Uncomment to monitor FPS
  // checkFPS();
}

// monitorPerformance();

// Export for external use
window.BlueOrchid3D = {
  initThreeScene,
  getScene: () => scene,
  getRenderer: () => renderer,
  getOrchid: () => orchidFlower,
  animate
};
