"use client";
import { useState } from "react";
import AlertSection from "./components/alerts/AlertSection";
import SimbianFlow from "./components/withSimbian/SimbianFlow";
import SimbianStats from "./components/withSimbian/SimbianStats";
import IconCard from "./components/alerts/IconCard";
import { motion } from "framer-motion";

export default function Home() {
  const [activeAlert, setActiveAlert] = useState(null);

  return (
    <main className="min-h-screen px-4 bg-gradient-to-br from-[#0b1622] to-[#1c2734] text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div
          className="relative bg-gradient-to-br from-red-600/30 via-transparent to-transparent p-10 rounded-lg shadow-lg"
          style={{
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
            animation: "backgroundAnimation 4s linear infinite",
          }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Without Simbian
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/6 order-2 md:order-1">
              <IconCard onIconClick={(alert) => setActiveAlert(alert)} />
            </div>
            <div className="w-full md:w-5/6 order-1 md:order-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <AlertSection
                title="Ignored Alerts"
                initialCount={193}
                sendToFlow={setActiveAlert}
              />
              <AlertSection
                title="Wrongly Closed"
                initialCount={23}
                sendToFlow={setActiveAlert}
              />
              <AlertSection
                title="Active Threats"
                initialCount={2}
                sendToFlow={setActiveAlert}
              />
            </div>
          </div>

          <div className="mt-12 space-y-6 text-center text-lg text-gray-300">
            <motion.p
              className="text-xl font-semibold text-gradient bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Wasting valuable analyst time on false positives
            </motion.p>
            <motion.p
              className="text-xl font-semibold text-gradient bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Processing one alert at a time, missing the big picture
            </motion.p>
            <motion.p
              className="text-xl font-semibold text-gradient bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              More time fixing SOAR automation, less time on real threats
            </motion.p>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-green-500/30 via-transparent to-transparent p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            With Simbian
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex flex-col items-center gap-6">
              <SimbianFlow incomingAlert={activeAlert} />
            </div>
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <SimbianStats title="Ignored Alerts" />
              <SimbianStats title="Wrongly Closed" />
              <SimbianStats title="Active Threats" />
            </div>
          </div>
          <div className="mt-8 space-y-3 text-center text-sm text-green-300">
            <motion.p
              className="text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              ✅ 90% of alerts resolved automatically, 24/7
            </motion.p>

            <motion.p
              className="text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              ✅ Correlates alerts to your environment
            </motion.p>

            <motion.p
              className="text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              ✅ Investigate every alert—no SOAR needed
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
}
