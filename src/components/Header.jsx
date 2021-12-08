import PropTypes from 'prop-types';
//??? tại sao phải dùng cái Protype này đê làm gì vậy anh.
function Header({text, bgColor, textColor}) {
    const headerStyles={backgroundColor: bgColor, color: textColor, 
    }
    return (
        <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
      </header>
    )
  }
  // cái defaultProps này là cái dùng để truyền props cho chính nó hả anh.???
  Header.defaultProps = {
      text: 'Feedback UI',
      bgColor: 'rgba(0,0,0,0.4)',
      textColor: '#ff6a95',
  }
  // em không hiểu cách dùng cua mấy propTypes. Chúng nó dùng để làm gì vậy???
  Header.propTypes = {
      text: PropTypes.string,
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
  }
  export default Header

// thông thường thì sẽ style trên file  CSS nhưng một số thư viện như Chakra UI và Materia UI thường 

/*có thể viết lại như sau
function Header({text}) {
  return (
      <header>
    <div className='container'>
      <h2>{text}</h2>
    </div>
    </header>
  )
}
export default Header
*/
/*
Đây là cách inline style với JSX
return (
<header style={{backgroundColor: 'blue', color: 'red'}}>      <div className='container'>
        <h2>{text}</h2>
      </div>
      </header>
    )

Neéu khôgn viết trược tiếp trong một dòng thì có thể tách ra
 const headerStyles={backgroundColor: 'blue', color: 'red'}
    return (
        <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
      </header>
    )
*/
