import React, { useState, useEffect } from 'react';
import Footer from './footer.jsx';
import './Home.css';

import college1 from '../../assets/ClgPIc1.png';
import college2 from '../../assets/ClgPic2.jpg';
import college3 from '../../assets/ClgPic3.png';
import college4 from '../../assets/ClgPic4.png';

const images = [college1, college2, college3, college4];

const HomeComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <div className="homemaindiv" style={{ marginBottom: "60px" }}>
        <img src={images[currentImageIndex]} alt="CollegePicture" />
        <div className='textdiv'>
          <p className='h1'>Welcome to Our College</p><br/>
          <p className='h2'>Your future starts here. Learn more about our programs and events.</p>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default HomeComponent;
