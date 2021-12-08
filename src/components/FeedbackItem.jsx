import {FaTimes} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
function FeedbackItem({item, handleDelete}) {
  
    
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)}className="close"><FaTimes color='purple' /></button>
        <div className="text-display">{item.text}</div>
      
    </Card>
  )
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}
export default FeedbackItem
//hai thứ cần đặt trong uesState thưs nhất là tên của state, thứ hia là function của state nếu state có sự thay đổi thường sẽ là A, setA
//???em không hiểu tai sao cứ dùng propTypes.