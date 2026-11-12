import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data.js';

function Header(){
	return( 
		<header className="header">
			<h1>
				Andy's Pizza Co.
			</h1>
		</header>
	);
}



function Pizza({name, ingredients, price, photoName, soldOut}){
	return(
		<div className={soldOut ? "pizza sold-out" : "pizza"}>
			<img src={photoName} alt={photoName} />
			<h3>{name}</h3>
			<p>{ingredients}</p>
			<p>{price}</p>
			<span>{soldOut ? "SOLD OUT" : soldOut}</span>
		</div>
	);
}

function Menu(){
	return(
		<div className="menu">
			<h2>Our Menu</h2>
			<div className="pizzas">
				{pizzaData.map((pizzaMap) =>
					<Pizza
					name={pizzaMap.name}
					ingredients={pizzaMap.ingredients} price={pizzaMap.price}
					photoName={pizzaMap.photoName} soldOut={pizzaMap.soldOut}
					/>
				)};
			</div>
		</div>
	); 
}

function Footer(){
	const hour = new Date().getHours();
	const isOpen = hour >= 10 && hour < 22
	return(
		<div>
			<footer className="footer">
				{isOpen ? "We're currently open" : "Sorry we're closed"}
			</footer>
		</div>
	);
}

function App(){
	return(
		<div className="container">
			<Header/>
			 <Menu />
			<Footer />
		</div>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<App />
);
