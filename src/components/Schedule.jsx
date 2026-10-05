import { sessions, slots, tracks } from "../data.js";
import SessionCard from "./SessionCard.jsx";

export default function Schedule({ day, onSelect }) {
  const todaysSessions = sessions.filter((s) => s.day === day);

  return (
    <section className="schedule" aria-label={`Day ${day} schedule`}>
      {/* Column titles: only shown on wide screens, where tracks sit side by side.
          On narrow screens each card already names its track. */}
      <div className="row track-titles" aria-hidden="true">
        <div></div>
        <div className="cards">
          {tracks.map((track, index) => (
            <div key={track} className={`track-title track-${index}`}>
              {track}
            </div>
          ))}
        </div>
      </div>

      {/* One row for each time slot: the time on the left, the cards on the right */}
      {slots.map((slot, slotIndex) => (
        <div key={slot.start} className="row">
          <div className="time">
            <strong>{slot.start}</strong>
            <span>{slot.duration}</span>
          </div>
          <div className="cards">
            {todaysSessions
              .filter((s) => s.slot === slotIndex)
              .map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  trackIndex={tracks.indexOf(session.track)}
                  onSelect={onSelect}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
