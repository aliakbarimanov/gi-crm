import React, { useEffect, useState } from "react";

import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import axios from "axios";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState({});

  // ---------------------------------
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:8000/data")
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.warn(error));
  };

  const events = [];
  let newObject = {};

  data.map((item) => {
    newObject = {
      title: item.title,
      start: item.time,
      end: item.time,
    };

    events.push(newObject);
  });

  return (
    <div className="w-896 shadow-xl">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth",
        }}
        height={"80vh"}
        events={events}
        selectable={true}
        select={(selectionInfo) => {
          setSelectedDay(selectionInfo);
          console.log(selectionInfo);
        }}
      />
    </div>
  );
};

export default Calendar;
