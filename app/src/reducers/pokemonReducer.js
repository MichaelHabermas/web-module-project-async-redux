import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/pokemonActions';
import axios from 'axios';

const initialPokeData = [];
axios
	.get('https://pokeapi.co/api/v2/pokemon/')
	.then(res => {
		// console.log('multi P data', res.data.results);
		// setPokemon(res.data.results);
		res.data.results.forEach(poke => {
			axios
				.get(`${poke.url}`)
				.then(res => {
					console.log('one P data', res.data.sprites.other['official-artwork']['front_default']);
					initialPokeData.push(res.data);
					// console.log('image: ', res.data.sprites['front_default']);
				})
				.catch(err => {
					console.log(err);
				});
		});
	})
	.catch(err => {
		console.log(err);
	});

console.log('initialPokeData: ', initialPokeData);

const initialState = {
	pokemon: initialPokeData,
	isFetching: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				pokemon: [state.pokemon, action.payload],
				isFetching: false
			};
		case FETCH_FAIL:
			return {
				...state,
				error: action.payload,
				isFetching: false
			};
		default:
			return state;
	}
};

export default reducer;
