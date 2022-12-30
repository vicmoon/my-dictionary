import Dictionary from "./Dictionary.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1>Dictionary</h1>
        <h5> <em> "Words, are of course the most poweful drug used by manking" <a href="https://www.britannica.com/biography/Rudyard-Kipling" target="_blank" rel="noreferrer">Rudyard Kipling</a></em></h5>
        <Dictionary />
       </header>
      <footer className="container">
        Project coded by <a href= " http://victoriamunteanuportfolio.net/" target="_blank" rel="noreferrer" > Victoria Munteanu</a>
      </footer>
    </div>
  );
}

export default App;
