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


const Login: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  return (
    <div className="estilo">
      <IonPage>
        <ReturnToolbar title={"Login"}/>

        <IonContent>
          <div className="container">
            <IonItem>
              <IonInput
                label="E-mail"
                type="email"
                placeholder="Digite o seu e-mail"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                label="Digite a sua senha"
                type="password"
                value="password"
              ></IonInput>
            </IonItem>

            <IonButton
              shape="round"
              className="botaobranco"
              onClick={() => history.push("/telaprincipal")}
            >
              Entrar
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};
export default Login;
