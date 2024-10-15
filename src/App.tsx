import Header from "./Header";
import Carroussel from "./components/carroussel"; // Assure-toi d'utiliser une majuscule pour le nom du composant
import Grid from "./components/grid";
import Footer from "./Footer";
import "./App.css";

function App() {
  const footer = {
    nebulaShopInc: "©2024 Nebula Shop, Inc.",
    rightGuides: "Tous droits réservés Guides",
    useCondition: "Conditions d'utilisation",
    saleCondition: "Conditions générales de vente",
    information: "Informations sur l'entreprise",
    political: "Politique de confidentialité et de gestion des cookies",
    parameter: "Paramètres de confidentialité et de cookies",
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="all">
        <div className="grid">
          <Grid />
        </div>
        <div className="carroussel">
          <Carroussel />
        </div>
      </div>
      <div className="bas-de-page">
        <Footer
          nebulaShopInc={footer.nebulaShopInc}
          rightGuides={footer.rightGuides}
          useCondition={footer.useCondition}
          saleCondition={footer.saleCondition}
          information={footer.information}
          political={footer.political}
          parameter={footer.parameter}
        />
      </div>
    </div>
  );
}

export default App;
