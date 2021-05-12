import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

import DisplayPokemon from './DisplayPokemon';
import PokeList from './PokeList';

const App = props => {
	return (
		<div className="App">
			<h1>HELLO</h1>
			<DisplayPokemon />
			<PokeList />
			{props.pokemon.pokemon.map((poke, i) => {
				return (
					<div key={Date.now() * i}>
						<h2>{poke.name}</h2>
						<img
							height="300px"
							src={poke.sprites.other['official-artwork']['front_default']}
							alt={poke.name}
						/>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon
	};
};

export default connect(mapStateToProps, {})(App);
