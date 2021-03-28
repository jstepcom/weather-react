import logo from './logo.svg';
import Velociraptor from './img/Velociraptor.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logos" /> 
      <h1 className="App-title"> Weather app </h1>
      <small>by JSCO</small>      
      </header>

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
