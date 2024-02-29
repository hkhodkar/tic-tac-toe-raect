import { useState } from "react";

import Player from './Player.jsx';
import GameBoard from './GameBoard.jsx';
import Log from "./Log.jsx";
import { GameOver } from "./GameOver.jsx";
import * as helpers from "../helpers.js";

export default function Game() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState(helpers.PLAYERS);
    const activePlayer = helpers.driveActivePlayer(gameTurns);
    const gameBoard = helpers.driveGameBoard(gameTurns);
    const winner = helpers.driveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurns(prevTurns => {
            const currentPlayer = helpers.driveActivePlayer(prevTurns);
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurns
            ]
            return updatedTurns;
        })
    }

    const handlePlayerNameChange = (symbol, newName) => {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

    const onResetMatch = () => {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player changePlayerName={handlePlayerNameChange} name={helpers.PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} />
                    <Player changePlayerName={handlePlayerNameChange} name={helpers.PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                {(winner || hasDraw) && <GameOver resetMatch={onResetMatch} winner={winner} />}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}