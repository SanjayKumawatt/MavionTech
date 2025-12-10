import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import ErrorPage from './Components/ErrorPage'
import About from './Pages/About'
import Services from './Pages/Services'
import LogoDesigning from './Pages/LogoDesigning'
import SoftwareDevelopment from './Pages/SoftwareDevelopment'
import SeoBranding from './Pages/SeoBranding'
import Hosting from './Pages/Hosting'
import WebDev from './Pages/WebDev'
import BusinessEmails from './Pages/BusinessEmails'
import Ms365Basic from './Pages/Ms365Basic'
import Ms365Standard from './Pages/Ms365Standard'
import Ms365Premium from './Pages/Ms365Premium'
import Contact from './Pages/Contact'
import Login from './Pages/Login'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/services/logo-designing",
          element: <LogoDesigning />
        },
        {
          path: "/services/software-development",
          element: <SoftwareDevelopment />
        },
        {
          path: "/services/seo-branding",
          element: <SeoBranding />
        },
        {
          path: "/services/hosting",
          element: <Hosting />
        },
        {
          path: "/services/web-dev",
          element: <WebDev />
        },
        
        {
          path: "/products/ms365-basic",
          element: <Ms365Basic />
        },
        {
          path: "/products/ms365-standard",
          element: <Ms365Standard />
        },
        {
          path: "/products/ms365-premium",
          element: <Ms365Premium />
        },
        {
          path: "/contact",
          element: <Contact />
        },


      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App