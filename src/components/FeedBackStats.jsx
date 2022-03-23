import React,{useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext'

const FeedBackStats = () => {
  const {feedBack} = useContext(FeedBackContext)
    //Calculate ratings avg
    let average = feedBack.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0)/feedBack.length
    //make average to one decimal place with  toFixed and replace remove the .0
    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

export default FeedBackStats