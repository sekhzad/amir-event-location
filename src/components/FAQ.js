import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import './FAQ.css';

const FAQ = () => {
    const faqData = {
        allgemein: [
            { question: 'Wie sind Ihre Öffnungszeiten?', answer: 'Wir sind täglich von 9:00 bis 21:00 Uhr geöffnet.' },
            { question: 'Wo befindet sich Ihre Location?', answer: 'Unsere Adresse ist Rahdener Str. 3, 32479 Hille, Deutschland.' },
            { question: 'Wie kann ich Sie kontaktieren?', answer: 'Sie können uns telefonisch unter 0170 8248247 oder per E-Mail an kontakt@amir-event-location.de erreichen.' },
        ],
        dienstleistungen: [
            { question: 'Bieten Sie Catering-Services an?', answer: 'Ja, wir haben ein hauseigenes Catering-Team mit individuell anpassbaren Menüs.' },
            { question: 'Können Sie Dekorationen arrangieren?', answer: 'Ja, wir bieten Dekorationsservices passend zum Thema Ihrer Veranstaltung an.' },
            { question: 'Stellen Sie technische Ausstattung zur Verfügung?', answer: 'Ja, wir bieten moderne Audio- und Videoausstattung für Ihre Events.' },
        ],
        buchung: [
            { question: 'Wie kann ich die Halle buchen?', answer: 'Sie können online über unser Buchungssystem oder telefonisch buchen.' },
            { question: 'Ist eine Anzahlung erforderlich?', answer: 'Ja, eine Anzahlung ist erforderlich, um Ihre Buchung zu bestätigen.' },
            { question: 'Kann ich meine Buchung verschieben?', answer: 'Ja, Sie können Ihre Buchung verschieben, vorbehaltlich Verfügbarkeit und Bedingungen.' },
        ],
    };

    const [expandedIndices, setExpandedIndices] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const handleExpand = (section, index) => {
        setExpandedIndices((prev) => ({
            ...prev,
            [section]: prev[section] === index ? null : index, // Toggle the expanded state
        }));
    };

    const filteredQuestions = Object.entries(faqData).reduce((acc, [category, questions]) => {
        const filtered = questions.filter((q) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length) acc[category] = filtered;
        return acc;
    }, {});

    return (
        <section className="FAQ">
            <Breadcrumb />
            <h2>Häufig gestellte Fragen</h2>

            {/* Search Bar */}
            <div className="FAQ-search">
                <input
                    type="text"
                    placeholder="Suche nach einer Frage..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* FAQ Categories */}
            {Object.entries(filteredQuestions).map(([category, questions]) => (
                <div key={category} className="FAQ-category">
                    <h3>
                        {category === 'allgemein' ? 'Allgemeine Fragen' :
                            category === 'dienstleistungen' ? 'Dienstleistungen' : 'Buchung'}
                    </h3>
                    <div className="FAQ-list">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className={`FAQ-item ${expandedIndices[category] === index ? 'expanded' : ''}`}
                                onClick={() => handleExpand(category, index)}
                            >
                                <div className="FAQ-question">
                                    <h4>{item.question}</h4>
                                    <span>{expandedIndices[category] === index ? '-' : '+'}</span>
                                </div>
                                {expandedIndices[category] === index && <p>{item.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Call to Action */}
            <div className="FAQ-cta">
                <p>Haben Sie weitere Fragen?</p>
                <a href="tel:+491708248247" className="btn-primary">Kontaktieren Sie uns</a>
            </div>
        </section>
    );
};

export default FAQ;
