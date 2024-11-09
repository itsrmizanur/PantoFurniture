import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/about',
            element: <h1>About</h1>
          },
          {
            path: '/contact',
            element: <h1>Contact</h1>
          },
          {
            path: '/shop',
            element: <Shop/>
          },
        ]
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
