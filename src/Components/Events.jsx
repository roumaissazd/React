import React, { useState, useEffect } from "react";
import { getallEvents } from "../services/api";




const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getallEvents(); // Récupérer les événements depuis l'API
        console.log(response); // Vérifier la structure des données
        setEvents(response); // Assurez-vous que "response" contient le tableau d'événements
      } catch (error) {
        console.error("Erreur lors de la récupération des événements:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;