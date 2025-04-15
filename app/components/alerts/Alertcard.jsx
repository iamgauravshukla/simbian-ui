'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AlertItem from './AlertItem';
import { MdNotificationsOff, MdError, MdSecurity } from 'react-icons/md';
import MovingAlert from './MovingAlert';

const dummyAlerts = [
  'Phishing Email',
  'Suspicious Login',
  'Brute Force Attempt',
  'Malware Signature Match',
  'Unauthorized Access',
];

const iconMap = {
  'Ignored Alerts': <MdNotificationsOff className="text-2xl text-red-400" />,
  'Wrongly Closed': <MdError className="text-2xl text-yellow-400" />,
  'Active Threats': <MdSecurity className="text-2xl text-pink-400" />,
};

export default function AlertCard({ title, initialCount, sendToFlow }) {
  const [count, setCount] = useState(initialCount);
  const [alerts, setAlerts] = useState([]);
  const [emittingAlert, setEmittingAlert] = useState(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
      setCount((prev) => prev + 1);
      setAlerts((prev) => [newAlert, ...prev.slice(0, 3)]);
      sendToFlow(newAlert);
      setEmittingAlert(newAlert);
      setAnimateKey((prev) => prev + 1); // trigger re-animation
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={animateKey}
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.02, 1],
        boxShadow: [
          '0 0 0 rgba(0,0,0,0)',
          '0 0 12px rgba(255, 0, 0, 0.3)',
          '0 0 0 rgba(0,0,0,0)',
        ],
      }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-xl shadow-lg relative overflow-hidden"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          {iconMap[title]}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <motion.span
          key={count}
          className="text-3xl font-bold text-blue-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {count}
        </motion.span>
      </div>
      <div className="mt-2 space-y-1">
        {alerts.map((text, idx) => (
          <AlertItem key={idx} text={text} />
        ))}
      </div>

      {emittingAlert && <MovingAlert text={emittingAlert} x={600} y={0} />}
    </motion.div>
  );
}