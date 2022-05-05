import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JavaScript 3', description: "Lorem 3." },
    { id: 2, name: 'JavaScript 1', description: "Lorem 2." },
    { id: 3, name: 'JavaScript 2', description: "Lorem 1." },
    { id: 4, name: 'JavaScript 4', description: "Lorem 1." },
    { id: 5, name: 'JavaScript 1', description: "Lorem 1." },
  ]);

  const [filter, setFilter] = useState({ sorting: '', query: '' });
  const [modal, setModal] = useState(false)


  const sortedPosts = useMemo(() => {
    if (filter.sorting) {
      console.log('сортировка true')
      return [...posts].sort((a, b) => a[filter.sorting].localeCompare(b[filter.sorting]))
    }
    return posts;
  }, [filter.sorting, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    console.log('поиск')
    return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>Add</MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '12' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchPosts} title={'Post Python'} remove={removePost} />
    </div>
  );
}

export default App;
