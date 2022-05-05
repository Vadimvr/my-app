import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import { useFetching } from "./components/hooks/useFetching";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { getPageCount, getPagesArray } from "./components/utils/pages";
import "./styles/App.css";
function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sorting: '', query: '' });
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sorting, filter.query);

    let pagesArray = getPagesArray(totalPages);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));

    });

    console.log(pagesArray);
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);

    };

    useEffect(() => {
        fetchPosts();
    }, [page])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const ChangePage = (page) => {
        setPage(page);
    }

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
            {postError &&
                <h1>Произошла ошибка. {postError}</h1>
            }
            {isPostLoading
                ?
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
                : <PostList posts={sortedAndSearchPosts} title={'Posts'} remove={removePost} />
            }
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}
                        onClick={() => ChangePage(p)}>
                        {p}
                    </span>
                )}
            </div>
        </div>
    );
}

export default App;
