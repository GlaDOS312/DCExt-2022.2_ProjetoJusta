import { IonButton, IonRouterOutlet, IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import { add } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Comecar from './Comecar';
import Login from './Login';
import { useHistory } from 'react-router';
import { RouteComponentProps} from 'react-router';
import './Estilo.css';

const AbrirConta: React.FC<RouteComponentProps> = () => {
    const history = useHistory();
    return (
      <div className = "estilo">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
            <IonBackButton defaultHref="/abrirconta" />
            </IonButtons>
            <IonTitle>Abrir Conta</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonContent className ="padrao">

          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/comecar" component={Comecar} />
              <Redirect exact from="/" to="/abrirconta" />
            </IonRouterOutlet>
          </IonReactRouter>

          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/login" component={Login} />
              <Redirect exact from="/" to="/abrirconta" />
            </IonRouterOutlet>
          </IonReactRouter>


          <IonButton shape="round" className="botaobranco" onClick={() => history.push('/comecar')}>Começar</IonButton>
   
          <IonButton shape="round" className="botaopreto" onClick={() => history.push('/login')}>Concluir cadastro</IonButton>


        </IonContent>
      </IonPage>
    </div>

  );
};
export default AbrirConta;
