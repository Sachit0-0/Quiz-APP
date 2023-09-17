import React, { useEffect, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit'; // Import MDB components

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
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Wrap content in an MDB Card */}
      <MDBCard style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)', fontSize:'34px' }}>
        <MDBCardBody>
          <MDBCardTitle className="text-center">End Screen</MDBCardTitle>
          {lastScore !== null ? (
            <p>Last Score: {lastScore}</p>
          ) : (
            <p>No previous score available.</p>
          )}
          <MDBBtn
            className="btn btn-primary btn-block"
            onClick={() => setGameState('menu')}
          >
            Restart Game
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default EndScreen;
