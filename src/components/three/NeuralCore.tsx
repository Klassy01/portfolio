import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import HudRing from './HudRing';
import ParticleField from './ParticleField';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDeviceTier } from '../../hooks/useDeviceTier';
import { stats } from '../../utils/constants';

/* ─── Rotating Wireframe Core ──────────────────────────── */
const WireframeCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshBasicMaterial
        color="#4db9c4"
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

/* ─── Inner Glow Sphere ────────────────────────────────── */
const GlowSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const scale = 0.6 + Math.sin(t * 0.5) * 0.05;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color="#5fd8e0"
        transparent
        opacity={0.08}
      />
    </mesh>
  );
};

/* ─── Orbiting Stat Sprite ─────────────────────────────── */
interface StatSpriteProps {
  label: string;
  value: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitOffset: number;
  tiltAngle: number;
}

const StatSprite: React.FC<StatSpriteProps> = ({
  label,
  value,
  orbitRadius,
  orbitSpeed,
  orbitOffset,
  tiltAngle,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * orbitSpeed + orbitOffset;
    groupRef.current.position.x = Math.cos(t) * orbitRadius;
    groupRef.current.position.z = Math.sin(t) * orbitRadius * 0.6;
    groupRef.current.position.y = Math.sin(t * 0.7 + orbitOffset) * 0.3 + Math.sin(tiltAngle) * orbitRadius * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Html
        center
        distanceFactor={6}
        style={{ pointerEvents: 'none' }}
      >
        <div className="px-3 py-1.5 rounded-md border border-cyan-bright/30 bg-void/80 backdrop-blur-sm whitespace-nowrap select-none">
          <div className="text-cyan-bright font-mono text-xs font-bold leading-tight">{value}</div>
          <div className="text-text-mono-dim font-mono text-[9px] leading-tight">{label}</div>
        </div>
      </Html>
    </group>
  );
};

/* ─── Full Scene Composition ───────────────────────────── */
const NeuralCoreScene: React.FC = () => {
  // Prepare stat data from constants
  const statData = stats.map((s) => ({
    label: s.label,
    value: `${s.prefix || ''}${s.count}${s.suffix || ''}`,
  }));

  return (
    <>
      {/* Camera-facing ambient light */}
      <ambientLight intensity={0.5} />

      {/* Core */}
      <WireframeCore />
      <GlowSphere />

      {/* HUD Rings */}
      <HudRing radius={1.8} tube={0.006} color="#5fd8e0" opacity={0.35} rotationSpeed={0.2} rotationAxis="y" tiltX={0.3} />
      <HudRing radius={2.2} tube={0.005} color="#4db9c4" opacity={0.25} rotationSpeed={-0.15} rotationAxis="y" tiltX={-0.5} tiltZ={0.4} />
      <HudRing radius={2.6} tube={0.004} color="#a9e9d5" opacity={0.15} rotationSpeed={0.1} rotationAxis="y" tiltX={0.7} tiltZ={-0.3} />

      {/* Orbiting Stat Sprites */}
      {statData.map((stat, i) => (
        <StatSprite
          key={i}
          label={stat.label}
          value={stat.value}
          orbitRadius={2.0 + i * 0.3}
          orbitSpeed={0.2 + i * 0.05}
          orbitOffset={(i * Math.PI * 2) / statData.length}
          tiltAngle={(i * Math.PI) / 6}
        />
      ))}

      {/* Particle Field */}
      <ParticleField count={800} />
    </>
  );
};

/* ─── Terminal Loading State ───────────────────────────── */
const TerminalLoader: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full gap-3">
    <div className="font-mono text-sm text-term-green animate-pulse">
      {'>'} INITIALIZING NEURAL CORE...
    </div>
    <div className="w-48 h-1 bg-void rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-cyan-mid to-term-green rounded-full animate-[gradient_2s_ease_infinite]" style={{ width: '60%', backgroundSize: '200% 100%' }} />
    </div>
  </div>
);

/* ─── CSS Fallback for Low-End Devices ─────────────────── */
const CSSFallbackCore: React.FC = () => (
  <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
    {/* Animated rings (CSS) */}
    <div className="absolute inset-0 border border-cyan-bright/20 rounded-full animate-[spin_30s_linear_infinite]" />
    <div className="absolute inset-8 border border-cyan-mid/15 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
    <div className="absolute inset-16 border border-mint/10 rounded-full animate-[spin_20s_linear_infinite]" />

    {/* Center glow */}
    <div className="absolute inset-20 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-bright/20 to-cyan-mid/10 animate-glow-pulse flex items-center justify-center">
        <span className="font-mono text-2xl font-bold text-cyan-bright">AI</span>
      </div>
    </div>
  </div>
);

/* ─── Main Export ──────────────────────────────────────── */
const NeuralCore: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const deviceTier = useDeviceTier();

  // Low-end or reduced motion → CSS fallback
  if (reducedMotion || deviceTier === 'low') {
    return <CSSFallbackCore />;
  }

  return (
    <div className="w-full aspect-square max-w-sm lg:max-w-md mx-auto">
      <Suspense fallback={<TerminalLoader />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <NeuralCoreScene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default NeuralCore;
