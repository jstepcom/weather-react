import logo from './logo.svg';
import Navbar from './Navbar';
import Velociraptor from './img/Velociraptor.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />


      <img src={Velociraptor} className="App-velociraptor" alt="velociraptor" /> 

      <Container>
        <Card className="App-card" border="primary" style={{ width: '75rem' }}>
          <Row>
          <Col>
              <Card.Body>
              <Card.Text>
                Forecast
              </Card.Text>
              </Card.Body>
            </Col> 
          <Col>
              <Card.Title>Current Weather</Card.Title>
              <Card.Img className="App-card-img" variant="top" src="./Velociraptor" />
            </Col> 
         </Row>
        </Card>
      </Container>

    </div>
  );
}

export default App;
