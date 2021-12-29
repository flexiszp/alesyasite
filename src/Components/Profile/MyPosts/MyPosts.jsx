import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {


    return (

        <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Remove</button>

            <div>

                <Post message='HI, how are you?' like_count='3' /><br />
                <Post message='HI men yeahh?' like_count='5' />


            </div>
        </div>

    )


}

export default MyPosts;