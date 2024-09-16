import React from 'react';
import { connect } from 'react-redux';

import { fetchPokemon } from '../actions/pokemonActions';

const DisplayPokemon = props => {
	const { isFetching, error, dispatch } = props;

	// useEffect(() => {
	// 	dispatch(fetchPokemon());
	// 	// props.fetchPerson();
	// }, []);

	const handleClick = () => {
		// console.log('handleClick is firing');
		// props.fetchFail("Pushed the button too hard!!!");
		dispatch(fetchPokemon());
		// console.log('handleClick is finishing');
	};

	if (error) {
		return <h2>We got an error: {props.error}</h2>;
	}

	if (isFetching) {
		return <h2>Fetching person for ya!</h2>;
	}
	return (
		<>
			<h3>Display Poke</h3>
			{console.log('props.pokeOnDisplay: ', props.pokeOnDisplay)}
			<h2>{props.pokeOnDisplay.name}</h2>
			{/* <img height="500px" src={props.pokeOnDisplay.image} alt={props.pokeOnDisplay.name} /> */}
			<img
				height="500px"
				src={props.pokeOnDisplay.sprites.other['official-artwork']['front_default']}
				alt={props.pokeOnDisplay.name}
			/>
			<button onClick={e => handleClick()}>Get Some Pokemon</button>
		</>
	);
};

const mapStateToProps = state => {
	return {
		pokeOnDisplay: state.pokemon.pokeOnDisplay,
		isFetching: state.pokemon.isFetching,
		error: state.pokemon.error
	};
};

// const mapDispatchToProps = dispatch => ({ fetchPokemon: () => dispatch(fetchPokemon()) });
// export default connect(mapStateToProps, { mapDispatchToProps })(DisplayPokemon);

export default connect(mapStateToProps)(DisplayPokemon);
