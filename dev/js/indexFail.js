import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
// React component
class Restaurant extends Component {

	constructor(){
		super();
			this.state = {
			food: 'nothing'
		}
	}

	superFunction() {
		this.setState({food: 'i want food'});
	}

	render() {
			const things = [1, 2, 3];
		const { superDuperComplicatedFunction } = this.props
		console.log(this);
			return (
					<div>
						<h1 >{this.state.food}</h1>
						<button onClick={function() { alert('this is a simple inline function') } }>Simple Inline Function</button>  						
						<button onClick={superDuperComplicatedFunction}>Super Duper Complicated Function </button>
						<button onClick={this.superFunction.bind(this)}>Log This</button>
					</div>
			       )
	}
}


const define_an_action = {
		type:'click log'
}



// Reducer
function REDUCER__________useThisToChangeTheStuffWithinTheStore(state={blah:'hey'}, action){
		switch (action.type) {
			case 'use this to finally call the action that will change the state':
				action.whatIsThis(); 
				action.whatever = 234567890;
				return state.blah = 'nindfsdko';
			default:
				return state

		}

}

function changeFood(state, action) {
	switch (action.type) {
			case 'click log':
				state = {food: 'pizza '+Math.random() };
				return state;
			default:
				return state

		}
	// return {food: 'pizza '+Math.random() };
}

const store = createStore(changeFood);

function mapStateToProps(state) {
		console.log(state)
		return {
			state
		}
}

function whatAreWeDoing(dispatch) {
	return {
		superDuperComplicatedFunction: function(){
		dispatch(define_an_action); }
	}
}

// Connected Component
const App = connect(
		whatAreWeDoing,
		mapStateToProps
		)(Restaurant)

ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>,
		document.getElementById('root')
	       )


