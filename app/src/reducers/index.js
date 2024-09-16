import { combineReducers } from 'redux';

import pokemonReducer from './pokemonReducer';

export const rootReducer = combineReducers({
	pokemon: pokemonReducer
});
