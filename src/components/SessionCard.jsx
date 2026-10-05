export default function SessionCard({ session, trackIndex, onSelect }) {
  return (
    <button
      className={`card track-${trackIndex}`}
      onClick={() => onSelect(session)}
    >
      <span className="card-track">{session.track}</span>
      <span className="card-title">{session.title}</span>
      <span className="card-speaker">{session.speaker}</span>
    </button>
  );
}
