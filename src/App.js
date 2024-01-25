
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {publicRoutes, privateRoutes} from './routes/route';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {api} from "./api";
import {LoginSuccess} from "./actions/auth.action";

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isLoading, setIsLoading] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const isAuth = async () => {
            try {
                const response = await api.patch('/auth/isAuth')
                if (response.data) {
                    dispatch(LoginSuccess(response.data))
                } else {
                    const refreshToken = await api.post('/auth/refresh-token')
                    if (refreshToken.data) {

                    } else {
                        navigate('/login')
                    }
                }
                setIsLoading(false)

            } catch (err) {

            }
        };
        isAuth();
    }, []);
    useEffect(() => {
        console.log(isAuthenticated)
    });
    if (isLoading) {
        // Render a loading indicator or any other content while checking authentication
        return <div>
            <p>Loading...</p>
            <h1>Chờ xíu mạng lag quá...</h1>
        </div>;
    }
  return (
    <div className="App">
      <Routes>
        <Route>
          {privateRoutes.map((route, index) => {
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isAuthenticated === true ? (
                    <Page/>
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            )
          })}
          {publicRoutes.map((route, index) => {
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Page />}
              />
            )
          })}
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
