'use client';
import { motion } from 'framer-motion';
import { MdPhishing, MdLogin, MdSecurity, MdDangerous, MdReport, MdWarning } from 'react-icons/md';

export default function IconCard({ onIconClick }) {
  const attackTypes = [
    'phishing',
    'login',
    'malware',
    'brute',
    'access',
    'leak',
  ];

  const iconMap = {
    phishing: <MdPhishing className="text-3xl text-red-500" />,
    login: <MdLogin className="text-3xl text-blue-500" />,
    malware: <MdSecurity className="text-3xl text-green-500" />,
    brute: <MdDangerous className="text-3xl text-yellow-500" />,
    access: <MdReport className="text-3xl text-purple-500" />,
    leak: <MdWarning className="text-3xl text-orange-500" />,
  };

  return (
    <motion.div
      className="flex flex-col gap-3 p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {attackTypes.map((type, idx) => (
        <motion.div
          key={idx}
          className="flex items-center justify-center"
          onClick={() => onIconClick(type)}
          whileHover={{ scale: 1.1 }}
        >
          <div className="p-2 cursor-pointer">{iconMap[type]}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
