// Enhanced BookingPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingPage.css';
import Breadcrumb from './Breadcrumb';

const BookingPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlot, setTimeSlot] = useState('');
    const [eventType, setEventType] = useState('');
    const [attendees, setAttendees] = useState(0);
    const [specialRequirements, setSpecialRequirements] = useState('');

    const timeSlots = ["Morning", "Noon", "Afternoon", "Evening", "Night"];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!timeSlot) {
            alert("Please select a time slot.");
            return;
        }

        const bookingDetails = {
            date: selectedDate,
            timeSlot,
            eventType,
            attendees,
            specialRequirements,
        };

        fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                alert('Reservierung bestätigt! Details finden Sie in Ihrer E-Mail.');
                // Trigger email confirmation here if required
            });
    };

    return (
        <section className="booking-page">
            <Breadcrumb/>
            <h2>Buchen Sie Ihre Veranstaltung</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="calendar-wrapper">
                    <label>Bitte wählen Sie ein Datum aus:</label>
                    <div className="calendar-container">
                        <Calendar
                            onChange={setSelectedDate}
                            value={selectedDate}
                            tileDisabled={({ date }) => date < new Date()}
                        />
                    </div>
                </div>

                {selectedDate && (
                    <>
                        <div className="time-slot">
                            <label>Zeitfenster auswählen</label>
                            <select
                                value={timeSlot}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                required
                            >
                                <option value="">Zeitfenster auswählen</option>
                                {timeSlots.map((slot) => (
                                    <option key={slot} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>

                        <div className="event-details">
                            <label>Art der Veranstaltung:</label>
                            <select
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                required
                            >
                                <option value="">Veranstaltungstyp auswählen</option>
                                <option value="Wedding">Hochzeit</option>
                                <option value="Corporate Party">Firmenfeier</option>
                                <option value="Birthday">Geburtstag</option>
                                <option value="Sonstige"></option>
                            </select>

                            <label>Anzahl der Gäste:</label>
                            <input
                                type="number"
                                value={attendees}
                                onChange={(e) => setAttendees(Number(e.target.value))}
                                min="1"
                                required
                            />

                            <label>Spezielle Anforderungen:</label>
                            <textarea
                                value={specialRequirements}
                                onChange={(e) => setSpecialRequirements(e.target.value)}
                                placeholder="Gibt es irgendwelche speziellen Anforderungen?"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary">
                        Buchung bestätigen
                      </button>
                    </>
                )}
            </form>
        </section>
    );
};

export default BookingPage;


