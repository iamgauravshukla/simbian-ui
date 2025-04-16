"use client";

import AlertCard from "./Alertcard";

export default function AlertSection({ title, initialCount, sendToFlow }) {
  return (
    <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-xl">
      <AlertCard title={title} initialCount={initialCount} sendToFlow={sendToFlow} />
    </div>
  );
}