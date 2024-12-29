import React from "react";
import Card from "./card";
import Footer from "./footer";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";


//img
import icono from "../../img/icono.png"
import fanart from "../../img/fanart.png"
import comisiones from "../../img/comisiones.png"
import mocup from "../../img/mocap.png"




const card = [
	{
		image: icono,
		title: "About Me",
		description: "Artista de Barcelona, especializada en concept-Art e Ilustración. Tambien maneja 3D, After Effects y un poco de Edicion.",
        
	},
	{
		image: fanart,
		title: "FanArts",
		description: "Abierta ha hacer ilustraciones y de libros, series, y animaciones que tengas favoritas. Como jjk, Trono de Cristal o Starwars...",
        
	},
	{
		image: comisiones,
		title: "Comisiones",
		description: "Añadir Logos, mocups, o incluso iconos y pantallas de carga para tus streams o empresas!",
        
	},
	{
		image: mocup,
		title: "Cuervos",
		description: "Especial mencion a este Fanzine, donde ocho artistas donde me incluyo participaron para crear pequeñas historias relacionadas con cuervos!",
        
	}
];


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{card.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card image = {item.image} title = {item.title} description={item.description}/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;