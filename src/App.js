import logo from './logo.svg';
import './App.css';
import Car from './Car';

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



export default App;
