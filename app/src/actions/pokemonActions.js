import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchPokemon = () => {
	// console.log('fetchPokemon working: inside ');
	return dispatch => {
		// console.log('after first dispatch  working: ', dispatch);
		dispatch({ type: FETCH_START });

		dispatch(fetchStart());
		axios
			.get('https://pokeapi.co/api/v2/pokemon/')
			.then(res => {
				// console.log(
				// 	'1st axios working: ',
				// 	res.data.results[Math.floor(Math.random() * res.data.results.length)].url
				// );
				// res.data.results.forEach(poke => {
				axios
					// .get(`${poke.url}`)
					.get(`${res.data.results[Math.floor(Math.random() * res.data.results.length)].url}`)
					.then(res => {
						console.log('2nd axios working: ', res.data);
						// console.log(res.data);
						dispatch({ type: FETCH_SUCCESS, payload: res.data });
					})
					.catch(err => {
						console.log(err);
						dispatch({ type: FETCH_FAIL, payload: err });
					});
				// });
			})
			.catch(err => {
				dispatch({ type: FETCH_FAIL, payload: err });
			});
	};
};

export const fetchStart = () => {
	return { type: FETCH_START };
};

export const fetchSuccess = poke => {
	return { type: FETCH_SUCCESS, payload: poke };
};

export const fetchFail = error => {
	return { type: FETCH_FAIL, payload: error };
};
