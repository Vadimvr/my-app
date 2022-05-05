import React from 'react';
import { TransitionGroup, CSSTransition, } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>Нет постов</h1>
        );
    }

    return (

        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((item, index) =>
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem number={index + 1} post={item} remove={remove} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;