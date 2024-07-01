import "./Tile.scss";

function Tile({ className, tiles, onClick, currentPlayer }) {
    let hoverClass = null;
    if (tiles == null && currentPlayer != null) {
        hoverClass = `${currentPlayer.toLowerCase()}-hover`;
    }
    return <div className={`tile ${className} ${hoverClass}`} onClick={onClick}>{tiles}</div>;
}

export default Tile;