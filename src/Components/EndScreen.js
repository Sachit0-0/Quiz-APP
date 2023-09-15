import React, { useEffect, useState } from 'react';

function EndScreen({ setGameState }) {
  const [lastScore, setLastScore] = useState(null);

  useEffect(() => {
    // Retrieve the last score from local storage
    const storedScore = localStorage.getItem("lastScore");
    if (storedScore) {
      setLastScore(parseInt(storedScore));
    }
  }, []);

  return (
    <div>
      <h2>End Screen</h2>
      {lastScore !== null ? (
        <p>Last Score: {lastScore}</p>
      ) : (
        <p>No previous score available.</p>
      )}
      <button onClick={() => setGameState('menu')}>Restart Game</button>
    </div>
  );
}

export default EndScreen;
