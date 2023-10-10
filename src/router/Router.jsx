import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthRoute from "./AuthRoute"
import ProtectedRoute from "./ProtectedRoute"
import SignIn from "../Pages/signIn/SignIn"
import SignUp from "../Pages/signUp/SignUp"
import DashBoard from '../component/drawer/Notes'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<AuthRoute><SignIn /></AuthRoute>} />
                <Route path='/signup' element={<AuthRoute><SignUp /></AuthRoute>} />
                <Route path='/dashboard' element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router