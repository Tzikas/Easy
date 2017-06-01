import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
// React component
class Whatever extends Component {

	render() {
		const { superDuperComplicatedFunction } = this.props
			return (
					<div>
						<button onClick={function() { alert('this is a simple inline function'); console.log(this) } }>Simple Inline Function</button>  						<button onClick={superDuperComplicatedFunction}>Super Duper Complicated Function </button>
					</div>
			       )
	}
}


const define_an_action = {
		type:'use this to finally call the action that will change the state',
		whatever: {'you':['want',2,'put']},
		whatIsThis: function(){ console.log(this); }
	        	
}



// Reducer
function REDUCER__________useThisToChangeTheStuffWithinTheStore(state={blah:'blah'}, action){
	        console.log(action) 
		switch (action.type) {
			case 'use this to finally call the action that will change the state':
				action.whatIsThis(); 
				action.whatever = 234567890;
				return state.blah = 'nindfsdko';
			default:
				return state

		}

}
const store = createStore(REDUCER__________useThisToChangeTheStuffWithinTheStore) 


function mapStateToProps(state) {
		console.log(state)
		return {
			state
		}
}


function mapDispatchToProps(dispatch) {
	return {
		superDuperComplicatedFunction: function(){
			alert('superDuperCompldddicatedFunction')
			console.log(this);
			dispatch(define_an_action)
		}  

	}
}

// Connected Component
const App = connect(
		mapStateToProps,
		mapDispatchToProps
		)(Whatever)

ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>,
		document.getElementById('root')
	       )


