import React from "react";
import Card from "./card";
import Info from "../info";

function Createcard(info) {
  return (
    <Card
      key={info.key}
      emoji={info.emoji}
      name={info.name}
      meaning={info.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <div className="container">{Info.map(Createcard)}</div>
      <footer>Copyright © Guneet Singh </footer>
    </div>
  );
}

export default App;
