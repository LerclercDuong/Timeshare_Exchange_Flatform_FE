import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import About from "../pages/About";
import AdminDashboard from "../pages/AdminDashboard";
import AdminTimeshares from "../pages/AdminTimeshares";
import AdminUsers from "../pages/AdminUsers";

const privateRoutes = [
    {
        path: '/dashboard',
        page: AdminDashboard
    },
    {
        path: '/dashboard/users',
        page: AdminUsers
    },
    {
        path: '/dashboard/timeshares',
        page: AdminTimeshares
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
    },
    {
        path: '/about',
        page: About,
    },

]

export {
    privateRoutes,
    publicRoutes
};