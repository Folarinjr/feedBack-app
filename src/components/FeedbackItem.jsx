import React, {useContext} from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedBackContext from '../context/FeedBackContext'

const FeedbackItem = ({item: {id, rating, text}, item}) => {
  const {deleteFeedBack, editFeedBack} = useContext(FeedBackContext)
    
  return (
    <Card reverse={false}>
        <div className="num-display">{rating}</div>
        <button onClick={() => editFeedBack(item)} className='edit'><FaEdit color='purple'/></button>
        <button onClick = {()=>deleteFeedBack(id)} className='close'><FaTimes color='purple'/></button>
        <div className="text-display">{text}</div>
    </Card>
  )
}
FeedbackItem.propTypes={
  item: PropTypes.object.isRequired
}

export default FeedbackItem