import { IonRouterOutlet, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import { add } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import EntrarPix from './EntrarPix';
import { useHistory } from 'react-router';
import { RouteComponentProps} from 'react-router';
import './Estilo.css';
//Código de Jéssica


const Entrar: React.FC<RouteComponentProps> = () => {
    const history = useHistory();
  return (
    <div className = "estilo">
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/entrar" />
          </IonButtons>
          <IonTitle>Entrar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className ="padrao">



      <IonReactRouter>
        <IonRouterOutlet>
        
          <Route path="/entrarpix" component={EntrarPix} />
          <Redirect exact from="/" to="/entrar" />
        </IonRouterOutlet>
      </IonReactRouter>


      <IonButton onClick={() => history.push('/entrarpix')}>EntrarPix</IonButton>


      </IonContent>
    </IonPage>
    </div>
  );
};
export default Entrar;
/*Cada visualização deve conter um componente IonPage.
 As transições de página não funcionarão corretamente sem ela. */