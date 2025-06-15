
```tsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    const hasPointerDevice = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointerDevice);

    if (!hasPointerDevice) return;

    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .group'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
      (el as HTMLElement).style.cursor = 'none';
    });

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        if (el) {
          (el as HTMLElement).style.cursor = 'auto';
        }
      });
    };
  }, []);

  if (!isPointerDevice) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ease-in-out ${
          isHovering ? 'border-orange-500 scale-150 bg-orange-500/20' : 'border-white scale-100'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className={`w-1 h-1 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default CustomCursor;
```
