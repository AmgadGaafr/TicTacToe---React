import './Reset.scss';

function Reset({ winner, onReset }) {
    if (winner === null) {
      return;
    }
    return (
      <button onClick={onReset} className="reset-button">
        Play Again
      </button>
    );
  }
  
  export default Reset;