import React, {useState} from 'react';



 function LikeButton (props){
   
    const{likes} = props
    const[count, setCount] = useState(likes)
 
        const increment = () => {
        setCount(count + 1);
    }
  
        return (
            <div>
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
                <span onClick={increment}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span> 
                <><span className="text4">{count}</span></>       
            </div>
        )
    }
export default LikeButton