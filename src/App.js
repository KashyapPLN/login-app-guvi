import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './Components/login/Signup';
import Login from './Components/login/Login';
import Profile from './Components/profile/Profile';

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>

        {token ? (
          <>
            <Route path='/register' element={<Navigate to="/profile" />} />
            <Route path='/login' element={<Navigate to="/profile" />} />
            <Route path='/' element={<Navigate to="/profile" />} />
          </>
        ) : (
          <>

            <Route path='/profile' element={<Profile />} />

            <Route path='/' element={<Navigate to="/register" />} />
          </>
        )}

        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
