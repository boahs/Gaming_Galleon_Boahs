import "./App.css";
import Home from "./components/home";
import Jim from "./components/jim";
import logo from "./assets/jack.jpg"; //load image pass as prop to component
import Boxxy from "./components/boxxy";
import ButtonMain from "./components/button";
import NavBar from "./components/nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ARRRRRRG!!!!! REMOVE - BLOAT - STEP ONE -</p>
        <NavBar />
        <Home />
        <Jim data={logo} />
        <Boxxy />
        <ButtonMain />
      </header>
    </div>
  );
}

export default App;
