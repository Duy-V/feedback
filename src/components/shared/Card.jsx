import PropTypes from 'prop-types';
function Card({children, reverse}) {
//    return (
//         <div className={`card ${reverse && 'reverse'}`}>
// {children}
//         </div>
//     )
return(
    <div className='card'  style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#fff', color: reverse ?'#fff' : " #000"}}>
{children}
    </div>
)
}
Card.defaultProps = {
    reverse: false,
}
Card.ropTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,

}
export default Card;
//${reverse && 'reverse'}`. Cái reverse là sự kiện hả anh.???
//Card({children, reverse}) hai argument trong Card chỉ là những argument thông thuơng khi sự kiện được kích hoạt thì hai argument đó sẽ được dùng để thực hiện hành động hả anh????
// sự kiện của reverse có dạng boolean.
//cais synxtac defaultProps dùng để làm gì vậy anh ???
//em không hiểu mấy cái propTypes dùng để làm gì nữa.
 /*Card.PropTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,

}*/