import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}><a href='/Main'>Главная</a></div>
            <div className={s.item}><a href='/Articles'>Статьи</a></div>
            <div className={s.item}><a href='/Prices'>Стоимость</a></div>
            <div className={s.item}><a href='/Contacts'>Контакты</a></div>
            <div className={s.item}><a href='/Knowlege'>База знаний</a></div>
            <div className={s.item}><a href='/Comments'>Популярные вопросы</a></div>


        </nav>

    );


}

export default Navbar;