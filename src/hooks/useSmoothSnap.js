import { useEffect } from 'react';
import Lenis from 'lenis';
import Snap from 'lenis/snap';
import 'lenis/dist/lenis.css';

/**
 * Smooth scrolling (Lenis) + one-gesture section snapping (`type: 'lock'`).
 * Sections taller than the viewport still scroll normally away from
 * boundaries.
 */
export default function useSmoothSnap() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ anchors: true });

    /* `lock`: one swipe/wheel gesture carries you to the next section top
       (direction-aware) and input is locked until the animation lands.
       Within sections taller than the viewport scrolling stays normal until
       the next boundary comes within `distanceThreshold` of the screen. */
    const snap = new Snap(lenis, {
      type: 'lock',
      duration: 0.9,
      distanceThreshold: '85%',
      debounce: 100,
    });

    const cleanups = [];
    document.querySelectorAll('main > section, footer').forEach((el) => {
      cleanups.push(snap.addElement(el, { align: 'start' }));
    });

    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => typeof fn === 'function' && fn());
      lenis.destroy();
    };
  }, []);
}
