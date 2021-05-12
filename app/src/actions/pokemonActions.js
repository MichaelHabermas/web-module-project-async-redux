import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

// useEffect(() => {
// 	axios
// 		.get('https://pokeapi.co/api/v2/pokemon/')
// 		.then(res => {
// 			// console.log('multi P data', res.data.results);
// 			// setPokemon(res.data.results);
// 			res.data.results.forEach(poke => {
// 				axios
// 					.get(`${poke.url}`)
// 					.then(res => {
// 						console.log('one P data', res.data);
// 						setPokemon([...pokemon, res.data]);
// 						// console.log('image: ', res.data.sprites['front_default']);
// 					})
// 					.catch(err => {
// 						console.log(err);
// 					});
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// }, []);

export const fetchPerson = () => {
	return dispatch => {
		dispatch({ type: FETCH_START });

		dispatch(fetchStart());
		axios
			.get('https://pokeapi.co/api/v2/pokemon/')
			.then(res => {
				// console.log('multi P data', res.data.results);
				// setPokemon(res.data.results);
				res.data.results.forEach(poke => {
					axios
						.get(`${poke.url}`)
						.then(res => {
							// console.log('one P data', res.data);
							dispatch({ type: FETCH_SUCCESS, payload: res.data });
						})
						.catch(err => {
							dispatch({ type: FETCH_FAIL, payload: err });
						});
				});
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
