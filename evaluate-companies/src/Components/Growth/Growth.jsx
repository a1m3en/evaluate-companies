import React from 'react';
import './Growth.css';

const Growth = () => {
    return (
    <div className="growth-container" data-aos="fade-up">
            {/* Top Section - Intelligent Solutions */}
            <div className="growth-section intelligent-solutions">
                <div className="solutions-container">
                    <div className="solutions-header">
                        <h2 className="solutions-title">
                            Intelligent solutions to support your growth
                        </h2>
                    </div>
                    
                    <div className="solutions-content">
                        {/* Left Side - Analysis Cards */}
                        <div className="analysis-cards">
                            <div className="analysis-card">
                                <div className="card-icon">
                                    <span className="sparkle-icon">✦</span>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Revenue Analysis</span>
                                    <span className="card-arrow">→</span>
                                </div>
                            </div>
                            
                            <div className="analysis-card">
                                <div className="card-icon">
                                    <span className="sparkle-icon">✦</span>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Expense Analysis</span>
                                    <span className="card-arrow">→</span>
                                </div>
                            </div>
                            
                            <div className="analysis-card">
                                <div className="card-icon">
                                    <span className="sparkle-icon">✦</span>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Profitability Analysis</span>
                                    <span className="card-arrow">→</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Side - CFO Agent Section */}
                        <div className="cfo-agent-section">
                            <div className="cfo-badge">CFO Agent</div>
                            <h3 className="cfo-title">Put financial analysis on autopilot</h3>
                            <p className="cfo-description">
                                CFO Agent, Archie, ingests your transaction data to deliver real-time analysis, 
                                anomaly detection, and scheduled reporting.
                            </p>
                            <button className="cfo-learn-more">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Section - Debt Raise */}
            <div className="growth-section debt-raise">
                <div className="debt-raise-container">
                    <div className="debt-content">
                        {/* Left Side - Chart */}
                        <div className="debt-chart-section">
                            <div className="debt-chart">
                                <div className="chart-header">
                                    <span className="chart-label">Debt Capital Available</span>
                                </div>
                                <div className="chart-amount">$75M</div>
                                <div className="chart-visual">
                                    <div className="chart-bar">
                                        <div className="chart-fill"></div>
                                        <div className="chart-marker"></div>
                                    </div>
                                    <div className="chart-scale">
                                        <span>$1M</span>
                                        <span>$100M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Side - Content */}
                        <div className="debt-info-section">
                            <div className="debt-badge">Debt Raise</div>
                            <h3 className="debt-title">Secure the right financing, faster</h3>
                            <p className="debt-description">
                                Tap a 200+ lender network and Arc's capital markets team to source, 
                                negotiate, and close financing tailored to your needs—in days.
                            </p>
                            <button className="debt-learn-more">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Growth;