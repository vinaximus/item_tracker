import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/Appbar/Appbar";
import EntryCard from "./components/EntryCard/EntryCard";

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <EntryCard></EntryCard>
    </div>
  );
}

export default App;
