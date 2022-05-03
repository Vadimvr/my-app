import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JavaScript 3', description: "Lorem 3." },
    { id: 2, name: 'JavaScript 1', description: "Lorem 2." },
    { id: 3, name: 'JavaScript 2', description: "Lorem 1." },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id));
  };

  const [selectedSort, setSelectedSort] = useState('')

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '12' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue='Сортировка'
        options={[
          { value: 'name', name: 'По имени' },
          { value: 'description', name: 'По описанию' },
        ]}
      />
      {posts.length !== 0
        ? <PostList posts={posts} title={'Post Python'} remove={removePost} />
        : <h1 style={{ textAlign: 'center' }}>Нет постов</h1>}
    </div>
  );
}

export default App;
