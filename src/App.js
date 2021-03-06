import './App.css';
import Header from './Components/Header/Header.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import Prices from './Components/Prices/Prices.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {

    return (

        <
        BrowserRouter >

        <
        div className = "wrapper" >

        <
        Header / >
        <
        Navbar / >

        <
        div className = 'app-wrapper-content' >

        <
        Routes >

        <
        Route path = '/Main'
        element = { < Profile / > }
        />  <
        Route path = '/Dialogs'
        element = { < Dialogs dialogs = { props.dialogs }
            messages = { props.messages }
            />}/ >
            <
            Route path = '/Contacts'
            element = { < Contacts / > }
            /> <
            Route path = '/Prices'
            element = { < Prices / > }
            />  { /* <Route path='*' element={<Notfoundpage />} /> */ }

            <
            /Routes>

            <
            /div>

            <
            div className = 'New' > Персональная консультация < /div>  <
            div className = 'New1' > Подбор персонала < /div>  <
            div className = 'New2' > Социальная поддержка < /div>  <
            div className = 'footer' > Контент футер < /div>

            <
            /div>

            <
            /BrowserRouter>

        )
    }



    export default App;