import Header from "./Components/Header";
import Home from "./Pages/Home";
import Status from "./Pages/Status";
import Exchange from "./Pages/Exchange";
import Gallery from "./Pages/Gallery";
import Faq from "./Pages/Faq";
import Footer from "./Components/Footer";
import "../src/Assets/css/custom.css";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="body d-flex flex-column h-100">
      <Header />
      <Switch>
        <Route path="/status" exact>
          <Status />
        </Route>
        <Route path="/exchange" exact>
          <Exchange />
        </Route>
        <Route path="/gallery" exact>
          <Gallery />
        </Route>
        <Route path="/faq" exact>
          <Faq />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
