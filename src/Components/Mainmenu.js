import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit'; // Import MDB components

function Mainmenu() {
  const { gamestate, setGameState } = useContext(QuizContext);

  // Custom CSS style for the transparent grey background
  const cardStyle = {
    backgroundColor: 'rgba(169, 169, 169, 0.7)', // Grey color with 70% opacity
    width: '22rem',
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    {/* Wrap content in an MDB Card */}
    <MDBCard style={cardStyle}>
      <MDBCardBody>
        <MDBCardTitle className="text-center" style={{ fontSize: '24px' }}>Kuan banega roadpati</MDBCardTitle>
        <MDBBtn
          className="btn btn-primary btn-block"
          style={{ fontSize: '18px', padding: '10px' }}
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </div>
  
  );
}

export default Mainmenu;
