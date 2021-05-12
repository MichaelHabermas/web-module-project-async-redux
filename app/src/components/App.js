import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function App() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		axios
			// .get('https://api.open5e.com/monsters/')
			.get('https://pokeapi.co/api/v2/pokemon/')
			.then(res => {
				console.log(res.data.results);
				setPokemon(res.data.results);
				// axios
				// 	.get('https://www.dnd5eapi.co/api/monsters/aboleth')
				// 	.then(res => {
				// 		console.log(res.data);
				// 	})
				// 	.catch(err => {
				// 		console.log(err);
				// 	});
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div className="App">
			<h1>HELLO</h1>
			{pokemon.map((poke, i) => {
				return (
					<div key={Date.now() * i}>
						<h2>{poke.name}</h2>
						<a href={poke.url} alt={poke.name}>
							See it here
						</a>
					</div>
				);
			})}
		</div>
	);
}

export default App;
