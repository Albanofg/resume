import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';

const About = () => {

  return (

    <div className='about'>

      <article className='leftOne'>
        <h2>¿Quién soy?</h2>
        <br />
        <p>Mi nombre es Albano González Cartier, soy analista de ciberseguridad y desarrollador front end. Desarrollé mi experiencia laboral en ámbitos diversos: desde fábricas de producción continua, pasando por servicios de producción fotografica y audiovisual, hasta el sector gastronómico,  desempeñando distintos puestos. Hoy, me motiva  sumergirme y sumar nuevos desafíos aportando mis conocimientos adquiridos en distintos campos, en algo que siempre atrajo: el mundo IT. Me interesa poner en práctica mis habilidades en un entorno profesional, estando abierto a seguir aprendiendo y adaptarme rápidamente. Entre mis fortalezas y aptitudes, destaco la capacidad de trabajo en equipo, la eficiencia, la flexibilidad, el compromiso y la comunicación efectiva.</p>
      </article>
      
      <article className='leftTwo'>
        <Link to="/CV23.pdf" target="_blank" download>
          Descarga
        </Link>
      </article>
      
      <article className='rightOne'>
        <h2>Article 3</h2>
        <p>This is the third article.</p>
      </article>

    </div>
    
  )
}

export default About