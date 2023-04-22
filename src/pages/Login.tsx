import { IonRouterOutlet, IonInput, IonItem, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import { add } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import TelaPrincipal from './TelaPrincipal';
import { useHistory } from 'react-router';
import { RouteComponentProps} from 'react-router';
import './Estilo.css';


const Login: React.FC<RouteComponentProps> = () => {
    const history = useHistory();
  return (
    <div className="estilo">
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
        <div className="container">
        <IonItem>
          <IonInput label="E-mail" type="email" placeholder="Digite o seu e-mail"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Digite a sua senha" type="password" value="password"></IonInput>
        </IonItem>
  

        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/telaprincipal" component={TelaPrincipal} />
            <Redirect exact from="/" to="/login" />
          </IonRouterOutlet>
        </IonReactRouter>


        <IonButton  shape="round" className="botaobranco" onClick={() => history.push('/telaprincipal')}>Entrar</IonButton>

        </div>
      </IonContent>
    </IonPage>
    </div>
  );
};
export default Login;
