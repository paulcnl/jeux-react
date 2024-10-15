import Header from './Header'
import Carroussel from "./components/carroussel"; // Assure-toi d'utiliser une majuscule pour le nom du composant
import Grid from "./components/grid";
import "./App.css";


function App() {
  return (
    
    <div className="all">
      <div>
      <Header/>
    </div>
      <div className="grid">
        <Grid />
      </div>
      <div className="carroussel">
        <Carroussel />
      </div>
    </div>
  );
}

export default App;
