import React, { useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JavaScript 3', description: "Lorem 3." },
    { id: 2, name: 'JavaScript 1', description: "Lorem 2." },
    { id: 3, name: 'JavaScript 2', description: "Lorem 1." },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosted')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    console.log('sortedAndSearchPosts')
    return sortedPosts.filter(post => post.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id));
  };


  const sortPost = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '12' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder='Поиск ...' />
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Сортировка'
          options={[
            { value: 'name', name: 'По имени' },
            { value: 'description', name: 'По описанию' },
          ]}
        />
      </div>
      {sortedAndSearchPosts.length !== 0
        ? <PostList posts={sortedAndSearchPosts} title={'Post Python'} remove={removePost} />
        : <h1 style={{ textAlign: 'center' }}>Нет постов</h1>}
    </div>
  );
}

export default App;
