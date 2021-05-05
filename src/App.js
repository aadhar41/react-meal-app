import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
