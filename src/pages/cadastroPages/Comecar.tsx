import {
  IonFab,
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import { RouteComponentProps } from "react-router";
import ReturnToolbar from "../../components/returnToolbar";


const Comecar: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  return (
    <div className="estilo">
      <IonPage>
        <ReturnToolbar title={"Entrar Pix"}/>
        <IonContent className="padrao">
          <IonFab vertical="bottom" horizontal="end" slot="fixed"></IonFab>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Comecar;
