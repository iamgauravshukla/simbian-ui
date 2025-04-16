"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Triaged & Reported",
  "Automated Response",
  "Comprehensive Analysis",
  "Accurate Detection",
  "24/7 Coverage",
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
      <div className="flex flex-col gap-4 items-start justify-center">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <motion.div
              className={`px-4 py-2 min-w-[200px] text-center rounded-lg text-sm shadow-md transition-all ${
                activeStep === idx
                  ? "bg-green-500 text-white scale-105"
                  : "bg-white/10 text-white"
              }`}
              animate={{ scale: activeStep === idx ? 1.1 : 1 }}
              transition={{ type: "spring" }}
            >
              {step}
            </motion.div>

            {idx < steps.length - 1 && (
              <motion.div
                className="text-2xl text-white/40"
                animate={{ opacity: activeStep === idx ? [0.5, 1, 0.5] : 0.2 }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ↓
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
