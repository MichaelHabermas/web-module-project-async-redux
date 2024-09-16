import React from 'react';
// import { connect } from 'react-redux';

const PokeCard = props => {
	const { poke } = props;
	return (
		<>
			<h2>{poke.name}</h2>
			<img height="300px" src={poke.sprites.other['official-artwork']['front_default']} alt={poke.name} />
		</>
	);
};

export default PokeCard;
