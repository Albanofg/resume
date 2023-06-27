import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import { GrDocumentDownload } from 'react-icons/gr';
import  CySecCert  from '../../assets/64179e4ae975eb00028b9d42.png';
import  ReactCert  from '../../assets/634dd964d0bb0c000f95b118.png';
import  JsCert  from '../../assets/61a4ce0809aaf70036f70ac4.png';

const About = () => {

  return (

    <div className='about'>

      <article className='leftOne'>
        <h2>¿Quién soy?</h2>
        <br />
        <p>Mi nombre es Albano González Cartier, soy analista de ciberseguridad y desarrollador front end. Desarrollé mi experiencia laboral en ámbitos diversos: desde fábricas de producción continua, pasando por servicios de producción fotografica y audiovisual, hasta el sector gastronómico,  desempeñando distintos puestos. Hoy, me motiva  sumergirme y sumar nuevos desafíos aportando mis conocimientos adquiridos en distintos campos, en algo que siempre atrajo: el mundo IT. Me interesa poner en práctica mis habilidades en un entorno profesional, estando abierto a seguir aprendiendo y adaptarme rápidamente. Entre mis fortalezas y aptitudes, destaco la capacidad de trabajo en equipo, la eficiencia, la flexibilidad, el compromiso y la comunicación efectiva.</p>
      </article>
      
      <article className='leftTwo'>
        <Link className='dBtn' to="/CV23.pdf" target="_blank" download>
          <i className='dIcon'><GrDocumentDownload/></i>
          <p>DESCARGA MI CV</p>
        </Link>
      </article>
      
      <article className='rightOne'>
        
        <ul className='certificados'>

          <h2>Certificados</h2>
          
          <li className='diplo'>
            <h4>Ciberseguridad</h4>
            <Link to='https://www.coderhouse.com/certificados/64179e4ae975eb00028b9d42' target='blank'>
              <img className='imgDiplo' src={CySecCert} alt='Ciberseguridad'/>
            </Link>
          </li>
          
          <li className='diplo'>
            <h4>React JS</h4>
            <Link to='https://www.coderhouse.com/certificados/634dd964d0bb0c000f95b118' target='blank'>
              <img className='imgDiplo' src={ReactCert} alt='ReactJS'/>
            </Link>
          </li>
          
          <li className='diplo'>
            <h4>Javascript</h4>
            <Link to='https://www.coderhouse.com/certificados/61a4ce0809aaf70036f70ac4' target='blank'>
              <img className='imgDiplo' src={JsCert} alt='Javascript'/>
            </Link>
          </li>
        
        </ul>
      </article>
    </div>
  )
}


export default About