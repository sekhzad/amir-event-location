import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCopy } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';
import './Anfahrt.css';

const Anfahrt = () => {
    const [copyStatus, setCopyStatus] = useState('');

    const handleCopyAddress = () => {
        const address = 'Rahdener Str. 3, 32479 Hille, Germany';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(address)
                .then(() => {
                    setCopyStatus('Adresse kopiert!');
                    setTimeout(() => setCopyStatus(''), 2000);
                })
                .catch(() => {
                    setCopyStatus('Kopieren fehlgeschlagen. Versuchen Sie es erneut.');
                    setTimeout(() => setCopyStatus(''), 2000);
                });
        } else {
            // Fallback for unsupported environments
            const tempInput = document.createElement('input');
            tempInput.value = address;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand('copy');
                setCopyStatus('Adresse kopiert!');
            } catch (err) {
                setCopyStatus('Kopieren fehlgeschlagen. Versuchen Sie es erneut.');
            }
            document.body.removeChild(tempInput);
            setTimeout(() => setCopyStatus(''), 2000);
        }
    };

    return (
    
        <section className="anfahrt">
             <Breadcrumb />

            <h2>Anfahrt</h2>
            {/* Google Map Embed with Updated Location */}
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.871875731212!2d8.71959121605793!3d52.31780397977105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba327aadba9143%3A0x3ee3f1238d63dd1!2sRahdener%20Str.%203%2C%2032479%20Hille%2C%20Germany!5e0!3m2!1sen!2sus!4v1611646217041!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>

            {/* Address with Copy Button */}
            <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p className="contact-address">Rahdener Str. 3, 32479 Hille, Germany</p>
                <button className="copy-button" onClick={handleCopyAddress}>
                    <FaCopy /> Kopieren
                </button>
            </div>

            {/* Copy Status */}
            {copyStatus && <p className="copy-status">{copyStatus}</p>}
        </section>
    );
};

export default Anfahrt;
