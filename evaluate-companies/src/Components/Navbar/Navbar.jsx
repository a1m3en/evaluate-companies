import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastY = React.useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;
            // scrolled state (for background/shadow)
            setScrolled(currentY > 20);

            // hide on scroll down, show on scroll up
            if (currentY <= 0) {
                setVisible(true);
            } else if (currentY > lastY.current && currentY > 100) {
                // scrolling down
                setVisible(false);
            } else if (currentY < lastY.current) {
                // scrolling up
                setVisible(true);
            }

            lastY.current = currentY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div>
            <nav className={"navbar-container" + (scrolled ? ' scrolled' : '') + (visible ? '' : ' hidden')}>
                <div className='navbar-content'>
                    <div className='logo-container'>
                        <span className='logo'>arc</span>
                    </div>
                    <div className='nav-items'>
                        <a href="#products" className='nav-link'>Products</a>
                        <a href="#company" className='nav-link'>Company</a>
                        <a href="#pricing" className='nav-link'>Pricing</a>
                    </div>
                    <div className='nav-actions'>
                        <a href="#login" className='login-btn'>Log in</a>
                        <a href="#get-started" className='get-started-btn'>Get started</a>
                    </div>
                </div>
            </nav>

            {/* Centered hero/banner under the navbar (matches requested design) */}
            <section className="nav-hero">
                <div className="nav-hero-inner" data-aos="fade-up">
                    <h1 className="nav-hero-title">Intelligent cash management for technology companies</h1>
                    <p className="nav-hero-sub">Manage cash, unlock competitive yield, raise debt capital, and access AI-powered financial services—all in one unified platform.</p>
                    <div className="nav-hero-ctas">
                        <button className="nav-cta-primary">Get started <span className="arrow">›</span></button>
                        <button className="nav-cta-secondary">Book a demo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar;