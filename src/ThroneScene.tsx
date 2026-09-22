import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Component, useRef } from 'react';
import * as THREE from 'three';

class SceneErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="webgl-fallback">
          <span>3D PREVIEW UNAVAILABLE</span>
          <small>Your browser can still view the rest of the NOIR KINGDOM experience.</small>
        </div>
      );
    }

    return this.props.children;
  }
}

function ThroneModel() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.035;
  });

  return (
    <group ref={group} position={[0, -1.8, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <circleGeometry args={[4.8, 96]} />
        <meshStandardMaterial color="#090909" roughness={0.72} metalness={0.25} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[3.7, 4.35, 96]} />
        <meshStandardMaterial color="#7b0808" emissive="#240000" emissiveIntensity={0.4} metalness={0.5} roughness={0.35} />
      </mesh>

      <mesh position={[0, 2.1, -0.5]} castShadow>
        <boxGeometry args={[4.9, 5.4, 0.7]} />
        <meshStandardMaterial color="#100c0a" metalness={0.7} roughness={0.28} />
      </mesh>
      <mesh position={[0, 2.0, -0.86]} castShadow>
        <boxGeometry args={[4.05, 4.65, 0.24]} />
        <meshStandardMaterial color="#4a0303" emissive="#170000" emissiveIntensity={0.65} roughness={0.62} />
      </mesh>

      <mesh position={[0, 5.2, -0.45]} castShadow>
        <boxGeometry args={[5.55, 0.34, 0.8]} />
        <meshStandardMaterial color="#bd8d2d" metalness={0.85} roughness={0.2} />
      </mesh>
      {[-2.25, -1.35, -0.45, 0.45, 1.35, 2.25].map((x, i) => (
        <mesh key={i} position={[x, 5.75 + (i % 2 ? 0.18 : 0), -0.45]} rotation={[0, 0, i % 2 ? 0.12 : -0.12]} castShadow>
          <coneGeometry args={[0.28, 1.0, 4]} />
          <meshStandardMaterial color="#d5a83d" metalness={0.9} roughness={0.18} />
        </mesh>
      ))}

      {[-2.35, 2.35].map((x) => (
        <group key={x}>
          <mesh position={[x, 1.25, -0.05]} castShadow>
            <boxGeometry args={[0.48, 2.2, 2.5]} />
            <meshStandardMaterial color="#15110e" metalness={0.75} roughness={0.3} />
          </mesh>
          <mesh position={[x, 2.35, -0.05]} castShadow>
            <boxGeometry args={[0.72, 0.22, 2.65]} />
            <meshStandardMaterial color="#c69a3a" metalness={0.88} roughness={0.2} />
          </mesh>
        </group>
      ))}

      <mesh position={[0, 0.65, 0.15]} castShadow>
        <boxGeometry args={[3.85, 0.62, 2.35]} />
        <meshStandardMaterial color="#090909" metalness={0.35} roughness={0.42} />
      </mesh>
      <mesh position={[0, 0.98, 0.05]} castShadow>
        <boxGeometry args={[3.45, 0.25, 1.95]} />
        <meshStandardMaterial color="#620606" emissive="#1e0000" emissiveIntensity={0.4} roughness={0.55} />
      </mesh>

      <group position={[0, 0.15, 0.35]}>
        <mesh position={[0, 2.55, 0]} castShadow>
          <capsuleGeometry args={[0.66, 1.65, 10, 20]} />
          <meshStandardMaterial color="#030303" roughness={0.38} metalness={0.15} />
        </mesh>
        <mesh position={[0, 3.85, 0]} castShadow>
          <sphereGeometry args={[0.58, 32, 24]} />
          <meshStandardMaterial color="#7a4a32" roughness={0.7} />
        </mesh>
        <mesh position={[0, 4.12, -0.02]} scale={[1.02, 0.62, 1.0]} castShadow>
          <sphereGeometry args={[0.61, 32, 20]} />
          <meshStandardMaterial color="#030303" roughness={0.72} />
        </mesh>
        {[-1, 1].map((side) => (
          <group key={side} rotation={[0, 0, side * 0.18]}>
            <mesh position={[side * 0.82, 2.52, 0.02]} rotation={[0, 0, side * 0.48]} castShadow>
              <capsuleGeometry args={[0.19, 1.1, 8, 16]} />
              <meshStandardMaterial color="#050505" roughness={0.4} />
            </mesh>
            <mesh position={[side * 1.28, 1.95, 0.04]} castShadow>
              <sphereGeometry args={[0.22, 18, 14]} />
              <meshStandardMaterial color="#7a4a32" roughness={0.7} />
            </mesh>
          </group>
        ))}
        {[-1, 1].map((side) => (
          <group key={side}>
            <mesh position={[side * 0.45, 1.2, 0.42]} rotation={[0, 0, side * 0.06]} castShadow>
              <capsuleGeometry args={[0.3, 1.55, 8, 16]} />
              <meshStandardMaterial color="#030303" roughness={0.42} />
            </mesh>
            <mesh position={[side * 0.5, 0.52, 0.82]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <capsuleGeometry args={[0.22, 1.05, 8, 16]} />
              <meshStandardMaterial color="#020202" roughness={0.42} />
            </mesh>
            <mesh position={[side * 0.5, 0.02, 1.18]} castShadow>
              <boxGeometry args={[0.58, 0.24, 1.1]} />
              <meshStandardMaterial color="#020202" roughness={0.4} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 4.66, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[0.42, 0.22, 4]} />
          <meshStandardMaterial color="#d5a83d" metalness={0.92} roughness={0.14} />
        </mesh>
      </group>

      {[-2.7, 2.7].map((x) => (
        <group key={x}>
          <mesh position={[x, 2.0, -0.55]} castShadow>
            <cylinderGeometry args={[0.15, 0.2, 5.7, 24]} />
            <meshStandardMaterial color="#c69a3a" metalness={0.92} roughness={0.2} />
          </mesh>
          <mesh position={[x, 4.95, -0.55]} castShadow>
            <sphereGeometry args={[0.24, 24, 16]} />
            <meshStandardMaterial color="#e0b957" metalness={0.9} roughness={0.17} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function SceneCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [7.6, 4.4, 9.2], fov: 38 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      fallback={
        <div className="webgl-fallback">
          <span>3D PREVIEW UNAVAILABLE</span>
          <small>WebGL is not available on this device.</small>
        </div>
      }
    >
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 23]} />
      <ambientLight intensity={1.7} />
      <hemisphereLight intensity={1.1} groundColor="#050505" color="#fff2dd" />
      <spotLight position={[5, 9, 7]} intensity={95} angle={0.45} penumbra={0.8} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[-6, 5, 2]} intensity={55} angle={0.6} color="#7b0808" />
      <pointLight position={[0, 2, 4]} intensity={20} color="#d2a53d" />
      <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.18}>
        <ThroneModel />
      </Float>
      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        minDistance={6}
        maxDistance={14}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.95}
        target={[0, 2.0, 0]}
      />
    </Canvas>
  );
}

export default function ThroneScene() {
  return (
    <div className="throne-3d-shell">
      <SceneErrorBoundary>
        <SceneCanvas />
      </SceneErrorBoundary>
      <div className="three-badge"><span className="dot" /> DRAG TO ROTATE · SCROLL TO ZOOM</div>
    </div>
  );
}
