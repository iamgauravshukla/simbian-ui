'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md'; 
export default function SimbianStats({ title }) {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative bg-gradient-to-br from-green-600/30 via-transparent to-transparent p-8 rounded-xl shadow-lg flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-white text-xl font-semibold mb-3">{title}</p>

      <motion.div
        className="text-white text-6xl font-bold mb-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        0
      </motion.div>

      {showArrow && (
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-green-500 text-4xl"
        >
          <MdArrowForward className="animate-spin" />
        </motion.div>
      )}
    </motion.div>
  );
}
