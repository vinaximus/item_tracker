import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/Appbar/Appbar";
import EntryGrid from "./components/EntryGrid/EntryGrid";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import entryReducer from "./reducers/entryReducer";

function App() {
  var initialState = { entries: [] };
  const [entriesState, entriesDispatch] = useReducer(
    entryReducer,
    initialState
  );

  useEffect(() => {}, []);

  return (
    <div className="App">
      <AppBar dispatcher={entriesDispatch}></AppBar>
      <EntryGrid entries={null}></EntryGrid>
    </div>
  );
}

export default App;
