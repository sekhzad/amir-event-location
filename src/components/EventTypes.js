// src/components/EventTypes.js
import React, { useState } from 'react';
import './EventTypes.css';

const EventTypes = () => {
    const [eventDetails, setEventDetails] = useState(null);

    const events = [
        { name: "Hochzeiten", description: "Feiern Sie Ihren ganz besonderen Tag mit Stil und Eleganz." },
        { name: "Firmenfeiern", description: "Professionelle Räumlichkeiten für Ihre Firmenfeier." },
        { name: "Geburtstage", description: "Geburtstage unvergesslich machen." },
        { name: "Club-Events", description: "Feiern Sie die ganze Nacht in unseren pulsierenden Veranstaltungsorten." }
    ];

    const showDetails = (event) => {
        setEventDetails(event);
    };

    return (
        <section className="event-types">
            <h2>Unsere Veranstaltungstypen</h2>
            <div className="event-grid">
                {events.map((event) => (
                    <div key={event.name} className="event-card" onClick={() => showDetails(event)}>
                        {event.name}
                    </div>
                ))}
            </div>
            {eventDetails && (
                <div className="event-details">
                    <h3>{eventDetails.name}</h3>
                    <p>{eventDetails.description}</p>
                </div>
            )}
        </section>
    );
};

export default EventTypes;
