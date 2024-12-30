import React from 'react';

function Contactus() {
    return (
        <div 
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=3000&h=2000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black',
                height: '100vh',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us at any time. We are here to assist you!</p>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Email:</strong> contact@ourcompany.com</p>
                <p><strong>Address:</strong> 123 Main Street, Switzz City, Country</p>
            </div>
        </div>
    );
}

export default Contactus;
