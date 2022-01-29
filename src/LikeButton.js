import React, {useState} from 'react';


 function LikeButton (props){
    const{id, likes, handleHidePost} = props
    const[count, setCount] = useState(likes)
    
    
    const increment = () => {
        setCount(count + 1);
    }

            return (
            <div>
                <span onClick={()=>handleHidePost(id)}><i className="fa fa-eye-slash" aria-hidden="true"></i></span>
                <span onClick={increment}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span> 
                <><span className="text4">{count}</span></>       
            </div>
          
        )
    }
export default LikeButton