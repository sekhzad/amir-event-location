import React from 'react';
import './UberUns.css';
import content from './data/uberUnsContent.json';
import Breadcrumb from './Breadcrumb';

const UberUns = () => (
    <section className="uber-uns">
        {/* Breadcrumb Navigation */}

<Breadcrumb/>
        <h2>Über Uns</h2>
        {content.sections.map((section, index) => (
            <div key={index} className="uber-uns-section">
                <div className={`text-block ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <h4>{section.title}</h4>
                    <p>{section.text}</p>
                </div>
                <div className="image-block">
                    <img src={section.image} alt={section.title} />
                </div>
            </div>
        ))}
    </section>
);

export default UberUns;
