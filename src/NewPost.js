// import React, { useState} from "react";
// import Post from "./Post";
// import { v4 as uuid } from "uuid";
// import "./App.css";

// function Newpost() {
//   const [name, SetName] = useState("");
//   const [content, SetContent] = useState("");
//   const [list, setList] = useState([]);
//   const unique_id = uuid();
//   const id = unique_id.slice(0, 8);
  

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {id, name, content, likes: 0 };
//     if (name && content) {
//       setList((ls) => [...ls, data]);
//       SetName("");
//       SetContent("");
//     }
//   };
  

//   return (
//     <div >
//       <div className="d-flex justify-content-center py-2">
          
//         <form onSubmit={handleSubmit} className="form-group second">
//           <input
//             className="form-control"
//             type="text"
//             name="name"
//             value={name}
//             placeholder="Enter a name"
//             onChange={(e) => SetName(e.target.value)}
//           />
//           <br />
//           <input
//             className="form-control"
//             name="content"
//             value={content}
//             placeholder="Enter a post"
//             onChange={(e) => SetContent(e.target.value)}
//           />
//             <br/>
//           <button className="btn btn-primary btn-lg btn-block">Post</button>
//         </form>
//       </div>

//       <div>
//         { list.map((post) => (
//           <Post
//             key={post.id}
//             name={post.name}
//             content={post.content}
//             likes={post.likes}
//           />
//         ))}
        
//       </div>
//     </div>
//   );
// }

// export default Newpost;
