import {
  IonButton,
  IonIcon,
  IonContent,
  IonPage,
} from "@ionic/react";
import { useHistory } from "react-router";

import Justalogo from "./justalogo.jpeg";
import { chatbubble } from 'ionicons/icons';


const Home: React.FC= () => {
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
