import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const navigate = useNavigate();
    const remove = () => {

        props.remove(props.post);
    };

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}  {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_buttons">
                <MyButton onClick={() => navigate('/posts/' + props.post.id)}>Открыть</MyButton>
                <MyButton onClick={remove}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;