import React from 'react';
import './TodoPalette.css';

const Palette = ({color}) => {
    return (
        <div className="palette">
            <div className="color false" style={color}></div>
            <div className="color false" style={color}></div>
            <div className="color false" style={color}></div>
            <div className="color active" style={color}></div>
        </div>
    );
};

export default Palette;