import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Auth from './auth/Auth';

function App() {
  const data =JSON.parse(localStorage.getItem('profile'))
  console.log(data,'app.js');
  return (
    <div className="main">
       <BrowserRouter>
   
   <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='/auth' element={<Auth/>} />
   </Routes>
 </BrowserRouter> 
    </div>
  );
}

export default App;
