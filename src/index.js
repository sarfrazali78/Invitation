import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/home/home';
import Login from './Components/login/login';
import Register from './Components/register/Register';
import AboutUs from './Components/about-us/about-us';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/",
    element: <Home/>
  },
  
  {
    path: '/login',
    element : <Login/>
  },

  {
    path: '/register',
    element : <Register/>
  },

  {
    path: '/about-us',
    element : <AboutUs/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
