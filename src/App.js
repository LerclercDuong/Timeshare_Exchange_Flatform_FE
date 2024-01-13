import logo from './logo.svg';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {publicRoutes, privateRoutes} from './routes/route';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          {privateRoutes.map((route, index) => {
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isAuthenticated ? (
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
      <Footer />
    </div>
    
  );
}

export default App;
