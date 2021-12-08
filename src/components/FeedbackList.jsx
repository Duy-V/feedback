import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback, handleDelete}) {
 if(!feedback || feedback.length ===0){
     return <p>No Feedback Yet</p>
 }
return(
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
)


//     return (
//     <div className='feedback-list'>
//         {feedback.map((item)=>(
// <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//          ) )}
//     </div>
//   )
}
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList;
//?? cach dung thu vien import { motion } from "framer-motion"
// lúc em cài cái thư viện import { motion } from "framer-motion" phiên bản e cài là 5.4, còn phiên bản tỏng clip là 4.4. Do có sự khác biệt về phiên bản nên synxtax viết nó cùng kahcs nên lúc khi em viết theo video thì nó bị lỗi hả anh.???????