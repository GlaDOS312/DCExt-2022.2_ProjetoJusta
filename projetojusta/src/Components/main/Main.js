import "./Main.css";
import hello from "../../Assets/hello.svg";
import Chart from "./charts/Chart";

const Main = () => {
    <main>
        <div className="main_container">
            <div className="main_title">
                <img src={hello} alt="hello" />
                <div className="main_greeting">
                    <h1>Olá Usuário</h1>
                    <p>Bem vindo ao seu perfil Justa!</p>
                </div>
            </div>
            <div className="main_cards">
                <div className="card">
                    <i className="fa fa-file-text fa-2x text-lightblue"></i>
                    <div className="card_inner">
                        <p className="text-primary">Número de pedidos</p>
                        <span className="font-bold text-title">713</span>
                    </div>
                </div>
                <div className="card">
                    <i className="fa fa-money fa-2x text-green"></i>
                    <div className="card_inner">
                        <p className="text-primary">Pagamentos</p>
                        <span className="font-bold text-title">R$715</span>
            </div>
        </div>
                 <div className="card">
                    <i className="fa fa-bars fa-2x text-darkblue"></i>
                    <div className="card_inner">
                        <p className="text-primary">Número de produtos</p>
                        <span className="font-bold text-title">717</span>
                     </div>
                </div>
            </div>
        <div className="charts">
    <div className="charts_left">
<div className="charts_left_title">
    </div>
    <h1>Reports Diários</h1>
    <p>Recife, Pernambuco, BR</p>
    <i className="fa fa-usd"></i>
      </div>
      <Chart/>
        </div>

        <div className="charts_right">
<div className="charts_right_title">
    </div>
  
    <i className="fa fa-area-chart"></i>
      </div>
      <div className="charts_right_cards">
        <div className="card1">
            <h1>Lucro</h1>
            <p>R$2.500</p>
      </div>
      <div className="card2">
            <h1>Lucro</h1>
            <p>R$7.500</p>
      </div>
        </div>
          </div>
            </main>
            
};

export default Main;