export default function AlertSummary({ summaries }) {
    return (
      <ul className="space-y-3 mt-6 text-sm text-white/80">
        {summaries.map((text, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span>❌</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    );
  }
  