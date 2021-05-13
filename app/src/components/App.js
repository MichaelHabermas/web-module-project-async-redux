import React from 'react';
import '../App.css';
// import { connect } from 'react-redux';

import DisplayPokemon from './DisplayPokemon';
// import PokeList from './PokeList';

const App = () => {
	return (
		<div className="App">
			<h1>HELLO</h1>
			<DisplayPokemon />
			{/* <PokeList /> */}
		</div>
	);
};

// const mapStateToProps = state => {
// 	return {
// 		pokemon: state.pokemon.pokemon
// 	};
// };

// export default connect(mapStateToProps, {})(App);
export default App;
