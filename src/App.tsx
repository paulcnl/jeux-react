import "./App.css";
import Footer from "./Footer";

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
	);
}

export default App;
