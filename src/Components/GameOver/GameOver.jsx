import './GameOver.scss';

function GameOver({ winner }) {

    if (winner === 'X') {
        return <div className="game-over">X Wins</div>;
    }
    if (winner === 'O') {
        return <div className="game-over">O Wins</div>;
    }
    if (winner === 'draw') {
        return <div className="game-over">Draw</div>;
    }
}

export default GameOver;