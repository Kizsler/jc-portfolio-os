import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav: React.FC = () => {
    return (
        <div className="mobile-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Work</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default MobileNav;
