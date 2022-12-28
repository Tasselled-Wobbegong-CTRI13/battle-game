import React from "react";

const HealthBar = (props) => {
    // const { bgcolor, completed } = props;
    const completed = 67;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: 'gray',
        borderRadius: 50,
        margin: 5,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'red',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span>{`${completed}%`}</span>
            </div>
        </div>
    )
}

export default HealthBar;