import { createContext, useState } from "react";

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [feedBack, setFeedBack] = useState([
        {
            id: 1,
            text: 'This item is  from context api',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is  from context api',
            rating: 9
        },
        {
            id: 3,
            text: 'This item is  from context api',
            rating: 7
        },
    ])

    //state for editing
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })

    //Delete feedback
  const deleteFeedBack = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedBack(feedBack.filter((item)=> item.id !== id ))
    } 
  }

   //Add feedback
   const addFeedBack = (newFeedBack) =>{
    setFeedBack([newFeedBack, ...feedBack]);
  }

  //Edit FeedBack Function
  const editFeedBack = (item) => {
      setFeedBackEdit({
          item,
          edit: true
      })
    }

    //Update Feedback function
    const updateFeedBack = (id, updItem) =>{
        setFeedBack(feedBack.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedBackContext.Provider value={{
        feedBack,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack,
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext