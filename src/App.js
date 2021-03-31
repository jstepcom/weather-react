import Weather from './Weather';
import SearchEngine from './SearchEngine';

import './style/App.css';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather />
        <footer>This code is <a href="https://github.com/jstepcom/weather-react" target="_blank">Open Sourced</a> on github</footer>
      </div>
    </div>
  );
}
export default App;
