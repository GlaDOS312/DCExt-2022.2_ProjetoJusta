import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRoute, RouterProvider, Route} from 'react-router-dom'
import './index.css'
import axios from 'axios';
import { response } from 'express'

const router = createBrowserRoute([
  {
    element: <App />,
    children: [
      {
        path: "/"
      },
      {
        path: "/new",
      },
    ],
  },
])

axios.get('https://github.com/GlaDOS312/DCExt-2022.2_ProjetoJusta/tree/Back-End/api%20site')
    .then(response => {
      console.log(response.data);
    })

    .catch(error => {
      console.error(error);
    });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
