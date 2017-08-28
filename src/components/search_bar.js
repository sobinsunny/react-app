
import React, { Component } from 'react';

class SerachBar extends Component {

	constructor(props) {
		super(props);
		this.state = { input_text: " "};
	}

	render () { 
	 	return (
	 	<div>
				<input 
				   value = { this.state.input_text }
					onChange = { this.handleChangeInput  } 
				/>
		</div>
	 	);
	}

	handleChangeInput =  (event) => {
		this.setState({input_text: event.target.value });
		this.props.onSerchTermChanage({term : this.state.input_text})
	}
}

export default SerachBar;

