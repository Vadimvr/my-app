import React, { useState } from "react";
import PostItem from "./components/PostItem";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "./styles/App.css";
function App() {

  const [posts, setPosts] = useState(
    [
      { id: 1, name: 'JavaScript 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 2, name: 'JavaScript 2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 3, name: 'JavaScript 3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 4, name: 'JavaScript 4', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 5, name: 'JavaScript 5', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 6, name: 'JavaScript 6', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    ]
  );

  return (
    <div className="App">
      {posts.map(
        item =>
          <PostItem post={item} key = {item.id}/>
      )};
    </div>
  );
}

export default App;
