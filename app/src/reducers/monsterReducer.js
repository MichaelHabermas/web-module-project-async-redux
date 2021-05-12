import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/monsterActions.js';

const initialState = {
	favoriteMonsters: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				favoriteMonsters: [...state.favoriteMonsters, action.payload]
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				favoriteMonsters: state.favoriteMonsters.filter(item => action.payload !== item.id)
			};
		// case TOGGLE_FAVORITES:
		// 	return {
		// 		...state,
		// 		displayFavorites: !state.displayFavorites
		// 	};
		default:
			return state;
	}
};

export default reducer;
