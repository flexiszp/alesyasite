import './App.css';
import Header from './Components/Header/Header.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
  
	<BrowserRouter>
	
		<div className="wrapper">

		<Header />
		<Navbar />
		{/* <div class='app-wrapper-content'><Dialogs /></div>
		<div class='app-wrapper-content'> <Profile /></div> */}
		
		<div className='app-wrapper-content'>
		
		<Routes>
			
			<Route path='/Profile' element={<Profile />} />
			<Route path='/Dialogs' element={<Dialogs />} />
			{/* <Route path='*' element={<Notfoundpage />} /> */}
			
		</Routes>
		
		</div>
		
		

		<div className='New'>Персональная консультация </div>
		<div className='New1'>Подбор персонала </div>
		<div className='New2'>Социальная поддержка</div>
		<div className='footer'>Контент футер</div>

		</div>
		
	</BrowserRouter>)
}



export default App;
