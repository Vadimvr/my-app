import React, { useState } from "react";
import PostList from "./components/PostList";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "./styles/App.css";
function App() {

  const [posts, setPosts] = useState([
      { id: 1, name: 'JavaScript 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 2, name: 'JavaScript 2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 3, name: 'JavaScript 3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    ]);

    const [posts2, setPosts2] = useState([
      { id: 1, name: 'Python 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 2, name: 'Python 2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
      { id: 3, name: 'Python 3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    ]);

  return (
    <div className="App">
     <PostList posts={posts} title = {'Posts JavaScript'}/>
     <PostList posts={posts} title = {'Post Python'}/>
    </div>
  );
}

export default App;
