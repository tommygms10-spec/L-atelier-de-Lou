"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SilkRibbon() {
  const mesh = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(3.2, 0.7, 64, 12);
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!mesh.current) return;

    const pos = geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const wave =
        Math.sin(x * 1.4 + t * 0.6) * 0.18 +
        Math.cos(x * 0.7 - t * 0.4) * 0.12 +
        Math.sin(y * 3 + t * 0.3) * 0.05;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    mouse.current.x += (state.pointer.x - mouse.current.x) * 0.02;
    mouse.current.y += (state.pointer.y - mouse.current.y) * 0.02;

    mesh.current.rotation.x = -0.3 + mouse.current.y * 0.15;
    mesh.current.rotation.y = Math.sin(t * 0.15) * 0.25 + mouse.current.x * 0.2;
    mesh.current.rotation.z = Math.sin(t * 0.1) * 0.08;
    mesh.current.position.y = Math.sin(t * 0.35) * 0.25;
  });

  return (
    <mesh ref={mesh} geometry={geometry}>
      <meshPhysicalMaterial
        color="#D8A2A8"
        roughness={0.25}
        metalness={0.1}
        clearcoat={0.6}
        transmission={0.35}
        thickness={0.6}
        side={THREE.DoubleSide}
        iridescence={0.4}
        iridescenceIOR={1.2}
      />
    </mesh>
  );
}

function Petal({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);
  const radius = useMemo(() => 2.4 + Math.random() * 2.2, []);
  const speed = useMemo(() => 0.15 + Math.random() * 0.2, []);
  const yOffset = useMemo(() => (Math.random() - 0.5) * 2.6, []);
  const scale = useMemo(() => 0.05 + Math.random() * 0.09, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + seed;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius * 0.6 - 1;
    ref.current.position.y = yOffset + Math.sin(t * 1.6) * 0.4;
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.y = t * 0.4;
  });

  const colors = ["#D8A2A8", "#D4B483", "#E8D5C4", "#C8B8A6"];

  return (
    <mesh ref={ref} scale={scale}>
      <circleGeometry args={[1, 5]} />
      <meshStandardMaterial
        color={colors[index % colors.length]}
        roughness={0.4}
        transparent
        opacity={0.85}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} color="#F8F5F2" />
        <directionalLight position={[3, 3, 4]} intensity={1.1} color="#D4B483" />
        <directionalLight position={[-3, -2, 2]} intensity={0.5} color="#D8A2A8" />

        <SilkRibbon />
        {Array.from({ length: 16 }).map((_, i) => (
          <Petal key={i} index={i} />
        ))}
      </Canvas>
    </div>
  );
}
