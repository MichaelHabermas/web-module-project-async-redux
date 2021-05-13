import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/pokemonActions';

const initialState = {
	pokeOnDisplay: {
		name: 'caterpie',
		image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
		sprites: {
			other: {
				'official-artwork': {
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
				}
			}
		}
	},
	pokemon: [],
	isFetching: false,
	err: ''
};

// console.log('initialState: ', initialState);

export const reducer = (state = initialState, action) => {
	// console.log('action working: ', action.type);
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SUCCESS:
			// console.log(action.payload);
			return {
				...state,
				pokeOnDisplay: action.payload,
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
