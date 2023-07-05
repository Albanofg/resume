import { useEffect, useState } from 'react';
import React from 'react';
import './home.css';
import Marquee from 'react-fast-marquee';
import Preloader from '../loader/loader';

const Home = () => {

const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
 
return (
  <div>
    {loading ? <Preloader/> :

    <div className='homeScreen'>
      <Marquee className='marquee1' speed={65} style={{fontSize:'25em', zIndex:'0' }}>
        <p className="albano">
          . ALBANO GONZÁLEZ CARTIER
        </p>
      </Marquee>
      <Marquee className='marquee2' speed={45} style={{fontSize:'10em', zIndex:'0'}}>
        <p className="albano">
          . ALBANO GONZÁLEZ CARTIER 
        </p>
      </Marquee>
    </div>
}
  </div>
  )
}

export default Home