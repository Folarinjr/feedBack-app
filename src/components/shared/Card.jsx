import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children, reverse}) => {
  return (
      //THIS IS CONDITIONAL CLASSNAME
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
  /**THIS IS CONDITIONAL STYLING
   * return(
   * <div
   * className='card'
   * style={{
   * backgroundColor: reverse ? 'rgba(0,0,0,.4)': '#fff',
   * color: reverse ? '#fff': 'rgba(0,0,0,.4)' 
   * }}>
   *    {children}
   * </div>)
   */
}

Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card