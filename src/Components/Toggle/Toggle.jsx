import React from 'react'
import './Toggle.css'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

import { useContext } from 'react'
import { themeContext } from '../../Context'

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const changeTheme = () => {
        theme.dispatch({ type: 'toggle' })
    }

    return (
        <div className="toggle" onClick={changeTheme}>
            <Moon></Moon>
            <Sun></Sun>
            <div className="toggle_button"
                style={darkMode ? { left: "2px" } : { right: '2px' }}

            >
            </div>
        </div>
    )
}

export default Toggle;