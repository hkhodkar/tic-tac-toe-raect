export function GameOver({ winner, resetMatch }) {

    const gameStatus = winner ? `${winner} won!` : "it's a Is Draw"
    return (
        <div id="game-over">
            <h2>GameOver!</h2>
            <p>{gameStatus}</p>
            <p>
                <button onClick={resetMatch}>Rematch!</button>
            </p>
        </div>
    )
}