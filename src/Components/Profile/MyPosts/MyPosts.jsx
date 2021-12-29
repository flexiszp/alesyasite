import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {


    return (

        <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Remove</button>

            <div>

                <Post message='HI, how are you?' />
                <Post message='HI men yeahh?' />
                

            </div>
        </div>

    )


}

export default MyPosts;