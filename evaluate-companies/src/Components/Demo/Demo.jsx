import React from 'react';
import './Demo.css';
import profilePic from '../../assets/tech-illustration.svg';

const Demo = () => {
    return (
    <div className="demo-container" data-aos="fade-up">
            <div className="dashboard">
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="sidebar-header">
                        <span className="logo">arc</span>
                        <div className="search-bar">
                            <input type="text" placeholder="Search" className="search-input" />
                            <span className="search-shortcut">⌘K</span>
                        </div>
                    </div>
                    
                    <nav className="sidebar-nav">
                        <div className="nav-item active">
                            <span className="nav-icon">🏠</span>
                            <span>Home</span>
                        </div>
                        <div className="nav-item">
                            <span className="nav-icon">👤</span>
                            <span>CFO Agent</span>
                        </div>
                        <div className="nav-item">
                            <span className="nav-icon">💎</span>
                            <span>Rewards</span>
                        </div>
                        <div className="nav-item">
                            <span className="nav-icon">📁</span>
                            <span>Accounts</span>
                            <span className="expand-icon">▼</span>
                        </div>
                        
                        <div className="nav-section">
                            <span className="section-label">Spend</span>
                            <div className="nav-item">
                                <span className="nav-icon">💳</span>
                                <span>Cards</span>
                            </div>
                            <div className="nav-item">
                                <span className="nav-icon">💰</span>
                                <span>Payments</span>
                            </div>
                        </div>
                        
                        <div className="nav-section">
                            <span className="section-label">Capital</span>
                            <div className="nav-item">
                                <span className="nav-icon">📈</span>
                                <span>Capital Markets</span>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="top-bar">
                        <div className="user-info">
                            <span>Welcome, Alex</span>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn">💬</button>
                            <button className="icon-btn">📊</button>
                            <button className="icon-btn">⚙️</button>
                            <div className="user-profile">
                                <img src={profilePic} alt="Alex Garland" className="profile-img" />
                                <div className="profile-text">
                                    <span className="profile-name">Alex Garland</span>
                                    <span className="profile-company">Acme, Inc</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-content">
                        {/* Assets Overview */}
                        <div className="assets-section">
                            <div className="assets-header">
                                <h2>Your total assets are <span className="asset-amount">$12,085,769.59</span></h2>
                                <button className="move-funds-btn">Move funds</button>
                            </div>
                            <div className="asset-bar">
                                <div className="asset-segment business" style={{width: '22%'}}></div>
                                <div className="asset-segment treasury" style={{width: '78%'}}></div>
                            </div>
                        </div>

                        {/* Accounts and Cards Grid */}
                        <div className="dashboard-grid">
                            <div className="accounts-section">
                                <div className="section-header">
                                    <h3>Accounts</h3>
                                    <button className="new-account-btn">Open new account</button>
                                </div>
                                
                                <div className="account-item">
                                    <div className="account-info">
                                        <div className="account-icon business-icon">🏢</div>
                                        <div className="account-details">
                                            <h4>Business</h4>
                                            <p>Fifth Third Bank • •7186</p>
                                        </div>
                                    </div>
                                    <div className="account-balance">
                                        <span className="balance-label">Current balance</span>
                                        <span className="balance-amount">$2,720,150.24</span>
                                    </div>
                                </div>

                                <div className="account-item">
                                    <div className="account-info">
                                        <div className="account-icon treasury-icon">💰</div>
                                        <div className="account-details">
                                            <h4>Treasury</h4>
                                            <p>BNY Mellon Pershing • •2385</p>
                                        </div>
                                    </div>
                                    <div className="account-balance">
                                        <span className="balance-label">Account value</span>
                                        <span className="balance-amount">$9,365,619.35</span>
                                    </div>
                                </div>

                                {/* Arc Card Section */}
                                <div className="card-promotion">
                                    <div className="card-content">
                                        <h4>Create and start using your Arc card</h4>
                                        <p>Order physical cards with expedited shipping or create unlimited virtual cards in seconds.</p>
                                        <button className="get-started-link">Get started →</button>
                                    </div>
                                    <div className="card-logo">
                                        <span className="arc-logo">arc</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Sidebar */}
                            <div className="right-sidebar">
                                {/* Premium Card */}
                                <div className="premium-card">
                                    <div className="premium-header">
                                        <span className="premium-logo">arc PREMIUM</span>
                                    </div>
                                    <div className="premium-content">
                                        <img src={profilePic} alt="Bethany" className="manager-img" />
                                        <h4>Bethany McClain</h4>
                                        <p>Your relationship manager</p>
                                        <button className="contact-btn">Contact relationship manager</button>
                                    </div>
                                </div>

                                {/* Recent Transactions - Simplified */}
                                
                            </div> {/* End of right-sidebar */}
                        </div> {/* End of dashboard-grid */}
                    </div> {/* End of dashboard-content */}
                </div> {/* End of main-content */}
            </div> {/* End of dashboard */}
        </div>
    );
};

export default Demo;
