import React from 'react';
import Header from '../../Components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const NotFound = () => {
  return (
    <React.StrictMode>
      <Container fluid="md">
        <Row>
          <Header></Header>      
        </Row>
        <Row>
          <div>
            <h1>Not Found</h1>
          </div>
        </Row>
      </Container>
    </React.StrictMode>
    
  );
}

export default NotFound;