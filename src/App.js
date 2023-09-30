import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn from './pages/signIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>} />
      </Routes>
    </Router>

  );
}

export default App;
