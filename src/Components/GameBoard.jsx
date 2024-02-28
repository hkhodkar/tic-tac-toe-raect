import { useState } from "react"

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

    const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
    const onBoardClickHandler = (row, col) => {
        setGameBoard(lastState => {
            let updatedGameBoard = [...lastState.map(innerArray => [...innerArray])];
            if (updatedGameBoard[row][col] !== null) return updatedGameBoard;
            updatedGameBoard[row][col] = activePlayerSymbol;
            return updatedGameBoard;
        });
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onBoardClickHandler(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}