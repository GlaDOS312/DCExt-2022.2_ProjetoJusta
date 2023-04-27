import {
  IonButton,
  IonCol,
  IonContent,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";

const TransfSucess: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const valor = new URLSearchParams(location.search).get("valor");
  const nome = new URLSearchParams(location.search).get("nome");
  const banco = new URLSearchParams(location.search).get("banco");
  const agencia = new URLSearchParams(location.search).get("agencia");

  return (
    <IonPage>
      <IonContent>
        <div className="sucess">
          <IonLabel>
            <h1 className="ion-text-center">
              Transfêrencia Enviada de R$ {valor} Envida para {nome}
            </h1>
          </IonLabel>
          <br />
          <IonLabel>
            <h2> {banco}({agencia})</h2>
          </IonLabel>
        </div>
        <IonRow>
          <IonCol className="ioncol">
            <IonButton
              className="btn"
              fill="clear"
              onClick={() => history.push("./TransfBanc")}
            >
              Fazer Outra Transferência
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ioncol">
            <IonButton
              className="btn"
              fill="clear"
              onClick={() => history.push("./TelaPrincipal")}
            >
              Voltar à Tela Principal
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
export default TransfSucess;
