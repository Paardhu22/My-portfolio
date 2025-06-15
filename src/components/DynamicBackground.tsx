
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const DynamicBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DynamicBackground;
