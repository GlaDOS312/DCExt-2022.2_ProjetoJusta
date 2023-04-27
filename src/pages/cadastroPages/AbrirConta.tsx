import React from "react";
import {
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/react";
import { useHistory } from "react-router";

import ReturnToolbar from "../../components/returnToolbar";


const AbrirConta: React.FC = () => {
  const history = useHistory();
  return (
    <div className="estilo">
      <IonPage>
        <ReturnToolbar title={"Abrir Conta"}/>
        <IonContent className="padrao">
          <IonButton
            shape="round"
            className="botaobranco"
            onClick={() => history.push("/comecar")}
          >
            Começar
          </IonButton>
        </IonContent>
      </IonPage>
    </div>
  );
};
export default AbrirConta;
