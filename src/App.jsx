import { useState } from "react";
import Header from "./components/Header.jsx";
import DaySelector from "./components/DaySelector.jsx";
import Schedule from "./components/Schedule.jsx";
import SessionDialog from "./components/SessionDialog.jsx";

export default function App() {
  const [day, setDay] = useState(1);
  const [selectedSession, setSelectedSession] = useState(null);

  // The details are open whenever a session is selected.
  const isOpen = selectedSession !== null;

  return (
    <>
      <Header />
      <main>
        <DaySelector day={day} onChange={setDay} />
        <hr className="divider" />
        <Schedule day={day} onSelect={setSelectedSession} />
      </main>

      {isOpen && (
        <SessionDialog
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </>
  );
}
