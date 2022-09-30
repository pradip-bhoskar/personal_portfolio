import React from 'react'
import './Experience.css'

import { useContext } from 'react';
import { themeContext } from '../../Context';

const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience' >

      <div className="achievement">
        <div className="circle" style={darkMode ? { background: "var(--orange)" } : {}}>8+</div>
        <span>known</span>
        <span>technologies</span>
      </div>

      <div className="achievement">
        <div className="circle" style={darkMode ? { background: "var(--orange)" } : {}}>20+</div>
        <span>completed</span>
        <span>projects</span>
      </div>

      <div className="achievement">
        <div className="circle" style={darkMode ? { background: "var(--orange)" } : {}}>5+</div>
        <span>live</span>
        <span>websites</span>
      </div>

    </div>
  )
}

export default Experience;