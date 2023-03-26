import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RestaurantsPage} from "./Pages/RestourantsPage/RestaurantsPage";
import {Restaurant} from "./Pages/Restaurant/Restaurant";
import {AdminPages} from "./Pages/AdminPages/AdminPages";
import "./translate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "restaurants",
                element: <RestaurantsPage/>,
            },
            {
                path: "restaurants/:id",
                element: <Restaurant/>,
            },
            {
                path: "admin",
                element: <AdminPages/>,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
