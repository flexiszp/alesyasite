import React from 'react';
import s from './Dialogs.module.css';
import Dialogitem from './Dialogitem/Dialogitem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

       /* МАССИВ КОМПОНЕНТОВ: */

    let dialogselements = props.dialogs.map
        (d => <Dialogitem name={d.name} id={d.id} />);

    let messageelements = props.messages.map
        (m => <Message mes={m.message} id={m.id} />);



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
