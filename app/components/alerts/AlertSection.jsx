"use client";

import SectionTitle from "../common/SectionTitle";
import AlertCard from "./Alertcard";
import AlertSummary from "./AlertSummary";

export default function AlertSection({ title, stats, summaries }) {
  return (
    <div className="space-y-6">
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <AlertCard
            key={idx}
            title={stat.title}
            icon={stat.icon}
            initialCount={stat.initialCount}
            sendToFlow={stat.sendToFlow}
          />
        ))}
      </div>
      <AlertSummary summaries={summaries} />
    </div>
  );
}