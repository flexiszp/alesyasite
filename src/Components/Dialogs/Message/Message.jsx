import React from 'react';
import s from './../Dialogs.module.css';



const Message = (props) => {

    return (
        <div className={s.dia}>{props.mes}</div>
    )
}

export default Message;
