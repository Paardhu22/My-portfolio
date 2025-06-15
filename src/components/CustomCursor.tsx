
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasPointerDevice = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointerDevice);

    if (!hasPointerDevice) return;

    document.body.classList.add('hide-cursor');

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.body.classList.remove('hide-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isPointerDevice) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-3 h-3 rounded-full bg-foreground transition-transform duration-200 ease-in-out ${
        isMouseDown ? 'scale-[2.5]' : 'scale-100'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;
