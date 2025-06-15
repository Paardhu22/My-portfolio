
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const cursorPositionRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const hasPointerDevice = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointerDevice);

    if (!hasPointerDevice) return;

    document.body.classList.add('hide-cursor');

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorPositionRef.current) {
        cursorPositionRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const animateFollower = () => {
      const { x: mouseX, y: mouseY } = mousePos.current;
      const { x: followerX, y: followerY } = followerPos.current;

      followerPos.current.x += (mouseX - followerX) * 0.1;
      followerPos.current.y += (mouseY - followerY) * 0.1;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animateFollower);
    };

    animateFollower();

    return () => {
      document.body.classList.remove('hide-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (!isPointerDevice) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorPositionRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className="w-3 h-3 rounded-full bg-foreground"
          style={{
            transform: `translate(-50%, -50%) scale(${isMouseDown ? 2.5 : 1})`,
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-32 h-32 rounded-full bg-primary/20 blur-3xl"
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
