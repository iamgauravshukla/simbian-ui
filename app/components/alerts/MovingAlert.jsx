'use client';
import { motion } from 'framer-motion';
import {
  MdPhishing,
  MdLogin,
  MdSecurity,
  MdDangerous,
  MdReport,
  MdWarning,
} from 'react-icons/md';

const iconMap = {
  phishing: <MdPhishing className="text-xl" />,
  login: <MdLogin className="text-xl" />,
  malware: <MdSecurity className="text-xl" />,
  brute: <MdDangerous className="text-xl" />,
  access: <MdReport className="text-xl" />,
  leak: <MdWarning className="text-xl" />,
  default: <MdWarning className="text-xl" />,
};

function getIcon(alert) {
  return iconMap[alert] || iconMap.default;
}

export default function MovingAlert({ text, x = 600, y = 0, delay = 0.2 }) {
  const icon = getIcon(text);
  return (
    <motion.div
      className="absolute z-50 rounded-full p-3 bg-red-600/90 backdrop-blur-md shadow-xl border border-red-300"
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
      animate={{ opacity: 1, x, y, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="text-white"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
