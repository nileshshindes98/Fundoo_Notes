import './App.css';
import SignIn from './Pages/signIn/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/signUp/SignUp';
import DashBoard from './Pages/dashboard/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
       <Route path='/signup' element={<SignUp />}/>
       <Route path='/dashboard' element={<DashBoard />}/>

      </Routes>
    </Router>

  );
}

export default App;
