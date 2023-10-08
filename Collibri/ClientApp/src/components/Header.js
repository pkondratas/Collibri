import React from 'react';

const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center mb-3" style={{ marginTop: '8px' }}>
            <div className="d-flex align-items-center">
                <button className="btn" style={{ width: '50px', marginRight: '16px' }}>
                    <i className="fas fa-arrow-left"></i> {/* Font Awesome back arrow icon */}
                </button>
                <h2 className="mb-0">Collibri</h2>
            </div>
            <div className="d-flex align-items-center">
                <input type="text" className="form-control mr-2" style={{ marginRight: '8px' }} placeholder="Enter text" />
                <button className="btn">
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </button>
            </div>
        </header>
    );
}

export default Header;
