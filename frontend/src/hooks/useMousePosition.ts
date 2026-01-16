import { useState, useEffect, useCallback, RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

interface UseMousePositionOptions {
  containerRef?: RefObject<HTMLElement>;
  throttleMs?: number;
}

export const useMousePosition = (options: UseMousePositionOptions = {}) => {
  const { containerRef, throttleMs = 16 } = options;
  
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0, y: 0, normalizedX: 0, normalizedY: 0,
  });
  const [isInside, setIsInside] = useState(false);

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      setMousePosition({
        x, y,
        normalizedX: (x / rect.width) * 2 - 1,
        normalizedY: (y / rect.height) * 2 - 1,
      });
    } else {
      setMousePosition({
        x: clientX, y: clientY,
        normalizedX: (clientX / window.innerWidth) * 2 - 1,
        normalizedY: (clientY / window.innerHeight) * 2 - 1,
      });
    }
  }, [containerRef]);

  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;
      updatePosition(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);
    
    if (containerRef?.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
      if (containerRef?.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [containerRef, throttleMs, updatePosition]);

  return { ...mousePosition, isInside };
};

export default useMousePosition;
