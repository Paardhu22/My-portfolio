
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const hasPointerDevice = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointerDevice);

    if (!hasPointerDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', onMouseMove);

    const animateFollower = () => {
      const { x: mouseX, y: mouseY } = mousePos.current;
      const { x: followerX, y: followerY } = followerPos.current;

      // Create a lagging effect
      followerPos.current.x += (mouseX - followerX) * 0.1;
      followerPos.current.y += (mouseY - followerY) * 0.1;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animateFollower);
    };

    animateFollower();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (!isPointerDevice) {
    return null;
  }

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] w-32 h-32 rounded-full bg-orange-500/20 blur-3xl"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;
