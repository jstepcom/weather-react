import Navbar from './Navbar';
import Velociraptor from './img/Velociraptor.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchEngine from './SearchEngine';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={Velociraptor} className="App-velociraptor" alt="velociraptor" /> 
      <SearchEngine/>   

    </div>
  );
}

export default App;
