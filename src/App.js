import React,{useState} from "react";
import Post from "./Post";
import { v4 as uuid } from "uuid";
import "./App.css";

const postsArray = [
  { id: 1, name: "Gian", content: "Gwapa kay ka", likes: 2 },
  { id: 2, name: "Shad", content: "Pogi ko", likes: 1 },
  { id: 3, name: "Carlos", content: "Hanging around", likes: 3 },
  { id: 4, name: "Reyner", content: "Pagod na ako!", likes: 4 },
];

function App () {

    const [name, SetName] = useState("");
    const [content, SetContent] = useState("");
    const unique_id = uuid();
    const id = unique_id.slice(0, 8);
    const [posts ,setPosts] = useState(postsArray);
    const [isShow, setIsShow] = useState(true);
  
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {id, name, content, likes: 0 };
      if (posts.length< 10) {
        setPosts((posts) => [...posts, data]);
        SetName("");
        SetContent("");
      }
    };
 
  
  const handleClick = () => {
    setIsShow(!isShow);
  };
  
  return(
 
      <div className="container justify-content-center mt-5 border-left border-right" >
        <span><button className="btn btn-secondary btn-lg btn-block" onClick={handleClick}>HideAllPost</button></span>  
           <h1>Comment Here</h1>
           
           <div className="d-flex justify-content-center py-2">
          
          <form onSubmit={handleSubmit} className="form-group second">
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              placeholder="Enter a name"
              onChange={(e) => SetName(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              name="content"
              value={content}
              placeholder="Enter a post"
              onChange={(e) => SetContent(e.target.value)}
            />
              <br/>
            <button className="btn btn-primary btn-lg btn-block">Post</button>
          </form>
        </div>
          
        {isShow ?
          posts.map((post)=>(
            <Post key={post.id} name ={post.name} content={post.content} likes={post.likes} />
          )):null} 
          
      </div> 
  
  );
}
export default App;
