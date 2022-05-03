import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JavaScript 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    { id: 2, name: 'JavaScript 2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
    { id: 3, name: 'JavaScript 3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic." },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id));
  };

  const [selectedSort, setSelectedSort] = useState('')

  const fruits = ["Яблоко", "Апельсин", "Слива"];
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '12' }} />
      <MySelect
        value={selectedSort}
        onChange={sort => setSelectedSort(sort)}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По имени' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      {posts.length !== 0
        ? <PostList posts={posts} title={'Post Python'} remove={removePost} />
        : <h1 style={{ textAlign: 'center' }}>Нет постов</h1>}
    </div>
  );
}

export default App;
