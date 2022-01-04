import './App.css';
import Header from './Components/Header/Header.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';


function App() {
  return (
    <div className="wrapper">
     <Header />
     <Navbar />
     <Profile />
     <Dialogs />
     <div className='New'>Персональная консультация </div>
     <div className='New1'>Подбор персонала </div>
     <div className='New2'>Социальная поддержка</div>
     <div className='footer'>Контент футер</div>
     </div>
  );
}



export default App;
