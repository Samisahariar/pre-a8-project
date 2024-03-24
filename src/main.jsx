import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import AppliedJobs from './components/appliedjobs/AppliedJobs.jsx';
import ErrorPage from './components/errorpage/ErrorPage.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <Root></Root>,
  errorElement : <ErrorPage></ErrorPage>,
  children: [{
    path: '/',
    element: <Home></Home>
  },
  {
    path : '/appliedjobs',
    element : <AppliedJobs></AppliedJobs>
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
