import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Nav extends Component{

	render() {
		return (
			<div style={[styles.container, styles[this.props.transitionClass]]}/>
		)
	}
}
const styles = {
	container: {
		width: '20%',
		position: 'absolute',
		top: 0,
    left: 0,
		bottom: 0,
		background: '#272727',
	},
  transition: {
    animation: 'OPEN-CLOSE 1s'
  },
}

Nav.displayName = 'Navigation'

export default Radium(Nav)
