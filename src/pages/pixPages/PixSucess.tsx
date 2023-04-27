import { IonButton, IonCol, IonContent, IonLabel, IonPage, IonRow } from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";


const PixSucess: React.FC = () => {
    const history = useHistory()
    const location = useLocation();
    const valor = new URLSearchParams(location.search).get('valor');
    const chave = new URLSearchParams(location.search).get('chave');

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
              <h1>Chave Pix: {chave}</h1>
            </IonLabel>
          </div>
          <IonRow>
            <IonCol className="ioncol">
              <IonButton
                className="btn"
                fill="clear"
                onClick={() => history.push("./TransfPix")}
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
}
export default PixSucess;