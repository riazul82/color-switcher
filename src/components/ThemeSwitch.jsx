import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = ({ theme, setTheme }) => {
    const [icon, setIcon] = useState(faMoon);

    const handleTheme = () => {
        setIcon(() => icon === faMoon ? faSun : faMoon);
        setTheme(() => theme === 'Dark' ? 'Light' : 'Dark');
    }

    return (
        <div className="themeToggleBtn" onClick={handleTheme}>
            <FontAwesomeIcon className="themeToggleIcon" icon={icon} style={theme === 'Dark' ? {color: 'violet'} : {color: 'crimson'}} />
            <p style={theme === 'Dark' ? {color: 'violet'} : {color: 'crimson'}}>Change theme</p>
        </div>
    );
}

export default ThemeSwitch;