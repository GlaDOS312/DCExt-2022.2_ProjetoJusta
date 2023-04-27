import { IonButton, IonCol, IonContent, IonLabel, IonPage, IonRow } from "@ionic/react";
import { useHistory, useLocation } from "react-router";

const BoletoSucess: React.FC = () =>  {
    const history=useHistory();
    const location = useLocation();

    const valor = new URLSearchParams(location.search).get("valor");
    const numCard= new URLSearchParams(location.search).get("numCard");
    const numBoleto = new URLSearchParams(location.search).get("numBoleto");
    return (
      <IonPage>
        <IonContent>
          <div className="sucess">
            <IonLabel>
              <h1 className="ion-text-center">Boleto Pago com Sucesso!</h1>
            </IonLabel>
            <br />
            <IonLabel>
              <h1> Valor R$ {valor}</h1>
              <br />
              <h1>número do boleto: {numBoleto}</h1>
              <br />
              <h1>número do Cartão: {numCard}</h1>
            </IonLabel>
          </div>
          <IonRow>
            <IonCol className="ioncol">
              <IonButton
                className="btn"
                fill="clear"
                onClick={() => history.push("./CartaoBoleto")}
              >
                Pagar Outro Boleto
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
export default BoletoSucess;