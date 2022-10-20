import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ChooseUs from './components/ChooseUs';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Products/>
      <AboutUs/>
      <ChooseUs/>
      <Reviews/>
    </div>
  );
}

export default App;
