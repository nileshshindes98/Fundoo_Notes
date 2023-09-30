import './App.css';
import SignIn from './Pages/signIn/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/signUp/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
       <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </Router>

  );
}

export default App;
