import pika from "/pikapika.gif";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {

  return (
    <>
      <div>
        <img src={pika} className="logo" alt="Vite logo" />
      </div>
      <h1>PokeApp</h1>
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
