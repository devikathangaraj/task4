import React from 'react';

const Home = () => {
    return (
        <div style={{
            textAlign: 'center',
            backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2016/04/Desktop-fish-wallpapers-HD.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            height: '100vh',
            padding: '20px'
        }}>
            <h1>Welcome To Home</h1>
            <p><h1>Fishes are the ones who makes calm, beautiful aquatic creatures created by god to gift us!!!</h1></p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <img 
                    src="https://images.unsplash.com/photo-1701100244840-0838394bf9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBmaXNofGVufDB8fDB8fHww" 
                    alt="First Placeholder" 
                    style={{ width: '200px', height: '150px', borderRadius: '80px' }}
                />
                <img 
                    src="https://i.pinimg.com/236x/e1/ea/54/e1ea54d84501793609ec7c78d40908ae.jpg" 
                    alt="Second Placeholder" 
                    style={{ width: '200px', height: '150px', borderRadius: '80px' }}
                />
                
            </div>
            
            
        
            
        </div>
    );
};

export default Home;
