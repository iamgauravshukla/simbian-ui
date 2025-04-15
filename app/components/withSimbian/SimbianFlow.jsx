'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const steps = [
  'Triaged & Reported',
  'Automated Response',
  'Comprehensive Analysis',
  'Accurate Detection',
  '24/7 Coverage',
];

export default function SimbianFlow({ incomingAlert }) {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!incomingAlert) return;
    let step = 0;
    const interval = setInterval(() => {
      setActiveStep(step++);
      if (step >= steps.length) {
        clearInterval(interval);
        setTimeout(() => setActiveStep(-1), 2000);
      }
    }, 700);
    return () => clearInterval(interval);
  }, [incomingAlert]);

  return (
    <div className="overflow-x-auto py-6">
      <div className="flex gap-4 items-center justify-start min-w-[800px]">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {/* Step */}
            <motion.div
              className={`px-4 py-3 min-w-[120px] text-center rounded-lg text-sm shadow-md transition-all ${
                activeStep === idx
                  ? 'bg-green-500 text-white scale-105'
                  : 'bg-white/10 text-white'
              }`}
              animate={{ scale: activeStep === idx ? 1.1 : 1 }}
              transition={{ type: 'spring' }}
            >
              {step}
            </motion.div>

            {/* Arrow */}
            {idx < steps.length - 1 && (
              <motion.div
                className={`text-2xl ${
                  activeStep === idx ? 'text-green-400' : 'text-white/30'
                }`}
                animate={{
                  opacity: activeStep === idx ? [0.6, 1, 0.6] : 0.3,
                }}
                transition={{
                  repeat: activeStep === idx ? Infinity : 0,
                  duration: 1,
                }}
              >
                <FaArrowRight />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
