import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Antalya" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/KozlitinaNatalia/Weather_app_react"
          target="_blank"
          rel="noopener noreferrer">
            Nataliia Kozlitina
          </a>{" "}
          and is open-sourced
        </footer>
      </div>
    </div>
  );
}

export default App;
