import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}>
                <NavLink exact to='/Main' className = { navData => navData.isActive ? s.active : s.item }>Главная</NavLink>
            </div>
            
            <div className={s.item}>
                <NavLink exact to='/Articles' className = { navData => navData.isActive ? s.active : s.item }>Статьи</NavLink>
            </div>

            <div className={s.item}>
                <NavLink exact to='/Prices' className = { navData => navData.isActive ? s.active : s.item }>Стоимость</NavLink>
            </div>
            
            <div className={s.item}>
                <NavLink exact to='/Contacts' className = { navData => navData.isActive ? s.active : s.item }>Контакты</NavLink>
            </div>

            <div className={s.item}>
                <NavLink exact to='/Knowlege' className = { navData => navData.isActive ? s.active : s.item }>База знаний</NavLink>
            </div>

            <div className={s.item}>
                <NavLink exact to='/Reviews' className = { navData => navData.isActive ? s.active : s.item }>Отзывы</NavLink>
            </div>

            <div className={s.item}>
                <NavLink exact to='/Dialogs' className = { navData => navData.isActive ? s.active : s.item }>Беседы</NavLink>
            </div>

        </nav>

    );


}

export default Navbar;