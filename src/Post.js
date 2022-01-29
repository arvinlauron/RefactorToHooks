import React from "react";
import LikeButton from "./LikeButton";
import "./App.css";
import Avatar from "@mui/material/Avatar";


function Post(props) {
  const {id, name, content, likes, handleHidePost} =props;
    const stringToColor = (string) =>{
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
  return (
    <div className="d-flex justify-content-center py-2">
      <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> <span className="text1">{content}</span> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div className="fullAvatar"><Avatar sx={{ bgcolor: stringToColor(name), height:18, width:18 }}><span className="Avatar">{name.slice(0, 2).toUpperCase()}</span></Avatar><span className="text2">{name}</span></div>
                <div className="fullAvatar"><span className="text3 ">Upvote?</span><span className="thumbup"><LikeButton likes={likes} id={id} handleHidePost={handleHidePost}/></span></div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
