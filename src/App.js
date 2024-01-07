import logo from './logo.svg';
import './App.css';

const App =()=> {
  return (
    <div className="App">
        <SampleComponent title="testing one" value="32" />

        <Car model="Toyota" price="32" />
        <Car model="susuki" />
    </div>
  );
}

const SampleComponent =(props) => {
  return (
    <div>
      <h1>{props.title} value: {props.value} </h1>
    </div>
  )
}

const Car=(prpty) => {
  return (
    <div>
      <h2>Car model - {prpty.model}</h2>

      {prpty.price && //if have price then show price(Conditional rendaring)
        <p>Price - {prpty.price}</p>
      }
    </div>
  )
}

export default App;
