import { useState, useEffect } from 'react';
import Board from "../Board/Board";
import WinningCombinations from '../../WinningCombinations';
import GameOver from '../GameOver/GameOver';
import './TicTacToe.scss';
import Reset from '../Reset/Reset';

const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const [winner, setWinner] = useState(null);
  const [strikeClass, setStrikeClass] = useState('');

  // Handle tile click
  const handleTileClick = (index) => {
    // If the tile is already filled or the game is over, return
    if (tiles[index] !== null) return;
    // If the game is over, return
    if (winner) return;
    // Fill the tile with the current player
    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);
    // Change the current player
    setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
  }

  // Check if there is a winner
  const checkWinningCombinations = (tiles) => {
    for (const { combo, strikeClass } of WinningCombinations) {
      const [a, b, c] = combo;
      if (tiles[a] && tiles[b] === tiles[a] && tiles[c] === tiles[a]) {
        setWinner(tiles[a]);
        setStrikeClass(strikeClass);
      }
      // Check if all tiles are filled in
      const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
      if (areAllTilesFilledIn) {
        // If all tiles are filled in and there is no winner, it's a draw
        for (const { combo, strikeClass } of WinningCombinations) {
          const [a, b, c] = combo;
          if (tiles[a] && tiles[b] === tiles[a] && tiles[c] === tiles[a]) {
            setWinner(tiles[a]);
            setStrikeClass(strikeClass);
          }
          setWinner('draw');
        }
      }
    }
  };

  // Reset the game
  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setCurrentPlayer(PLAYER_X);
    setWinner(null);
    setStrikeClass('');
  }

  // Check if there is a winner when the tiles change
  useEffect(() => {
    checkWinningCombinations(tiles);
  }, [tiles]);

  return (
    <div>
    <h1>Tic Tac Toe</h1>
      <Board tiles={tiles} handleTileClick={handleTileClick} currentPlayer={currentPlayer} strikeClass={strikeClass}/>
      <GameOver winner={winner} />
      <Reset winner={winner} onReset={handleReset} />
    </div>
  )
}

export default TicTacToe
