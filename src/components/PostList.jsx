import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
     return(
        <h1 style={{ textAlign: 'center' }}>Нет постов</h1>
     );
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((item, index) =>
                    <PostItem number = {index +1} post={item} key={item.id} remove={remove}/>
            )}
        </div>
    );
};

export default PostList;