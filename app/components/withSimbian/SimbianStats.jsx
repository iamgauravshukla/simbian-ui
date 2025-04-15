'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SimbianStats({ title }) {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCheck(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="bg-white/10 border border-green-300 p-5 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm">{title}</p>
          <p className="text-3xl font-bold text-green-400">0</p>
        </div>
        {showCheck && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-green-500 text-2xl"
          >
            ✅
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
