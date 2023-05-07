import logo from './logo.svg';
import './App.css';
import Header from './custom_components/Header/Header';
import Body from './custom_components/Body/Body';
import Slider from './custom_components/Slider/Slider';
import Card from './custom_components/Card/Card';

function App() {


  let products = [
    {
      name: "gaming laptop",
      description: " this is gaming item",
      price: 75000,
    },
    {
      Mobile: " Nokia",
      description: " this is longlasting mobile",
      price: 15000,
    },
  ];
  return (
    <div className="App">
     <Header></Header>
     <Slider></Slider>
     <Body> </Body>

    </div>
  );
}

export default App;
