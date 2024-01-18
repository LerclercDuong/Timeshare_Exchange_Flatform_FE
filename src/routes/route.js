import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Home from "../pages/Home";

const privateRoutes = [
    {
        path: '/admin/*',
        page: Admin
    }
]

const publicRoutes = [
    {
        path: '/login',
        page: Login,
    },
    {
        path: '/register',
        page: SignUp,
    },
    {
        path: '/about',
        page: About,
    },
    {
        path: '/home',
        page: Home,
    }

]

export {
    privateRoutes,
    publicRoutes
};