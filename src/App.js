import React from "react";
import MissionsList from "./components/MissionsList/MissionsList";
import IsolatedCountries from "./components/IsolatedCountries/IsolatedCountries";
import { getMissions } from "./data/missions.js";
import "./App.css";

function App() {
  const missions = getMissions();
  return (
    <div className="App">
      <IsolatedCountries missions={missions} />
      <MissionsList missions={missions} />
    </div>
  );
}

export default App;
