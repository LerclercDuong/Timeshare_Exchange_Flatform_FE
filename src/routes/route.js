import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";

const privateRoutes = [
    {
        path: '/dashboard',
        page: AdminDashboard
    }
]

const publicRoutes = [
    {
        path: '/login',
        page: Login,
    },
    {
        path: '/signup',
        page: SignUp,
    }
]

export {
    privateRoutes,
    publicRoutes
};