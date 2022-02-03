import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogitems}>
                <div className={s.dia + ' ' + s.active}>Димыч</div>
                <div className={s.dia}>Юрчелло</div>
                <div className={s.dia}>Стасямба</div>
            </div>

            <div className={s.messages}>
                <div className={s.dia}>How are you?</div>
                <div className={s.dia}>I am fine thanks</div>
                <div className={s.dia}>Not at all</div>
            </div>

        </div>

    )
}


export default Dialogs;
