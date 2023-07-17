import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calc() {
  const calendarRef = useRef(null);

  const handleDateClick = (arg) => {
    const date = arg.dateStr;
    const title = prompt("Enter Mobile Web Ghana Event");
    if (title) {
      const eventObj = {
        title,
        start: date,
      };
      calendarRef.current.getApi().addEvent(eventObj);
    }
  };

  const handleEventClick = (arg) => {
    if (window.confirm("You would lose this event for ever")) {
      arg.event.remove(); // Delete the clicked event
    }
  };

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="90vh"
        dateClick={handleDateClick}
        eventClick={handleEventClick} // Add eventClick handler
      />
    </div>
  );
}

export default Calc;
