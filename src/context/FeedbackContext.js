import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
 
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const updateFeedback = (id, upItem) => {
setFeedback(feedback.map((item) => item.id===id ? {...item, ...upItem} : item))
  }
  //set item to be added
const editFeedback=(item) => {
  setFeedbackEdit({
    item,
    edit: true
  })
}
  // Fetch feedback
  

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
      
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
{
  /* việc truyền children này để chi vậy a
  <FeedbackContext.Provider
      value={{
        feedback,
        
      }}
    >
      {children}
      
    </FeedbackContext.Provider>*/
}