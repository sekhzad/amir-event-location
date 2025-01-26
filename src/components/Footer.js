import React, { useState } from 'react';
import impressum from './data/Impressum.json'; // Import Impressum JSON
import datenschutz from './data/datenschutz.json'; // Import Datenschutzerklärung JSON
import './Footer.css';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-modal')) {
            setIsModalOpen(false);
            setModalContent(null);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-left">
                <p>© 2025 Amir Event Location. All rights reserved.</p>
            </div>
            <div className="footer-right">
                <button className="footer-link" onClick={() => openModal(impressum)}>
                    Impressum
                </button>
                <button className="footer-link" onClick={() => openModal(datenschutz)}>
                    Datenschutzerklärung
                </button>
            </div>

            {isModalOpen && modalContent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <h4>{modalContent.title}</h4>
                        {modalContent.date && <p className="modal-date">{modalContent.date}</p>}

                        {modalContent.content.map((section, index) => (
                            <div key={index} className="modal-section">
                                <h5>{section.section || section.sectionTitle}</h5>
                                <ul>
                                    {section.details
                                        ? section.details.map((detail, idx) => (
                                              <li key={idx}>
                                                  {detail.startsWith('http') ? (
                                                      <a href={detail} target="_blank" rel="noopener noreferrer">
                                                          {detail}
                                                      </a>
                                                  ) : (
                                                      detail
                                                  )}
                                              </li>
                                          ))
                                        : section.subsections?.map((subsection, idx) => (
                                              <li key={idx}>
                                                  <h6>{subsection.subtitle}</h6>
                                                  <p>{subsection.text}</p>
                                              </li>
                                          ))}
                                </ul>
                            </div>
                        ))}

                        <button className="close-modal" onClick={closeModal}>
                            Schließen
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
