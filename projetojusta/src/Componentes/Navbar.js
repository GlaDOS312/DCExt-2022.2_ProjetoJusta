import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from '.componentes/Navbar'
import { SidebarData } from './SidebarData';
import '/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <div>
            <div className='navbar'>
                <Link to= "#" className='barras-menu'>
                    <FaIcons.FaBars />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-itens'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='barras-menu'>
                           <AiIcons.AiOutlineClose /> 
                        </Link>
                    </li>
                    {SidebarData.map((item , index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                  {item.icon}
                                  <span>{item.title}</span>  
                            </Link>                   
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar