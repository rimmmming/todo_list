import React from 'react';
import './TodoPalette.css';

const Color = ({ color }) => {
    return (
        <div className={`color`} style={{ background: color}}></div>
    )
}
    
const Palette = ({colors}) => {
    const colorList = colors.map(
    (color) => (<Color color={color} />));

    return (
        <div className="palette">
            {{colorList}}
        </div>
    );
};


export default Palette;