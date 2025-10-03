import React from 'react';
import './Features.css';
import LockIcon from './icons/lock.svg';
import CheckIcon from './icons/check.svg';
import ChatIcon from './icons/chat.svg';

const Features = () => {
    return (
    <section className="features-container" data-aos="fade-up">
            <div className="features-inner">
                <h2 className="features-title">Enterprise-grade security and support comes standard</h2>

                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-media">
                            <img src={LockIcon} alt="lock" className="feature-svg" />
                        </div>
                        <h4 className="feature-heading">Built with security in mind</h4>
                        <p className="feature-copy">Protect your Arc account and financial data with multi-factor authentication and granular employee permissions.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-media">
                            <img src={CheckIcon} alt="check" className="feature-svg" />
                        </div>
                        <h4 className="feature-heading">Frictionless experience</h4>
                        <p className="feature-copy">Applying for an Arc account takes minutes and once approved, access all the cash management essentials in one platform.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-media">
                            <img src={ChatIcon} alt="chat" className="feature-svg" />
                        </div>
                        <h4 className="feature-heading">White-glove support</h4>
                        <p className="feature-copy">Get a dedicated relationship manager to answer your questions and help propel your business forward.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
