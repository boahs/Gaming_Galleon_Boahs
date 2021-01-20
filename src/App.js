import "./App.css";
import Home from "./components/chakra/home";
import Jim from "./components/chakra/jim";
import logo from "./assets/jack.jpg"; //load image pass as prop to component
import Boxxy from "./components/chakra/boxxy";
import ButtonMain from "./button";
import NavBar from "./components/chakra/nav";
import TemplateColumnsGrid from "./components/chakra/grid";
import SpanningColumns from "./components/chakra/spanningColumns";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>ARRRRRRG!!!!! REMOVE - BLOAT - STEP ONE -</p> */}
        {/* <NavBar />
        <Home /> */}
        {/* <TemplateColumnsGrid /> */}
        <SpanningColumns />
        <Jim data={logo} />
        {/* <Boxxy /> */}
        {/* <ButtonMain /> */}
      </header>
    </div>
  );
}

export default App;
