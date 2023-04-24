import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: '/Home',
        icon: <AiIcons.AiFillBank />,
        cName: 'nav-text'
    },
    {
        title: "Produtos",
        path: '/Produtos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: "Crédito",
        path: '/Crédito',
        icon: <AiIcons.AiFillDollarCircle />,
        cName: 'nav-text'
    },
    {
        title: "Reportar",
        path: '/Reportar',
        icon: <AiIcons.AiFillAlert />,
        cName: 'nav-text'
    },
   {
        title: "Contato",
        path: '/Contato',
        icon: <AiIcons.AiFillPhone />,
        cName: 'nav-text'
    },
]
