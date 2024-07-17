import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/login/Signup';
import Login from './Components/login/Login';
import Profile from './Components/profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/register' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
