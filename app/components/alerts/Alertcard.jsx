'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MdPhishing,
  MdLogin,
  MdSecurity,
  MdDangerous,
  MdReport,
  MdWarning,
} from "react-icons/md";
import MovingAlert from "./MovingAlert";

const attackTypes = ["phishing", "login", "malware", "brute", "access", "leak"];

const iconMap = {
  phishing: <MdPhishing className="text-xl" />,
  login: <MdLogin className="text-xl" />,
  malware: <MdSecurity className="text-xl" />,
  brute: <MdDangerous className="text-xl" />,
  access: <MdReport className="text-xl" />,
  leak: <MdWarning className="text-xl" />,
  default: <MdWarning className="text-xl" />,
};

function getRandomIcon() {
  const randomType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
  return randomType;
}

export default function AlertCard({ title, initialCount, sendToFlow }) {
  const [count, setCount] = useState(initialCount);
  const [alerts, setAlerts] = useState([]);
  const [emittingAlert, setEmittingAlert] = useState(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = getRandomIcon();
      setCount((prev) => prev + 1);
      setAlerts((prev) => [newAlert, ...prev.slice(0, 3)]);
      sendToFlow(newAlert);
      setEmittingAlert(newAlert);
      setAnimateKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={animateKey}
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.03, 1],
        boxShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 15px rgba(255, 0, 0, 0.4)",
          "0 0 0 rgba(0,0,0,0)",
        ],
      }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-xl shadow-lg relative overflow-hidden"
    >
      <motion.span
        key={count}
        className="text-2xl font-semibold text-blue-400"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}
      </motion.span>


      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">

          {title === "Ignored Alerts" && (
            <MdPhishing className="text-2xl text-red-400" />
          )}
          {title === "Wrongly Closed" && (
            <MdLogin className="text-2xl text-yellow-400" />
          )}
          {title === "Active Threats" && (
            <MdSecurity className="text-2xl text-pink-400" />
          )}
          <h4 className="text-sm font-semibold">{title}</h4>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        {alerts.map((alert, idx) => (
          <div key={idx} className="flex items-center justify-start">
            <div
              className="group relative w-10 h-10 flex items-center justify-center rounded-full"
              style={{
                backgroundColor:
                  alert === "phishing"
                    ? "#ff7a7a"
                    : alert === "login"
                    ? "#ffcc5c"
                    : alert === "malware"
                    ? "#7db3f9"
                    : alert === "brute"
                    ? "#ffb84d"
                    : alert === "access"
                    ? "#89b1c4"
                    : alert === "leak"
                    ? "#d08461"
                    : "#666",
              }}
            >
              {iconMap[alert]}

              <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-700 text-white rounded py-1 px-2">
                {alert.charAt(0).toUpperCase() + alert.slice(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {emittingAlert && <MovingAlert text={emittingAlert} />}
    </motion.div>
  );
}
