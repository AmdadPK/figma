import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Sliders from './component/Sliders/Sliders';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Sliders />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
