import React, { useState, useEffect } from 'react';
import ColorSwitch from './ColorSwitch';
import ThemeSwitch from './ThemeSwitch';
import { colorNames } from './ColorSwitch';

const View = () => {
    const [color, setColor] = useState('White');
    const [theme, setTheme] = useState('Dark');
    const [showPalette, setShowPalette] = useState(false);

    const handlePalette = () => {
        if (showPalette === true) {
            setShowPalette(false);
        }
    }

    const handleRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        setColor(colorNames[randomIndex]);
    }

    useEffect(() => {
        if (theme === 'Light' && color === 'White') {
            setColor('Black');
        } 

        if (theme === 'Dark' && color === 'Black') {
            setColor('White');
        }
    }, [theme, color]);

    return (
        <div className="viewContainer">
            <div className={`viewContent ${theme === 'Dark' ? 'darkTheme' : 'lightTheme'}`} onClick={handlePalette}>
                <div className="viewText">
                    <p style={{color: `${color}`}}>&#123; {theme} &#125; theme</p>
                    <h1 style={{color: `${color}`}}>This is &#123; {color} &#125; color!</h1>
                    <button onClick={handleRandomColor}>Random Color</button>
                </div>
            </div>
            <ColorSwitch theme={theme} setColor={setColor} showPalette={showPalette} setShowPalette={setShowPalette} />
            <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
    );
}

export default View;