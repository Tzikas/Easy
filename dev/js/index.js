import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
// React component
class whateverClass extends Component {
 	constructor (props, context) {
    		super(props, context)
		console.log(this, props, context)
    		this.state = {
      			counter: 0
    		}
		this.add = this.add.bind(this);
		this.subtract = this.subtract.bind(this);
		
		//this.props.insideAction = this.props.insideAction.bind(this);
	}

	add(){
		//console.log('insideClass ',this) 							
		//console.log(store.getState())			
		this.state.counter++; 
		this.forceUpdate()

		//this.setState({counter:this.state.counter++})
	}
	subtract(){
		//console.log('insideClass ',this) 							
		//console.log(store.getState())			
		this.state.counter--; 
		this.forceUpdate()

		//this.setState({counter:this.state.counter++})
	}
	
	update(e){
		this.setState({
			a:this.refs.a.value,
			b:e.target.value
		})
	}
	
	render() {

		    	var style = {
      				color: this.props.current ,
				fontSize:this.state.counter + 'em'
	  	  	};
			return (
					<div>
						
						<hr />
						<p>inside render</p>
						
						<input ref="a" type="text" onChange={this.update.bind(this)} />{ this.state.a }
						<br />
						
						<input ref="b" type="text" onChange={this.update.bind(this)} />{ this.state.b }

						<br />
						<button ref={this.state.counter} onClick={function() { 
							
 							console.log('inside button', this); 
							console.log(store.getState())
							//console.log({this.state.counter})
							this.state.counter--; 
							this.forceUpdate()

						
						} }>insideButton {this.state.counter} </button>



						<hr />
						<p>inside class</p>

						<button onClick={this.add}> + </button>
						<button onClick={this.subtract}> - </button>



						<hr />
						<p>inside props, actions & reducers</p>
						
						<button onClick={this.props.insideProps}>insideProps </button>	

						<button onClick={this.props.insideAction}>insideAction </button>	

						<button onClick={this.props.insideReducer}>insideReducer </button>

						<h1 style={style}>{this.state.counter}</h1>
						<h2>{this.props.current}</h2>
						<h2 style={style} >{this.state.a}</h2>
						
						
						<Welcome name="yo" color={this.color} add={this.add} inside={this.props.insideAction} />
					</div>
			       )
	}
}





class newComponent extends Component {
 	constructor (props, context) {
    		super(props, context)
		console.log(this, props, context)
	}
	render() {
		return(
			<div>sup</div>	
		      )
	}	

}

class Welcome extends React.Component {
 	constructor (props, context) {
    		super(props, context)
		console.log("Welcome");
		console.log(this, props, context)
	}
	
  render() {
    return (<div>
		    <h1>Hello, {this.props.name}</h1>
		    <button onClick={this.props.add}> + </button>	
		    <button onClick={this.props.inside}>inside </button>	
    
    
       	</div>) 
  }
}


//first
function mapDispatchToProps(dispatch) {
	return {
		insideProps:function(props){
			//that.state.counter++; 
			//that.forceUpdate();
			
			
			console.log('%c inside Props','background:yellow');
			console.log(props)
			var d1 = document.getElementById('root');
			d1.insertAdjacentHTML('beforeend', <App />);			
				
			//if(document.body != null){ document.body.append('<p>sup</p>') } 
		},
		insideReducer:function(){
			dispatch(defineAction); 
		},
		insideAction:function(){
			dispatch(defineAnotherAction); 
		} 
		
	}
}


const defineAction = {
	type:'call your action'
}



const defineAnotherAction = {
	type:'call another action',
	another: function(){
		console.log('%c insideAction ','background: red; color: #bada55'); 
	}
}


const colorAction = {
	type:'color action',
	changeColor: function(){
		console.log('%c changeColor ','background: pink; color: #bada55'); 
		return state={'current':'red'}; 			
		
	}

} 

function reducer(state={current:'nada'}, action){
	//console.log('- called reducer ',state,action) 
	switch (action.type) {
		case 'call your action':
			console.log('%c insideReducer', 'background: blue; color: #bada55')
			return state={'current':'blue'}
			//return this.setState({'current':'blue'})

		case 'call another action':
			action.another()
			//return this.setState({'current':'red'})	
			return state={'current':'red'}

		case 'color action':
			var state = action.changeColor()
			//return state;
			return state={'current':'red'}
			
		default:
  			return state;
	}
}
	
		

const store = createStore(reducer) 


function mapStateToProps(state) {
		///console.log('- called map state to props ',state)
		return {
	//		state
 	 	  	current: state.current
	//		
		}
}




// Connected Component
const App = connect(
		mapStateToProps,
		mapDispatchToProps
		)(whateverClass)

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	       )






/*
	componentWillMount() {
		console.log('componentWillMount')
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	componentDidUpdate(prevProps, prevState){
		console.log('componentDidUpdate')
	}
	componentWillUpdate(prevProps, prevState){
		console.log('componentWillUpdate')
	}
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps')
	}*/


