import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './layout/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Reviews from './pages/Reviews'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RouterLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
        path:"services",
        element:<Services/>
        },
        {
          path:"reviews",
          element:<Reviews/>
        },
     
      ]
    }
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
