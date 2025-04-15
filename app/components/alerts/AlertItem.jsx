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
  phishing: <MdPhishing />,
  login: <MdLogin />,
  malware: <MdSecurity />,
  brute: <MdDangerous />,
  access: <MdReport />,
  leak: <MdWarning />,
  default: <MdWarning />,
};

function getIcon(text) {
  const lower = text.toLowerCase();
  if (lower.includes('phishing')) return iconMap.phishing;
  if (lower.includes('login')) return iconMap.login;
  if (lower.includes('malware')) return iconMap.malware;
  if (lower.includes('brute')) return iconMap.brute;
  if (lower.includes('access')) return iconMap.access;
  if (lower.includes('leak')) return iconMap.leak;
  return iconMap.default;
}

export default function AlertItem({ text }) {
  const icon = getIcon(text);

  return (
    <motion.div
      className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded shadow w-fit flex items-center gap-2"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <span className="text-base">{icon}</span>
      <span>{text}</span>
    </motion.div>
  );
}
