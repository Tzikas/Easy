import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
// React component
class anyComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			foods: []
		};
		this.setLunch = this.setLunch.bind(this);
		

	}


	createList() {
		console.log('in create list')
		console.log(this)
			return this.state.foods.map((food, i) => {
				console.log(food)
				return ( 
					<li key={i}> {food} </li>					
				       )
			})
	}

	render() {	
		return (
				<div onClick = {this.props.thankyou}>						
					<button onClick={ this.props.breakfast }>Are you serving breakfast?</button> 							    			  		  <button onClick={ this.props.lunch }>Are you serving lunch?</button> 	
					<button onClick={ this.setLunch }>Are you settingLunch?</button> 					
					<button onClick={ this.props.dinner }>Are you serving dinner?</button> 									
					<ul>

						{ this.createList() }

					</ul>	
				</div>

		       )
	}

	setLunch(dispatch){
		alert(' we are serving lunch' ); 			
		console.log(this)
		//this.setState({'foods':this.state.foods})
			
		this.setState({'foods':['a','b']})
	}
}




function foodTimes(dispatch) {
	console.log('dispatch:');console.log(dispatch);
	return {
		dinner: function(){
			alert(' we are not serving dinner' ); 			
		},
			lunch: function(){
				alert(' we are serving lunch' ); 			

				dispatch(lunchAction); 

			},
			breakfast: function(){
				alert(' we are not serving breakfast' ); 			
			}

	}
}

function thanks(dispatch){
	return { 
		thankyou: function(){ 
			alert('ok thanks')
		}

	}
}

const define_an_action = {
	type:'use this to finally call the action that will change the state',
	whatever: {'you':['want',2,'put']},
	whatIsThis: function(){ console.log(this); }	        	
}


const lunchAction = {
	type:'LUNCH TIME',
	lunchFoods: ['kale soup', 'grilled cheese'] 


} 





// Reducer
function addStuffToStore(state={foods:['mango']}, action){
	console.log('action:');console.log(action)
	console.log('state:');console.log(state);
	console.log(this)
	switch (action.type) {
		case 'LUNCH TIME':
			if(action.lunchFoods){
				state.foods = [...state.foods, ...action.lunchFoods]
				console.log(state);

				return state;
			}

		default:
			return state

	}

}



const foodStore = createStore(addStuffToStore) 


function food(state){
	console.log('food')	
	console.log(state);
	//state.foods = stuff;
	return {
		state
	}

}


// Connected Component
const App = connect(
		food,
		foodTimes

		)(anyComponent)


ReactDOM.render(
		<Provider store={foodStore}>
		<App/> 
		</Provider>,
		document.getElementById('root')
	       )


