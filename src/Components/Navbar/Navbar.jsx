import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './NavBar.css';

// Import your components for each section
import Home from "../Home/Home";
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import FeedbackPage from '../Feedback/Feedbackpage';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        const results = searchContent(searchQuery);
        setSearchResults(results);
    };

    const searchContent = (query) => {
        const allContent = [
            { text: 'Medical Equipment', link: '/services' },
            { text: 'Spare Parts', link: '/services' },
            { text: 'Repair Services', link: '/services' },
            { text: 'Medical Machines', link: '/services' }
        ];

        if (!query) return [];
        return allContent.filter(item => item.text.toLowerCase().includes(query.toLowerCase()));
    };

    return (
        <Router>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className={`nav-menu ${isMenuOpen ? 'nav-active' : ''}`}>
                        <div className="close-icon" onClick={navToggle}></div>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                    <div onClick={navToggle} className='nav-toggler' aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? (
                            <div className='close-icon'></div>
                        ) : (
                            <>
                                <div className='line1'></div>
                                <div className='line2'></div>
                                <div className='line3'></div>
                            </>
                        )}
                    </div>
                    <form onSubmit={handleSearch} className="search-container">
                        <div className="search-bar-wrapper">
                            <input 
                                type="text" 
                                name="search" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..." 
                                className="search-bar" 
                            />
                            <i className="fa fa-search search-icon" onClick={handleSearch}></i>
                        </div>
                        {searchQuery && searchResults.length > 0 && (
                            <div className="search-results">
                                <ul>
                                    {searchResults.map((result, index) => (
                                        <li key={index}>
                                            <NavLink to={result.link}>{result.text}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </form>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'contact-button active' : 'contact-button')}>
                        Contact Us
                    </NavLink>
                </div>
            </nav>

            {/* Define the routes for each component */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/reviews" element={<FeedbackPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default NavBar;
