import { useRef, useCallback } from 'react';

/**
 * Mouse-tracking 3D tilt effect hook.
 * Returns ref + event handlers to attach to a card element.
 * @param intensity - max tilt angle in degrees (default 12)
 * @param scale - hover scale factor (default 1.03)
 */
export function useTilt(intensity = 12, scale = 1.03) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1
    const rotX = -dy * intensity;
    const rotY = dx * intensity;

    el.style.transition = 'transform 0.08s linear, box-shadow 0.08s linear';
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
    el.style.boxShadow = `
      ${-dx * 12}px ${-dy * 12 + 8}px 30px rgba(1,117,194,0.18),
      ${dx * 4}px ${dy * 4}px 0 #1a2744
    `;

    // Move shine
    const shine = el.querySelector<HTMLDivElement>('.tilt-shine');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(dx + 1) * 50}% ${(dy + 1) * 50}%, rgba(255,255,255,0.25) 0%, transparent 65%)`;
      shine.style.opacity = '1';
    }
  }, [intensity, scale]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.45s ease';
    el.style.transform = '';
    el.style.boxShadow = '';

    const shine = el.querySelector<HTMLDivElement>('.tilt-shine');
    if (shine) {
      shine.style.opacity = '0';
    }
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
