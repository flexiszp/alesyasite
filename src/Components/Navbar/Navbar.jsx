import React from 'react';
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}><Link to='/Main'>Главная</Link></div>
            <div className={s.item}><Link to='/Articles'>Статьи</Link></div>
            <div className={s.item}><Link to='/Prices'>Стоимость</Link></div>
            <div className={s.item}><Link to='/Contacts'>Контакты</Link></div>
            <div className={s.item}><Link to='/Knowlege'>База знаний</Link></div>
            <div className={s.item}><Link to='/Comments'>Популярные вопросы</Link></div>


        </nav>

    );


}

export default Navbar;