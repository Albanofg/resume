import React from 'react'
import './gallery.css'
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsFillShieldLockFill } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";


const Gallery = () => {
  return (
    <div className="gallery">
         
      <a href="https://github.com/Albanofg/tienda-fotos" target="_blank" rel="noopener noreferrer">
        <div className="cards">
          <div className="info">
            <i className="icon"><FaReact/></i>
            <p className="txtInfo">Código en GitHub de mi proyecto final <br /> para el curso de ReactJs de CoderHouse</p>
          </div>
          <img className="imgCards" src="https://www.mediafire.com/convkey/82d6/v1e0ib9o22eyawr9g.jpg" alt="ReactJs"/>
        </div>
      </a>
      
      <a href="https://github.com/Albanofg/TonicoHnos" target="_blank" rel="noopener noreferrer">
        <div className="cards">
          <div className="info">
            <i className="icon"><SiJavascript/></i>
            <p className="txtInfo">Código en GitHub de mi proyecto final <br /> para el curso de Javascript de CoderHouse</p>
          </div>
          <img className="imgCards" src="https://www.mediafire.com/convkey/80f8/e4cobhttvkkjbia9g.jpg" alt="Javascript"/>
        </div>
      </a>

      <a href="https://github.com/Albanofg/resume" target="_blank" rel="noopener noreferrer">
        <div className="cards">
          <div className="info">
            <i className="icon"><GoBriefcase/></i>
            <p className="txtInfo">Codigo en GitHub de ésta página</p>
          </div>
          <img className="imgCards" src="https://www.mediafire.com/convkey/8fae/omcs62cd8v3h9mozg.jpg" alt="Portfolio"/>
        </div>
      </a>

      <a href="https://drive.google.com/file/d/1k5qSbrR5Olx3V4mEHc62gGF83HUyh44J/view?usp=sharing" target='_blank' rel="noopener noreferrer">
        <div className="cards">
          <div className='info'>
            <i className="icon"><BsFillShieldLockFill/></i>
            <p className="txtInfo">Análisis final para el curso de <br /> Ciberseguridad de CoderHouse</p>
          </div>
          <img className="imgCards" src="https://www.mediafire.com/convkey/1f79/hkjvc0dbk559e3bzg.jpg" alt="CySec"/>
        </div>
      </a>
      
    </div> 
  )
}

export default Gallery