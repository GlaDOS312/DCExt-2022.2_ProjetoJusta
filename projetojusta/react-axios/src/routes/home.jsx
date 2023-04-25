import { useState, useEffect } from "react";  
import { Link } from "react-router-dom";

import "./home.css";

const home = () => {

    const [login, dashboard, cadastro, home] = useState([])

    const logar = async() => {

    }

    useEffect(() => {

      logar

    }, [])

  return (
    <div>home</div>
  )
}

export default home