import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogitem = (props) => {

    let path = '/Dialogs/' + props.id;

    return (
        <div className={s.dia}><NavLink to={path}>{props.name}</NavLink></div>

    )
}

const Messageitem = (props) => {

    return (
        <div className={s.dia}>{props.mes}</div>
    )
}

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogitems}>
                <Dialogitem name='Димыч' id='1' />
                <Dialogitem name='Юрмэлло' id='2' />
                <Dialogitem name='Стасямба' id='3' />
                <Dialogitem name='ДэЛавер' id='4' />
            </div>

            <div className={s.messages}>
                <Messageitem mes='How are you?' />
                <Messageitem mes='How are they?' />
                <Messageitem mes='How are we?' />
                <Messageitem mes='How are fuck?' />
            </div>

        </div>

    )
}


export default Dialogs;
