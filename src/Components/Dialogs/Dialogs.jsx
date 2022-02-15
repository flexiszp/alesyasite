import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogitem = (props) => {

    let path = '/Dialogs/' + props.id;

    return (
        <div className={s.dia}><NavLink to={path}>{props.name}</NavLink></div>      /* ЭТО ССЫЛКА И ПУТЬ */

    )
}

const Messageitem = (props) => {

    return (
        <div className={s.dia}>{props.mes}</div>        /* ЭТО ПРОПИСАНО СООБЩЕНИЕ */
    )
}


const Dialogs = (props) => {

    /* МАССИВ ДАННЫХ: */

    let dialogs = [
        { id: 1, name: 'Димыч' },
        { id: 2, name: 'Юрмэлло' },
        { id: 3, name: 'Стасямба' },
        { id: 4, name: 'ДэЛавер' },
        { id: 5, name: 'Илиолик' }
    ]

    let messages = [
        { id: 1, message: '-> How are you?' },
        { id: 2, message: '-> How are they?' },
        { id: 3, message: '-> How are we?' },
        { id: 4, message: '-> How are fuck?' },
        { id: 5, message: '-> How are fuck niger?' }

    ]

    /* МАССИВ КОМПОНЕНТОВ: */

    let dialogselements = dialogs.map
        (d => <Dialogitem name={d.name} id={d.id} />);

    let messageelements = messages.map
        (m => <Messageitem mes={m.message} id={m.id} />);



    /* ОТРИСОВКА ВСЕГО МАССИВА КОМПОНЕНТОВ*/

    return (

        <div className={s.dialogs}>

            <div className={s.dialogitems}>
                {dialogselements}
            </div>

            <div className={s.messages}>
                {messageelements}
            </div>

        </div>

    )
}


export default Dialogs;
