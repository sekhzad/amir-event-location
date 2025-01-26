import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCopy } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';

import './Kontakt.css';

const Kontakt = () => {
    const [copyStatus, setCopyStatus] = useState('');
    const [message, setMessage] = useState('');
    const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

    const handleCopyAddress = () => {
        const address = 'Rahdener Str. 3, 32479 Hille, Germany';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(address)
                .then(() => {
                    setCopyStatus('Adresse kopiert!');
                    setTimeout(() => setCopyStatus(''), 2000);
                })
                .catch(() => {
                    setCopyStatus('Fehler beim Kopieren. Versuchen Sie es erneut.');
                    setTimeout(() => setCopyStatus(''), 2000);
                });
        }
    };

    const toggleMessageBox = () => {
        setIsMessageBoxOpen(!isMessageBoxOpen);
    };

    return (
        <section className="kontakt">
            <Breadcrumb />

            <h2>Kontakt</h2>

            <p>Wir freuen uns auf Ihre Anfrage! So können Sie mit uns Kontakt aufnehmen:</p>

            <div className="contact-methods">
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <a href="tel:+491708248247" className="contact-link">0170 8248247</a>
                </div>

                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:kontakt@amir-event-location.de" className="contact-link">kontakt@amir-event-location.de</a>
                </div>

                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div className="address-wrapper">
                        <p className="contact-address">Rahdener Str. 3,<br /> 32479 Hille, Germany</p>
                        <button className="copy-button" onClick={handleCopyAddress}>
                            <FaCopy /> Kopieren
                        </button>
                    </div>
                </div>
            </div>

            {copyStatus && <p className="copy-status">{copyStatus}</p>}

            <div className={`message-box ${isMessageBoxOpen ? 'open' : ''}`}>
                <div className="message-header" onClick={toggleMessageBox}>
                    <h3>Senden Sie uns eine Nachricht</h3>
                </div>
                {isMessageBoxOpen && (
                    <div className="message-content">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Name" required />

                        <label htmlFor="email">E-Mail:</label>
                        <input type="email" id="email" name="email" placeholder="E-Mail-Adresse" required />

                        <label htmlFor="message">Nachricht:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Ihre Nachricht"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={500}
                            required
                        />
                        <p className="char-counter">{`${message.length}/500`}</p>

                        <button type="submit" className="btn-primary">Einreichen</button>
                        <button className="btn-secondary" onClick={toggleMessageBox}>Abbrechen</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Kontakt;
