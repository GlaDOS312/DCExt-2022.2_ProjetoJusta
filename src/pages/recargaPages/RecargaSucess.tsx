import {IonButton, IonCol, IonContent,IonLabel, IonPage, IonRow } from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";

const RecargaSucess: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const valor = new URLSearchParams(location.search).get("valor");
    const cashback = new URLSearchParams(location.search).get("cashback")
    const telefone = new URLSearchParams(location.search).get("telefone");

    return (
      <IonPage>
        <IonContent>
          <div className="sucess">
            <IonLabel>
              <h1 className="ion-text-center">Recarga feita com Sucesso!</h1>
            </IonLabel>
            <br />
            <IonLabel>
              <h1> Valor R$ {valor}</h1>
              <br />
              <h1>número: {telefone}</h1>
            </IonLabel>
            <IonLabel className="ion-text-center">
              CashBack: R$ {cashback}
            </IonLabel>
          </div>
          <IonRow>
            <IonCol className="ioncol">
              <IonButton
                className="btn"
                fill="clear"
                onClick={() => history.push("./Recarga")}
              >
                Regarregar Outro Número
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
export default RecargaSucess;
