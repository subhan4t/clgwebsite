import React, { useState, useEffect } from 'react';
import Footer from './footer.jsx';

const eventsList = [
  {
    id: 1,
    event: "Tech Fest 2024",
    description: "A grand event showcasing the latest in technology.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsAxKjvKu7Fgo8gl_M3A3lS8AV2TQc_Ecuw&s'
  },
  {
    id: 2,
    event: "Annual Sports Day",
    description: "A day filled with exciting sports activities.",
    image: 'https://www.shutterstock.com/image-vector/national-sports-day-celebration-concept-260nw-2340730101.jpg'
  },
  {
    id: 3,
    event: "Cultural Fest",
    description: "Celebrating diverse cultures with music and dance.",
    image: 'https://static.toiimg.com/photo/msid-95737367,width-96,height-65.cms'
},
  {
    id: 4,
    event: "Science Fair",
    description: "Showcasing innovative science projects by students.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNR1R5iJvj8HmBY3ZvviL8wadsnZkER3GVQ&s'
  }
];

const EventComponent = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsList.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
      <div className="event-card">
        <img
          src={eventsList[currentEvent].image}
          alt={eventsList[currentEvent].event}
          className="event-image"
        />
        <div className="event-details">
          <h3 className="event-name">{eventsList[currentEvent].event}</h3>
          <p className="event-description">{eventsList[currentEvent].description}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventComponent;