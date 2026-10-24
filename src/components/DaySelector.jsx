export default function DaySelector({ day, onChange }) {
  return (
    <div className="days" role="group" aria-label="Choose a conference day">
      {[1, 2].map((d) => (
        <button
          key={d}
          className="day-button"
          aria-pressed={day === d}
          onClick={() => onChange(d)}
        >
          Day {d}
        </button>
      ))}
    </div>
  );
}
