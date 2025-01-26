import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((item) => item);

    // Map for custom breadcrumb titles
    const breadcrumbMap = {
        'uber-uns': 'Über Uns',
        kontakt: 'Kontakt',
        anfahrt: 'Anfahrt',
        FAQ: 'FAQ',
        Gallerie: 'Galerie',
        blog: 'Blog',
        booking: 'Buchung',
    };

    // Hide breadcrumbs on the Home page
    if (pathnames.length === 0) {
        return null;
    }

    return (
        <nav className="breadcrumb">
            <Link to="/">Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const displayValue = breadcrumbMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

                return isLast ? (
                    <span key={to} className="current-page">{` > ${displayValue}`}</span>
                ) : (
                    <React.Fragment key={to}>
                        <span>{` > `}</span>
                        <Link to={to}>{displayValue}</Link>
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
