import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "./styles/App.css";
function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JavaScript 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    { id: 2, name: 'JavaScript 2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    { id: 3, name: 'JavaScript 3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
  ]);

  const [title, setTitle] = useState(' ');
  const [description, setDescription] = useState(' ');

  // const bodyInputRef = useRef();
  const addNewPost = (e) => {

    e.preventDefault();
    const newPost = {
      id:Date.now(),
      name:title,
      description
    }
    
    console.log(newPost)
    setPosts([...posts,newPost])
    setTitle(' ');
    setDescription(' ');
    // console.log(bodyInputRef.current.value)
  };

  return (
    <div className="App">
      <form >
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type='text'
          placeholder='Название поста' />
        <MyInput
          value={description}
          onChange={event=>setDescription(event.target.value)}
          type='text'
          placeholder='Описание поста' />



        {/* <input type="text" ref={bodyInputRef} /> */}
        {/* Неуправляемый/неконтролируемый */}
        {/* <MyInput
          ref={bodyInputRef}
          type='text'
          placeholder='Описание поста' /> */}
        <MyButton disabled={false} onClick={addNewPost}>Создать</MyButton>
      </form>
      <PostList posts={posts} title={'Post Python'} />
    </div>
  );
}

export default App;
