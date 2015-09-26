import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Nav extends Component{

	render() {
		return (
			<div style={[styles.container, styles[this.props.transitionClass]]}/>
		)
	}
}

const openCloseAnimation = Radium.keyframes({
  '0%': { width: '20%' },
  '50%': { width: '100%' },
  '100%': { width: '20%' }
})

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
    animation: `${openCloseAnimation} 1s ease-in-out`
  },
}

Nav.displayName = 'Navigation'
Nav.defaultProps = {
  transitionClass: ''
}
Nav.propTypes = {
  transitionClass: PropTypes.string.isRequired
}

export default Radium(Nav)
