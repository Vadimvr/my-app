import axios from "axios";
import React, { useState } from "react";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sorting: '', query: '' });
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sorting, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
     <button onClick={fetchPosts}>dd</button>
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
