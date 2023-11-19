/* eslint-disable react/prop-types */
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Plane, Stars } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas camera={{ fov: 60, position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.5} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight color="white" position={[0, 0, 1]} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <pointLight color="orange" position={[200, 300, 100]} />
        {/* Lebih banyak lampu jika diperlukan */}
        {/* Clouds */}
        {/* Anda perlu mengulangi ini atau membuat array dari cloud dengan posisi berbeda */}
        {/* <Cloud
          position={[0, 0, 0]}
          rotation={[1.16, -0.12, 0]}
          opacity={0.55}
        /> */}
        {/* OrbitControls untuk kontrol kamera */}
        <OrbitControls />
        {/* Stars untuk background bintang (opsional) */}
        {/* <Stars /> */}
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
