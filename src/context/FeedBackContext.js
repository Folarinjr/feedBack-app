import { createContext, useState, useEffect } from "react";

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedBack, setFeedBack] = useState([])

    useEffect(()=>{
        fetchFeedBack();
    },[])

    //Fetch Feedback data from the back end json server
    const fetchFeedBack = async () =>{
        const res = await fetch(`/feedBack?_sort=id&_order=desc`);
        const data = await res.json();

        setFeedBack(data);
        setIsLoading(false);
    }

    

    //state for editing
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })

    //Delete feedback
  const deleteFeedBack = async (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
        await fetch(`/feedBack/${id}`, {method: 'DELETE'})
      setFeedBack(feedBack.filter((item)=> item.id !== id ))
    } 
  }

   //Add feedback && convert the function to submit to the backend
   const addFeedBack = async (newFeedBack) => {
       const res = await fetch(`/feedBack`, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(newFeedBack)
       })

       const data = await res.json();

       setFeedBack([data, ...feedBack]);
   }
   /**
   const addFeedBack = (newFeedBack) =>{
    setFeedBack([newFeedBack, ...feedBack]);
  }
   */

  //Edit FeedBack Function
  const editFeedBack = (item) => {
      setFeedBackEdit({
          item,
          edit: true
      })
    }

    //Update Feedback function
    const updateFeedBack = async(id, updItem) =>{
        const res = await fetch(`/feedBack/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await res.json()
        setFeedBack(feedBack.map((item) => item.id === id ? {...item, ...data} : item))
    }
    /*
    const updateFeedBack = (id, updItem) =>{
        setFeedBack(feedBack.map((item) => item.id === id ? {...item, ...updItem} : item))
    }
    */

    return <FeedBackContext.Provider value={{
        feedBack,
        feedBackEdit,
        isLoading,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        updateFeedBack,
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext