import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favorites from './routes/Favorites.jsx'
import Home from './routes/Home.jsx'
import './index.css'
import Search from './routes/Search.jsx'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';



const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/favorites",
        element: <Favorites/>
      },
      {
        path:"/search",
        element: <Search/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
