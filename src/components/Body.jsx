import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Body extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		let {props} = this
		return (
			<div style={styles.container}>
        <button onClick={this.props.clickHandler}>Trigger Slide Out</button>
			</div>
		)
	}
}

const styles = {
	container: {
		width: '80%',
		height: '500px',
		display: 'inline-block',
		position: 'absolute',
		top: 0,
		right: 0
	},
}

Body.displayName = 'Body'

export default Radium(Body)
