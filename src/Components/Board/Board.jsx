import Tile from "../Tile/Tile";
import Strike from "../Strike/Strike";
import "./Board.scss";
import GameOver from "../GameOver/GameOver";

function Board({ tiles, handleTileClick, currentPlayer, strikeClass}) {
    return ( 
        <div className="board">
        <Tile className="right-border bottom-border" tiles={tiles[0]} onClick={() => handleTileClick(0)} currentPlayer={currentPlayer}/>
        <Tile className="right-border bottom-border" tiles={tiles[1]} onClick={() => handleTileClick(1)} currentPlayer={currentPlayer}/>
        <Tile className="bottom-border" tiles={tiles[2]} onClick={() => handleTileClick(2)} currentPlayer={currentPlayer}/>
        <Tile className="right-border bottom-border" tiles={tiles[3]} onClick={() => handleTileClick(3)} currentPlayer={currentPlayer}/>
        <Tile className="right-border bottom-border" tiles={tiles[4]} onClick={() => handleTileClick(4)} currentPlayer={currentPlayer}/>
        <Tile className="bottom-border" tiles={tiles[5]} onClick={() => handleTileClick(5)} currentPlayer={currentPlayer}/>
        <Tile className="right-border" tiles={tiles[6]} onClick={() => handleTileClick(6)} currentPlayer={currentPlayer}/>
        <Tile className="right-border" tiles={tiles[7]} onClick={() => handleTileClick(7)} currentPlayer={currentPlayer}/>
        <Tile tiles={tiles[8]} onClick={() => handleTileClick(8)} currentPlayer={currentPlayer}/>
        <Strike strikeClass={strikeClass} />
        </div>
     );
}

export default Board;