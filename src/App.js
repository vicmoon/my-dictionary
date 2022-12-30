import Dictionary from "./Dictionary.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1>Dictionary</h1>
      
        <Dictionary />
       </header>
      <footer className="footer">
        Project coded by <a href= " http://victoriamunteanuportfolio.net/" target="_blank" rel="noreferrer" >  Victoria Munteanu</a>
      </footer>
    </div>
  );
}

export default App;
