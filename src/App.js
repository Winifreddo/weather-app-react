import Row from "./Row";
import Form from "./Form";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="App">
     <Form />
     <Weather />
     <Row />
<p >
  <a href="https://github.com/Winifreddo/weather-app-react" className="link">Open-Source code</a> by Leigh Richards
</p>
      </div>
    </div>
  );
}

export default App;
