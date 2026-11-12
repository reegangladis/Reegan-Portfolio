import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { isReducedMotion } from '../../utils/animations';

interface CyberSphereProps {
  mousePosition?: { x: number; y: number };
}

export const CyberSphere: React.FC<CyberSphereProps> = ({ mousePosition = { x: 0, y: 0 } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Points>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const outerRing1Ref = useRef<THREE.LineSegments>(null);
  const outerRing2Ref = useRef<THREE.LineSegments>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate neural nodes and connections using Fibonacci sphere algorithm with mobile adaptive density
  const { nodePositions, linePositions, particlePositions } = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const nodeCount = isMobile ? 65 : 120;
    const radius = 2.0;
    const nodes: THREE.Vector3[] = [];
    const phi = Math.PI * (Math.sqrt(5) - 1); // Golden ratio angle

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const r = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      nodes.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }

    // Connect nodes within a maximum distance
    const lines: number[] = [];
    const maxDistance = isMobile ? 1.15 : 0.95;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < maxDistance) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    // Node coordinates array
    const nodeCoords = new Float32Array(nodes.length * 3);
    for (let i = 0; i < nodes.length; i++) {
      nodeCoords[i * 3] = nodes[i].x;
      nodeCoords[i * 3 + 1] = nodes[i].y;
      nodeCoords[i * 3 + 2] = nodes[i].z;
    }

    // Ambient floating dust particles (reduced for mobile)
    const particleCount = isMobile ? 70 : 180;
    const pCoords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const pRadius = 2.4 + Math.random() * 1.5;
      const height = (Math.random() - 0.5) * 3;
      pCoords[i * 3] = Math.cos(theta) * pRadius;
      pCoords[i * 3 + 1] = height;
      pCoords[i * 3 + 2] = Math.sin(theta) * pRadius;
    }

    return {
      nodePositions: nodeCoords,
      linePositions: new Float32Array(lines),
      particlePositions: pCoords,
    };
  }, []);

  // Frame animation loop with mouse parallax
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const reduced = isReducedMotion();

    if (!reduced) {
      // Slow rotation for main group
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;

      // Rotate orbital rings
      if (outerRing1Ref.current) {
        outerRing1Ref.current.rotation.z += delta * 0.22;
        outerRing1Ref.current.rotation.x -= delta * 0.1;
      }
      if (outerRing2Ref.current) {
        outerRing2Ref.current.rotation.y -= delta * 0.28;
        outerRing2Ref.current.rotation.z += delta * 0.15;
      }

      // Rotate ambient particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y -= delta * 0.05;
      }

      // Subtle pulse on inner core mesh
      if (innerSphereRef.current) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
        innerSphereRef.current.scale.set(scale, scale, scale);
      }
    }

    // Mouse Parallax Lerp
    const targetX = mousePosition.x * 0.45;
    const targetY = -mousePosition.y * 0.45;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.06);
  });

  return (
    <group ref={groupRef}>
      {/* Central Inner Hologram Sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[1.35, 24, 24]} />
        <meshBasicMaterial
          color="#00F0FF"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Neural Network Nodes */}
      <points ref={coreRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#00F0FF"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Neural Network Interconnecting Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Orbital Ring 1: Inclined Cyan Ring */}
      <lineSegments ref={outerRing1Ref} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <ringGeometry args={[2.75, 2.77, 64]} />
        <lineBasicMaterial
          color="#00F0FF"
          transparent
          opacity={0.45}
        />
      </lineSegments>

      {/* Orbital Ring 2: Inclined Violet Ring */}
      <lineSegments ref={outerRing2Ref} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <ringGeometry args={[3.1, 3.12, 64]} />
        <lineBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.35}
        />
      </lineSegments>

      {/* Ambient Floating Dust Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#55F7FF"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Dynamic Lighting Setup */}
      <pointLight position={[5, 4, 5]} color="#00F0FF" intensity={2.5} distance={15} />
      <pointLight position={[-5, -4, -5]} color="#8B5CF6" intensity={2.8} distance={15} />
      <ambientLight intensity={0.4} />
    </group>
  );
};

