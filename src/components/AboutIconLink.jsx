import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom';
function AbouticonLink() {
  return (
    <div className='about-link'>
        <Link to ={{pathname:'/about', 
    }}>
        <FaQuestion size={30}/>    
        </Link>
        {/*
         
       
       <Link to ="/about">
        <FaQuestion size={30}/>    
        </Link>*/}
        {/* có thể vài thứ tỏng link như search, hash,... 
        Link to ={{pathname:'/about', search:'?sort=name',
    hash:'#hello', */}
      
    </div>
  )
}

export default AbouticonLink
