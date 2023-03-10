import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './components'
import { AboutPage } from './components/AboutPage'
import { Portfolio } from './components/Portfolio'
import './index.css'


const router = createBrowserRouter( [
  {
    path: "/",
    element: <Portfolio />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  },
] );

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
