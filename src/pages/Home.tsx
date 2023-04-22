import {IonButton, IonRouterOutlet, IonIcon, IonContent, IonPage } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Estilo.css';
import Login from './Login';
import AbrirConta from './AbrirConta';
//clicar botao redirecionar para outra pagina
import { useHistory } from 'react-router';
import { RouteComponentProps} from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Justalogo from "./justalogo.jpeg";
import { chatbubble } from 'ionicons/icons';


const Home: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  return (

    <IonPage>

      {/*<IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
  </IonHeader>*/}
      
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/login" component={Login} />
            <Route path="/abrirconta" component={AbrirConta} />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>
        </IonReactRouter>

        <div className="container">
          <img className ="img" src = {Justalogo} alt="logo Justa"/>
          <IonButton  shape="round" className="botaobranco" onClick={() => history.push('/login')}>Login</IonButton>

   
          <IonButton  shape="round" className="botaoazul" onClick={() => history.push('/abrirconta')}>Abrir conta</IonButton>
        </div>

        <IonIcon className="icone" icon={chatbubble}></IonIcon>
    
      

      </IonContent>
    </IonPage>
  
  );
};

export default Home;
