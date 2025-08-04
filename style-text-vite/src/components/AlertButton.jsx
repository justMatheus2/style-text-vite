import React from "react";


const AlertButton = ({ label }) => {
    const handleClick = () => {
        alert(`Button label is: ${label}`);
    }

    return (
        <button onClick={handleClick} style={StyleSheet.button}>
            {label}
        </button>
    );
};

const Styles = {
    button: {
        padding: '10px 20px',
        backgroundColor: '#0077cc',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1rem',
    }
};

export default AlertButton;