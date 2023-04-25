import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRoute, RouterProvider, Route} from 'react-router-dom'
import './index.css'
import axios from 'axios';


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

axios.get(' http://localhost:5500/api')
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
