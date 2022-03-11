import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  const [reposits, setReposits] = useState([
    {
      id: "repos1",
      nameRepos: "Allbirds-project",
      comment: "my first project",
      updated: "March 10.2022",
      langProg: "HTML",
      archive: "Public",
    },
    {
      id: "repos2",
      nameRepos: "React-project",
      comment: "my second project",
      updated: "1 hours ago",
      langProg: "React",
      archive: "Public",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <CardList reposits={reposits} />
    </div>
  );
}

export default App;
