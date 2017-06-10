import React from 'react'
import PropTypes from 'prop-types'

const Header = function(props){
  return(
    <h1 className='header'> {props.heading} </h1>
    )
}

Header.propTypes = {heading: PropTypes.string.isRequired}

export default Header