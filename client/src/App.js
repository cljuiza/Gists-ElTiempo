import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar/NavBar";
import GistsDetail from "./Components/GitsDetail/GistsDetail";
import Searcher from "./Components/Searcher/Searcher";

function App() {
  return (
    <div className="App">
      <h1>El Tiempo</h1>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Searcher}></Route>
        <Route path="/gists/:id" component={GistsDetail}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
