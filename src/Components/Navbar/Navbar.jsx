import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}><a href='/main'>Главная</a></div>
            <div className={s.item}><a href='/feedback'>Обратная связь</a></div>
            <div className={s.item}><a href='/prices'>Стоимость</a></div>
            <div className={s.item}><a href='/contacts'>Контакты</a></div>
            <div className={s.item}><a href='/comments'>Отзывы</a></div>


        </nav>

    );


}

export default Navbar;