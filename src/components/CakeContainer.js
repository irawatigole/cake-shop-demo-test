import React from 'react';
import { connect } from 'react-redux';
import { CakeActions } from '../redux/cakes/CakeActions';

const mapStateToProps = state => {
	return {
		numOfCakes: state.numOfCakes
	};
};

const mapDispatchToProps = dispatch => ({
	buyCake: () => dispatch(CakeActions.buyCakeAction())
});

function CakeContainer(props) {
	console.log('PROPS', props);
	return (
		<div align='center'>
			<h1>Number of Cakes: {props.numOfCakes}</h1>
			<button onClick={props.buyCake}>Buy Cake</button>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);