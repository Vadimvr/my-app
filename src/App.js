import React, { useMemo, useRef, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JavaScript 3', description: "Lorem 3." },
    { id: 2, name: 'JavaScript 1', description: "Lorem 2." },
    { id: 3, name: 'JavaScript 2', description: "Lorem 1." },
  ]);

  const [filter, setFilter] = useState({sort:'', query:'' });
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosted')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    console.log('sortedAndSearchPosts')
    return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id));
  };



  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '12' }} />
      <PostFilter
        filter={filter}
        setFilter = {setFilter}
      />
      <PostList posts={sortedAndSearchPosts} title={'Post Python'} remove={removePost} />
    </div>
  );
}

export default App;
