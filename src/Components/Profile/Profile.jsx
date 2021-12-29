import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.Prof}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veritatis modi fuga pariatur, aliquam, asperiores error dolore perferendis at veniam sint alias, velit minus laudantium animi mollitia ipsum ex cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis, tempore quaerat neque labore eos eius iste esse cum quam magni aut itaque facere fuga id officiis, natus non incidunt.
        Illum cupiditate voluptates minima nemo reiciendis commodi fugit quos id praesentium dicta temporibus cum, tenetur est aut unde ratione sit ullam ex quam quas fugiat? Maiores voluptate dolore eaque ullam.
        Minima nostrum quam commodi debitis esse sapiente similique quaerat harum corporis quia quod, repellendus, corrupti architecto illo ut dicta? Deleniti repellat atque asperiores sequi voluptatibus aperiam vero quam fugit sunt?
        Est architecto minima quis molestiae pariatur obcaecati molestias, quasi similique.      
        
        <br></br>
        <br></br>
        <div className={s.item}>TITLE</div>
        <div className={s.item}>TITLE_ADD</div>
        <br></br>
        <br></br>

        <MyPosts />
        
        </div>

        

    )


}

export default Profile;