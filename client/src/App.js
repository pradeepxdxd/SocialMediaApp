import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import SignUp from "./components/SignUp/SignUp";
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { isLoggedIn } from './utils/common'
import Profile from './components/Profile/Profile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import AddPost from './components/AddTodo/AddPost';
import MyPost from './components/MyPost/MyPost';

const ProtectedRoute = ({ children }) => {
    // eslint-disable-next-line no-unused-expressions
    return isLoggedIn() ? children : <Navigate to='/' />
}

function App() {

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/addPost" element={
                        <ProtectedRoute>
                            <AddPost />
                        </ProtectedRoute>
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } />
                    <Route path="/myPost" element={
                        <ProtectedRoute>
                            <MyPost />
                        </ProtectedRoute>
                    } />
                    <Route path="/changePassword" element={
                        <ProtectedRoute>
                            <ChangePassword />
                        </ProtectedRoute>
                    } />
                    <Route path="/forget_password" element={
                        <ForgetPassword />
                    } />
                    <Route path="/reset_password/:token" element={
                        <ResetPassword />
                    } />
                </Routes>
            </Router>
        </>
    );
}

export default App;
