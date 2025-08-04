import React from 'react';


const StyleText = ({ text, color }) => {
    const upperText = text.toUpperCase();

    const style = {
        color: color,
        fontSize: '1.2rem',
        fontWeight: 'bold',
    };

    return<p style={style}>{upperText}</p>
}

export default StyleText;