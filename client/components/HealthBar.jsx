import React from "react";

const HealthBar = ({currentHP, maxHP}) => {
    // const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: 'gray',
        borderRadius: 50,
        margin: 5,
        position: 'relative',
        overflow: 'hidden'
    }

    const fillerStyles = {
        height: '100%',
        width: `${currentHP/maxHP*100}%`, 
        transitionProperty: 'width',
        transitionDuration: '1s',
        backgroundColor: 'red',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        left: '40%'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
            <span style={labelStyles}>{`${currentHP}`}</span>
            </div>
        </div>
    )
}

export default HealthBar;