import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar/NavBar";
import GistsDetail from "./Components/GitsDetail/GistsDetail";
import Searcher from "./Components/Searcher/Searcher";

function App() {
  return (
    <div className="App"
    style={
      {
        minHeight: "100vh",
        backgroundColor:"#22272e",
        backgroundPosition : "center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        display: 'flex',
        flexDirection:"column",
      }
    }>
      <BrowserRouter>
        <Route  exact path="/" component={NavBar}></Route>
        <Route exact path="/" component={Searcher}></Route>
        {/* <Route exat path="/gists" component={NavBar}></Route> */}
        <Route path="/gists/:name" component={GistsDetail}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
