import ReactDOM from 'react-dom/client';
import React from 'react';
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './component/auth/SignIn.jsx';
import SignUp from './component/auth/SignUp.jsx';
import Customer from './component/customerModule/Customer.jsx';
import Sales from './component/salesModule/Sales.jsx';
import Report from './component/reportModule/Report.jsx';
import Support from './component/supportModule/Support.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Report />,
  },
  {
    path: '/customer',
    element: <Customer />,
  },
  {
    path: '/report',
    element: <Report />,
  },
  {
    path: '/sales',
    element: <Sales />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
