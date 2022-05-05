import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

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
            <div className="post_button">
                <MyButton onClick={remove} >Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;