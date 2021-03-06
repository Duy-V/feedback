import {useState, useContext, useEffect} from 'react';
import RatingSelect from './RatingSelect'
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  useEffect(()=> {
if(feedbackEdit.edit===true){
  setBtnDisabled(false)
  setText(feedbackEdit.item.text)
  setRating(feedbackEdit.item.rating)
}
  },[feedbackEdit])
    const handleTextChange = (e) => {
        if (text === '') {
          setBtnDisabled(true)
          setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
    
        setText(e.target.value)
      }
      const handleSubmit = (e) => {
          e.preventDefault()
          if(text.trim().length >10){const newFeedback = {
              text,
              rating,
          }
          if(feedbackEdit.edit===true){
           updateFeedback(feedbackEdit.item.id, newFeedback) 
          }else{
            addFeedback(newFeedback)
          }
        
        setText('')
        }
      }

  return (
    <Card>
      <form onSubmit={handleSubmit}> 
          <h2>How would you rate your service with us?</h2>
       <RatingSelect select = {(rating) => setRating(rating)} />
       <div className="input-group">
           <input onChange={handleTextChange} type="text" placeholder='Write a review'
           value={text}
           />
           <Button type='submit'  isDisabled={btnDisabled}>Send</Button>
           </div>  
           {message && <div className='message'>{message}</div>} 
      </form>
    </Card>
  )
}

export default FeedbackForm
//???anh gi???i th??ch cho em c??ch ho???t ?????ng c???a components khi m??nh nh???n F12, nh???ng th??? m??nh hay v???i n??, m??nh d??ng n?? ????? test c??i g?? v???y anh.
// anh c?? th??? t???ng h???p l???i c??ch vi???t t??? con l??n cha t??? cha xu???ng con v???i props gi??p em ???????c kh??ng ???.