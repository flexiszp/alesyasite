import './App.css';
import Header from './Components/Header/Header.jsx';
import Profile from './Components/Profile.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';


function App() {
  return (
    <div className="wrapper">
     <Header />
     <Navbar />
     <Profile />
     <div className='New'>Персональная консультация </div>
     <div className='New1'>Подбор персонала </div>
     <div className='New2'>Социальная поддержка</div>
     <div className='footer'>Контент футер</div>
     </div>
  );
}



export default App;
