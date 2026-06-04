import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // Wait for transition out
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black select-none overflow-hidden"
        >
          {/* Glowing central sphere */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none" />

          <div className="z-10 flex flex-col items-center max-w-xs w-full px-6">
            {/* Logo initials */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative mb-8 text-center"
            >
              <h1 className="font-serif text-5xl font-extrabold tracking-widest text-white">
                V<span className="text-accent font-sans">.</span>K
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[2px] bg-accent mx-auto mt-2"
              />
            </motion.div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 text-center mb-10 font-sans"
            >
              System Initializing
            </motion.p>

            {/* Loading Bar */}
            <div className="w-full h-[1px] bg-gray-900 relative rounded-full overflow-hidden mb-3">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Count percentage */}
            <div className="flex justify-between items-center w-full text-[10px] tracking-[0.2em] font-mono text-gray-500">
              <span>ESTABLISHING CONNECTION</span>
              <span className="text-accent font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
