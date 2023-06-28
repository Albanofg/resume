import React from 'react';
import './home.css';
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <div className='homeScreen'>
      <Marquee className='marquee1' speed={60} style={{fontSize:'25em', zIndex:'0' }}>
        <p className="albano">
          . ALBANO GONZÁLEZ CARTIER
        </p>
      </Marquee>
      <Marquee className='marquee2' speed={50} style={{fontSize:'10em', zIndex:'0'}}>
        <p className="albano">
          . ALBANO GONZÁLEZ CARTIER 
        </p>
      </Marquee>
    </div>
  )
}

export default Home