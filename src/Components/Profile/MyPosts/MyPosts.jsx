import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
    return (

    <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
        
        <div>
        <Post />
        <Post />
        <Post />
        <Post />

            
        </div>
    </div>
        
    )

    
}

export default MyPosts;