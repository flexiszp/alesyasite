import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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

ReactDOM.render( <
    React.StrictMode >
    <
    App dialogs = { dialogs }
    messages = { messages }
    /> <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();