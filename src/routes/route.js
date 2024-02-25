import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import TimeShare from "../pages/TimeShare";
import TimeShareDetails from "../pages/TimeShareDetails";
import ThankYou from "../pages/ThankYou";
import ExchangeSuccess from "../pages/ExchangeSuccess";

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
    },
    {
        path: '/timeshare',
        page: TimeShare
    },
    {
        path: '/timesharedetails/:id',
        page: TimeShareDetails
    },
    {
        path: '/thank-you',
        page: ThankYou
    },
    {
        path: '/exchangesuccess',
        page: ExchangeSuccess
    },

]

export {
    privateRoutes,
    publicRoutes
};