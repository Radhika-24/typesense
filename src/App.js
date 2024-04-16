import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Typesense from "typesense";

function App() {
  const typesenseClient = new Typesense.Client({
    nodes: [
      {
        host: "5vaihwy8qg16stc9p.a1.typesense.net",
        port: 443,
        protocol: "https",
      },
    ],
    apiKey: "fLCYjSOT3yTvQAXnGrI2vqFW3fRfnN3I",
    connectionTimeoutSeconds: 5,
  });

  useEffect(() => {
    typesenseClient
      .collections("dev_Creators")
      .documents()
      .search({
        q: "*",
        query_by: "tiktokUsername, legalName",
      })
      .then((results) => {
        console.log(results);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
