import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Appointments from "./components/appointments";
import OpenTok from "./components/open-tok";

function App() {
  return (
    <div className="App">
      <Header />
      <OpenTok />
    </div>
  );
}

export default App;
