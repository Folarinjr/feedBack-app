import React, {useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext'

import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'

import Loading from './shared/Loading'

const FeedBackList = () => {
  const {feedBack, isLoading} = useContext(FeedBackContext)

    if (!isLoading && !feedBack){
        return('NO FEEDBACK YET...')
    };

    return isLoading ? (<Loading/>) 
        :  (
              <div className='feedback-list'>
                  <AnimatePresence>
                    {feedBack.map((item)=>(
                      <motion.div 
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                      >
                      <FeedbackItem  
                        key={item.id} 
                        item={item} 
                      />
                      </motion.div>
                      )
                      )}
                  </AnimatePresence>
                </div>
        )
     
    /** 
    return (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedBack.map((item)=>(
            <motion.div 
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
            <FeedbackItem  
              key={item.id} 
              item={item} 
            />
            </motion.div>
          )
        )}
        </AnimatePresence>
      </div>
    )
    **/

    /** This is without the anomation
  return (
    <div className='feedback-list'>
        {feedBack.map((item)=>(
          <FeedbackItem  
            key={item.id} 
            item={item} 
            handleDelete={handleDelete} 
          />
        )
      )}
    </div>
  )
  **/

}

export default FeedBackList