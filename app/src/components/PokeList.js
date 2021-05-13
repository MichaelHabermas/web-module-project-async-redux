import React from 'react';
import { connect } from 'react-redux';
import PokeCard from './PokeCard';

const PokeList = props => {
	// while (!props.pokemon.length) return <div>Loading 2...</div>;

	return (
		<>
			{props.pokemon.map((poke, i) => {
				return (
					<div key={Date.now() * i}>
						<PokeCard poke={poke} />
					</div>
				);
			})}
		</>
	);
};

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon.pokemon
	};
};

export default connect(mapStateToProps, {})(PokeList);
