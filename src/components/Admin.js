import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });

    // Fetch existing events (simulated API call)
    useEffect(() => {
        fetch('/api/events')
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    const handleAddEvent = () => {
        if (!newEvent.title || !newEvent.date || !newEvent.description) {
            alert('Please fill out all fields.');
            return;
        }

        fetch('/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent),
        })
            .then((res) => res.json())
            .then((data) => setEvents((prev) => [...prev, data]));

        setNewEvent({ title: '', date: '', description: '' });
    };

    const handleDeleteEvent = (id) => {
        fetch(`/api/events/${id}`, { method: 'DELETE' })
            .then(() => setEvents((prev) => prev.filter((event) => event.id !== id)));
    };

    return (
        <div className="admin">
            <h2>Admin Panel</h2>
            <div className="admin-form">
                <h3>Add New Event</h3>
                <input
                    type="text"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
                <textarea
                    placeholder="Event Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                ></textarea>
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
            <div className="event-list">
                <h3>Upcoming Events</h3>
                {events.map((event) => (
                    <div key={event.id} className="event-item">
                        <h4>{event.title}</h4>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                        <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
