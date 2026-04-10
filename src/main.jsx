import { Component, StrictMode } from 'react'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout ,
    children: [

      {
        index: true,
        Component: Home

      },
      {
        path: "addCoffee",
        Component: AddCoffe
      },
      {
        path: 'updateCoffee',
        Component: UpdateCoffe
      }

    ]

  },
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />



  </StrictMode>

)