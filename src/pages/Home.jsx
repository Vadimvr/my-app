import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            main page
            <Link to="/about"> About</Link>
            <Link to="/posts">Posts</Link>
        </div>
    );
};

export default Home;