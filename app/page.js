"use client";
import { useState } from "react";
import AlertSection from "./components/alerts/AlertSection";
import SimbianFlow from "./components/withSimbian/SimbianFlow";
import SimbianStats from "./components/withSimbian/SimbianStats";

export default function Home() {
  const [activeAlert, setActiveAlert] = useState(null);

  return (
    <main className="min-h-screen py-10 px-4 bg-gradient-to-br from-[#0b1622] to-[#1c2734] text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <AlertSection
          type="chaos"
          title="Without Simbian"
          stats={[
            { title: 'Ignored Alerts', initialCount: 193, icon: '🔕', sendToFlow: setActiveAlert },
            { title: 'Wrongly Closed', initialCount: 23, icon: '❌', sendToFlow: setActiveAlert },
            { title: 'Active Threats', initialCount: 2, icon: '🛡️', sendToFlow: setActiveAlert },
          ]}
          summaries={[
            'Wasting valuable analyst time on false positives',
            'Processing one alert at a time, missing the big picture',
            'More time fixing SOAR automation, less time on real threats',
          ]}
        />

        {/* 🟢 With Simbian */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-400">With Simbian</h2>
          <SimbianFlow incomingAlert={activeAlert} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <SimbianStats title="Ignored Alerts" />
            <SimbianStats title="Wrongly Closed" />
            <SimbianStats title="Active Threats" />
          </div>
          <div className="mt-6 space-y-2 text-sm text-green-300">
            <p>✅ 90% of alerts resolved automatically, 24/7</p>
            <p>✅ Correlates alerts to your environment</p>
            <p>✅ Investigate every alert—no SOAR needed</p>
          </div>
        </div>
      </div>
    </main>
  );
}
