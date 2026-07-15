import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import './Logo.css';

// One brand mark, two homes, animated between them by Framer Motion's shared
// layout (`layoutId`) — a FLIP transition that runs on its own once `docked`
// flips, fully decoupled from scroll position.
//   hero   — sits in an absolute anchor near 40vh, so it rides up with the
//            page natively while you scroll the hero;
//   docked — a fixed slot in the nav panel's top-left corner.
const TRANSITION = { type: 'tween', duration: 0.8, ease: [0.22, 1, 0.36, 1] };

function Mark() {
  return (
    <>
      <span className="brand-logo__name">Citadel</span>
      <span className="brand-logo__sub">House of Massage</span>
    </>
  );
}

export default function Logo({ docked }) {
  return (
    <MotionConfig reducedMotion="user">
      {/* Mobile-only full-width glass strip behind the docked logo + burger */}
      <AnimatePresence>
        {docked && (
          <motion.div
            className="brand-topbar"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      {docked ? (
        <motion.a
          layoutId="brand-logo"
          transition={TRANSITION}
          href="#top"
          className="brand-logo brand-logo--docked"
          aria-label="Citadel — House of Massage"
        >
          <Mark />
        </motion.a>
      ) : (
        <div className="brand-logo-anchor">
          <motion.a
            layoutId="brand-logo"
            transition={TRANSITION}
            href="#top"
            className="brand-logo brand-logo--hero"
            aria-label="Citadel — House of Massage"
          >
            <Mark />
          </motion.a>
        </div>
      )}
    </MotionConfig>
  );
}
