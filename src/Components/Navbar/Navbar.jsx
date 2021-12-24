import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}>Главная</div>
            <div className={s.item}>Обратная связь</div>
            <div className={s.item}>Стоимость</div>
            <div className={s.item}>Контакты</div>
            <div className={s.item}>Отзывы</div>


        </nav>

    );


}

export default Navbar;