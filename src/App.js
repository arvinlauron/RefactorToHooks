import React,{useState} from "react";
import Post from "./Post";
import { v4 as uuid } from "uuid";
import "./App.css";



function App () {

  const postsArray = [
    
    { id: uuid().slice(0,8), name: "Gian", content: "Gwapa kay ka", likes: 2, isHidden: false },
    { id: uuid().slice(0,8), name: "Shad", content: "Pogi ko", likes: 1, isHidden: false },
    { id: uuid().slice(0,8), name: "Carlos", content: "Hanging around", likes: 3, isHidden: false },
    { id: uuid().slice(0,8), name: "Reyner", content: "Pagod na ako!", likes: 4, isHidden: false },
  ];

    const [name, SetName] = useState("");
    const [content, SetContent] = useState("");
    const [posts ,setPosts] = useState(postsArray);
    const [isShow, setIsShow] = useState(false);
    const [buttonText, setButtonText] = useState(true);
  
    
  
    const handleSubmit = (e) => {
      const unique_id = uuid();
      const id = unique_id.slice(0, 8);
      e.preventDefault();
      const data = {id, name, content, likes: 0, isHidden: false};
      if (posts.length < 10) {
        setPosts((posts) => [...posts, data]);
        SetName("");
        SetContent("");
      }else{
        const data = {id, name, content, likes: 0, isHidden: true}; 
        setPosts((posts) => [...posts, data]);
        SetName("");
        SetContent("");
      }

    };
 
    const handleHidePost = (postId) => {
      const handlePost = posts.filter(post=>post.id === postId)[0]
      handlePost.isHidden = true
      setPosts([...posts, handlePost])
    }
  
  const handleClick = () => {
    setIsShow(!isShow);
    handleChange();
  };

  const handleChange = () =>{
      setButtonText(!buttonText)
  }; 
  
 
  
  
  return(
 
      <div className="container justify-content-center mt-5 border-left border-right" >
        <button className="btn btn-secondary btn-lg" onClick={handleClick}>{buttonText ? "HidellPost" : "ShowAllPost"}</button>
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
          
        {isShow ? null: 
          posts.map((post)=>(
            post.isHidden ? null :<Post key={post.id} id={post.id} name ={post.name} content={post.content} likes={post.likes} handleHidePost ={handleHidePost}  /> 
          ))}
          
      </div> 
  
  );
}
export default App;
