import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';


const Dialogitem = (props) => {

    let path = '/Dialogs/' + props.id;

    return (
        <div className={s.dia}><NavLink to={path}>{props.name}</NavLink></div>      /* ЭТО ССЫЛКА И ПУТЬ */

    )
}

export default Dialogitem;
