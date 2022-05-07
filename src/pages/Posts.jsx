import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../components/hooks/useFetching";
import { usePosts } from "../components/hooks/usePosts";
import Pagination from "../components/pagination/Pagination";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import { getPageCount } from "../components/utils/pages";
import "../styles/App.css";
function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sorting: '', query: '' });
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(15);
    const [page, setPage] = useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sorting, filter.query);


    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page)
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
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div>
    );
}

export default Posts;
