import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HudRingProps {
  radius?: number;
  tube?: number;
  color?: string;
  opacity?: number;
  rotationSpeed?: number;
  rotationAxis?: 'x' | 'y' | 'z';
  tiltX?: number;
  tiltZ?: number;
}

const HudRing: React.FC<HudRingProps> = ({
  radius = 2,
  tube = 0.008,
  color = '#4db9c4',
  opacity = 0.4,
  rotationSpeed = 0.3,
  rotationAxis = 'y',
  tiltX = 0,
  tiltZ = 0,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.rotation[rotationAxis] = time * rotationSpeed;
  });

  return (
    <mesh ref={meshRef} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, tube, 32, 128]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default HudRing;
