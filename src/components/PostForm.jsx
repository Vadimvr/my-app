import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {

    const [post, setPost] = React.useState({ name: '', description: '' })

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(),
        }

        create(newPost);

        setPost({ name: '', description: '' });
    };

    return (
        <form >
            <MyInput
                value={post.name}
                onChange={event => setPost({ ...post, name: event.target.value })}
                type='text'
                placeholder='Название поста' />
            <MyInput
                value={post.description}
                onChange={event => setPost({ ...post, description: event.target.value })}
                type='text'
                placeholder='Описание поста' />

            <MyButton disabled={false} onClick={addNewPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;