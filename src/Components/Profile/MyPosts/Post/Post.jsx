import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (

        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVVn-g4kdC97M5d7yILBw4shv_9FTvbUAcA&usqp=CAU' />

            {props.message}

            <div>
                <span>like</span>
            </div>

        </div>


    )


}

export default Post;