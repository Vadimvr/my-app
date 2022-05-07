import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
        console.log(response.data)
    });

    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        console.log(response.data);
        setComments(response.data);
    });
    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsById(params.id)
    }, []);


    return (
        <div>
            <h1>вы попали на страницу поста {params.id}</h1>
            {isLoadingPost
                ?
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
                : <div>
                    <h2>
                        {post.id} + {post.title}
                    </h2>
                    <br/>
                    <br/>
                </div>
            }
            {isLoadingComments
                ?
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
                : <div>
                    {comments.map(comment =>
                        <div style={{marginTop :15}}>
                            <h5>
                                {comment.email}
                            </h5>
                            <div>
                                {comment.body}
                            </div>
                            <br/>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;