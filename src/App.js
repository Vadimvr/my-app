import React from "react";
import PostItem from "./components/PostItem";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "./styles/App.css";
function App() {

  return (
    <div className="App">
      <PostItem
        post={{
          id: 1,
          name: 'JavaScript',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic.",
        }} />
    </div>
  );
}

export default App;
