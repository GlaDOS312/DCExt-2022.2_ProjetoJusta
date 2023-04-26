import './Sidebar.css'

import justa from '../../Assets/justa.png'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={justa} alt ="logo" />
                    <h1>Meu perfil.</h1>
                </div>

                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar_link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área administrativa</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <h2>Pessoas</h2>
                <div className="sidebar_link">
                    <i className="fa fa-male"></i>
                    <a href="#">Administradores</a>
                    </div>
                <div className="sidebar_link">
                    <i className="fa fa-users"></i>
                    <a href="#">Usuários</a>
                    </div>
                    <h2>Pessoas</h2>
                <div className="sidebar_link">
                    <i className="fa fa-money"></i>
                    <a href="#">Pagamentos</a>
                    </div>
                    <h2>Pessoas</h2>
                <div className="sidebar_link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Política de privacidade</a>
                    </div>
                    <h2>Pessoas</h2>
                <div className="sidebar_logout">
                    <i className="fa fa-power off"></i>
                    <a href="#">Log Out :C</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;