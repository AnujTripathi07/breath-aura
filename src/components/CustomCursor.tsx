import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      
      // Smooth follow for main cursor
      setTimeout(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${dotPos.x}px`,
          top: `${dotPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
