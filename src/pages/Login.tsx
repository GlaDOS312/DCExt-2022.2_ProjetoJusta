import {
  IonInput,
  IonItem,
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import { RouteComponentProps } from "react-router";
import ReturnToolbar from "../components/returnToolbar";
import justalogo from './justalogo.jpeg';


const Login: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  return (
    <div className="estilo">
      <IonPage>
        <ReturnToolbar title={"Login"}/>

        <IonContent>  
        <div className="container">
        <img className ="img" src = {justalogo} alt="Logo Justa"/>

          
        <IonCol>
          <IonItem>
            <IonInput label="E-mail" labelPlacement="stacked" placeholder="Digite o seu e-mail"></IonInput>
          </IonItem>
        </IonCol>
      

        <IonCol>
          <IonItem>
            <IonInput label="Senha" type="password" labelPlacement="stacked" placeholder="Digite a sua senha"></IonInput>
          </IonItem>
        </IonCol>
     

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
    
  );
};
export default Login;
