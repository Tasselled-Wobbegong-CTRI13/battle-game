import React from 'react'
import HeaderBox from './HeaderBox.jsx'
import GameBox from './GameBox.jsx'

export default function GameBoard() {
    return (
        <div className="containerBox">
            <HeaderBox />
            <GameBox />
        </div>
    )
}