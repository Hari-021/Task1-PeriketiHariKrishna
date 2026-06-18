import { Html, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { buildings } from '../../data/campus.js';

export default function CampusScene({ activeBuilding, onSelectBuilding, nightMode }) {
  return (
    <div className="relative h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-void lg:h-[42rem]">
      <Canvas camera={{ position: [6, 6, 8], fov: 46 }} dpr={[1, 1.8]}>
        <color attach="background" args={[nightMode ? '#030611' : '#071229']} />
        <fog attach="fog" args={[nightMode ? '#030611' : '#071229', 8, 22]} />
        <ambientLight intensity={nightMode ? 0.32 : 0.58} />
        <directionalLight position={[3, 8, 4]} intensity={nightMode ? 0.75 : 1.25} color={nightMode ? '#8bbdff' : '#ffffff'} />
        <pointLight position={[-4, 3, -3]} intensity={2} color="#00E5FF" />
        <pointLight position={[4, 2.5, 3]} intensity={1.7} color="#7B61FF" />
        {nightMode && <Stars radius={60} depth={18} count={1700} factor={4} fade speed={1} />}
        <CampusGround nightMode={nightMode} />
        <RouteNetwork />
        {buildings.map((building) => (
          <CampusBuilding
            key={building.id}
            building={building}
            active={activeBuilding?.id === building.id}
            onSelect={() => onSelectBuilding(building)}
          />
        ))}
        <EnergyRings />
        <OrbitControls enablePan enableZoom minDistance={5} maxDistance={15} maxPolarAngle={Math.PI / 2.18} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}

function CampusGround({ nightMode }) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[14, 12, 32, 32]} />
        <meshStandardMaterial color={nightMode ? '#07101f' : '#102341'} metalness={0.35} roughness={0.55} />
      </mesh>
      <gridHelper args={[14, 28, '#00E5FF', '#1a3153']} position={[0, 0, 0]} />
    </group>
  );
}

function CampusBuilding({ building, active, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.8 + building.x) * 0.035;
  });

  return (
    <group ref={group} position={[building.x, building.height / 2, building.z]}>
      <mesh
        castShadow
        receiveShadow
        onClick={(event) => {
          event.stopPropagation();
          onSelect();
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <boxGeometry args={[1.15, building.height, 1.15]} />
        <meshStandardMaterial
          color={building.color}
          emissive={building.color}
          emissiveIntensity={active || hovered ? 0.42 : 0.15}
          metalness={0.55}
          roughness={0.22}
          transparent
          opacity={0.86}
        />
      </mesh>
      <mesh position={[0, building.height / 2 + 0.04, 0]}>
        <boxGeometry args={[1.28, 0.08, 1.28]} />
        <meshStandardMaterial color="#ffffff" emissive={building.color} emissiveIntensity={0.45} />
      </mesh>
      <WindowGrid height={building.height} color={building.color} />
      {(hovered || active) && (
        <Html center position={[0, building.height / 2 + 0.75, 0]} distanceFactor={8}>
          <div className="w-44 rounded-lg border border-white/15 bg-slate-950/85 p-3 text-xs text-white shadow-glow backdrop-blur">
            <strong className="block text-primary">{building.name}</strong>
            <span className="text-slate-300">{building.type}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

function WindowGrid({ height, color }) {
  const rows = Math.max(3, Math.floor(height * 2.4));
  return (
    <group>
      {Array.from({ length: rows }).map((_, row) =>
        [-0.59, 0.59].map((x) => (
          <mesh key={`${row}-${x}`} position={[x, -height / 2 + 0.45 + row * 0.42, 0.03]}>
            <boxGeometry args={[0.018, 0.09, 0.92]} />
            <meshBasicMaterial color={color} transparent opacity={0.42} />
          </mesh>
        )),
      )}
    </group>
  );
}

function RouteNetwork() {
  const routes = useMemo(() => {
    const points = buildings.map((building) => new THREE.Vector3(building.x, 0.05, building.z));
    return points.slice(1).map((point, index) => [points[index], point]);
  }, []);

  return (
    <group>
      {routes.map((route, index) => (
        <RouteLine key={index} points={route} index={index} />
      ))}
    </group>
  );
}

function RouteLine({ points, index }) {
  const ref = useRef();
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tube = useMemo(() => new THREE.TubeGeometry(curve, 40, 0.025, 8, false), [curve]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.45 + Math.sin(state.clock.elapsedTime * 2.4 + index) * 0.18;
    }
  });

  return (
    <mesh ref={ref} geometry={tube}>
      <meshBasicMaterial color={index % 2 ? '#7B61FF' : '#00FFB3'} transparent opacity={0.6} />
    </mesh>
  );
}

function EnergyRings() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.28;
  });

  return (
    <group ref={ref} position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {[2.1, 3.7, 5.25].map((radius, index) => (
        <mesh key={radius}>
          <ringGeometry args={[radius, radius + 0.018, 96]} />
          <meshBasicMaterial color={index === 1 ? '#7B61FF' : '#00E5FF'} transparent opacity={0.3 - index * 0.05} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
