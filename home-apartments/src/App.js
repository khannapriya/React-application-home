import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { Summary } from "./components/Summary";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step3} />
        <Route exact path="/step4" component={Step4} />
        <Route exact path="/summary" component={Summary} />
      </Router>
    </div>
  );
}

export default App;
