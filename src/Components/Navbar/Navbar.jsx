import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}><a href='/Profile'>Главная</a></div>
            <div className={s.item}><a href='/Dialogs'>Обратная связь</a></div>
            <div className={s.item}><a href='/Prices'>Стоимость</a></div>
            <div className={s.item}><a href='/Contacts'>Контакты</a></div>
            <div className={s.item}><a href='/Comments'>Отзывы</a></div>


        </nav>

    );


}

export default Navbar;