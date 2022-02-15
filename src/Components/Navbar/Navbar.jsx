import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navitem = (props) => {

    return (
        <div className={s.item}>
            <NavLink exact to={props.pathto} className={navData => navData.isActive ? s.active : s.item}>{props.pagename}</NavLink>
        </div>

    )
}

const Navbar = () => {
    return (
        <nav className={s.Nav}>

            <div><Navitem pagename='Главная' pathto='/Main' /></div>
            <div><Navitem pagename='Статьи' pathto='/Articles' /></div>
            <div><Navitem pagename='Стоимость' pathto='/Prices' /></div>
            <div><Navitem pagename='Контакты' pathto='/Contacts' /></div>
            <div><Navitem pagename='Отзывы' pathto='/Reviews' /></div>
            <div><Navitem pagename='Беседы' pathto='/Dialogs' /></div>


        </nav>

    );


}

export default Navbar;