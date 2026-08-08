import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ count = 800 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const cyan = new THREE.Color('#5fd8e0');
    const mint = new THREE.Color('#a9e9d5');
    const mid = new THREE.Color('#4db9c4');

    for (let i = 0; i < count; i++) {
      // Distribute in a sphere-like volume
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 8;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Random color between cyan, mint, and mid
      const colorChoice = Math.random();
      const color = colorChoice < 0.33 ? cyan : colorChoice < 0.66 ? mint : mid;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = 0.5 + Math.random() * 1.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const { x, y } = state.pointer;

    // Slow rotation with subtle mouse parallax from R3F pointer
    pointsRef.current.rotation.y = time * 0.02 + x * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.1 + y * 0.03;

    // Animate individual particle positions for slow drift
    const posArr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      posArr[idx + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.001;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleField;
