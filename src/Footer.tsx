import "./Footer.css";

interface FooterProps {
	nebulaShopInc: string;
	rightGuides: string;
	useCondition: string;
	saleCondition: string;
	information: string;
	political: string;
	parameter: string;
}

function Footer(props: FooterProps) {
	return (
		<div className="bas-de-page">
			<ul>
				<li>
					<a href="#">{props.nebulaShopInc}</a>
				</li>

				<li>
					<a href="#">{props.rightGuides}</a>
				</li>
				<li>
					<a href="#">{props.useCondition}</a>
				</li>
				<li>
					<a href="#">{props.political}</a>
				</li>
				<li>
					<a href="#">{props.information}</a>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
