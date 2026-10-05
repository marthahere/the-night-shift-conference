import { useEffect, useRef } from "react";
import { slots } from "../data.js";

export default function SessionDialog({ session, onClose }) {
  const dialogRef = useRef(null);
  const slot = slots[session.slot];

  // Open as a modal when this component appears.
  // The browser handles focus trapping and the Escape key for us.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
    >
      <h2 id="dialog-title">{session.title}</h2>
      <dl>
        <dt>Speaker</dt>
        <dd>{session.speaker}, {session.role}</dd>
        <dt>Track</dt>
        <dd>{session.track}</dd>
        <dt>Time</dt>
        <dd>Day {session.day}, {slot.start} – {slot.end} ({slot.duration})</dd>
        <dt>Format</dt>
        <dd>Online</dd>
      </dl>
      <p>{session.description}</p>
      <button className="close-button" onClick={() => dialogRef.current.close()}>
        Close
      </button>
    </dialog>
  );
}
