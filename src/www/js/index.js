import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['crimson red', 'red', 'white', 'blue', 'gold', 'green', 'yellow', 'black'];

class HelloWorld extends React.Component {

	constructor(props) {
		super();
		this.state = {
			colors: props.colors.concat(),
			newColor: ''
		};
		this.onChange = this.onChange.bind(this);
		this.addColor = this.addColor.bind(this);
	}

	addColor() {
		this.setState({
			colors: this.state.colors.concat(this.state.newColor),
			newColor: ''
		});
	}

	onChange(e) {
		this.setState({
			newColor: e.target.value
		});
	}

	render() {

		//this.props.message = 'Thanks for being awesome awesome awesome awesome awesome awesome students.';

		//return React.createElement('h1', null, 'Goodbye Class');
		return <div>
			<h1>{this.props.message}</h1>
			<ul>
				{this.state.colors.map(color => <li key={color}>{color}</li>)}
			</ul>
			<label>New Color: <input type='text' value={this.state.newColor} onChange={this.onChange} /></label>
			<button onClick={this.addColor}>Add Color</button>
		</div>;
	}

}

ReactDOM.render(<HelloWorld message='Wish you all the best of luck!' colors={colors} />, document.querySelector('main'));
