import React from 'react';

const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center mb-3" style={{ marginTop: '8px' }}>
            <div className="d-flex align-items-center">
                <button className="btn btn-secondary" style={{ width: '90px', marginRight: '16px' }}>Go Back</button>
                <h2 className="mb-0">Collibri</h2>
            </div>
            <div className="d-flex align-items-center">
                <input type="text" className="form-control mr-2" style={{ marginRight: '8px' }} placeholder="Enter text" />
                <button className="btn btn-primary mr-2">Submit</button>
            </div>
        </header>
    );
}

export default Header;
