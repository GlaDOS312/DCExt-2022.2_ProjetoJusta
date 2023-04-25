import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import axios from 'axios';


//Rotas das Páginas
import home from './routes/home.jsx'
import dashboard from './routes/dashboard.jsx'
import cadastro from './routes/cadastro.jsx'
import login from './routes/login.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <home />
      },
      {
        path: "/login",
        element: <login />
      },
      {
        path: "/cadastro",
        element: <dashboard />,
      },
      {
        path: "/new",
        element: <cadastro />
      },
      {
        path: "/dashboard",
        element: <dashboard />
      },
    ],
  },
]);

axios.get('http://localhost:5500/api')
    .then(response => {
      console.log(response.data);
    })

    .catch(error => {
      console.error(error);
    });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
