import { 
  IonPage, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonAlert } from "@ionic/react";
import ReturnToolbar from "../../components/returnToolbar";
import { useRef, useState } from "react";
import { useHistory } from "react-router";

const CartaoBoleto: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState<string>();

  const numboletoRef = useRef<HTMLIonInputElement>(null);
  const valorboletoRef = useRef<HTMLIonInputElement>(null);
  const numcardRef = useRef<HTMLIonInputElement>(null);
  const validadecardRef = useRef<HTMLIonInputElement>(null);
  const codicardRef = useRef<HTMLIonInputElement>(null);

    const pagarBoleto = () => {
      let numBoleto = numboletoRef.current?.value;
      let valBoleto = valorboletoRef.current?.value;
      let numCard =  numcardRef.current?.value;
      let validadeCard = validadecardRef.current?.value;
      let codiCard = codicardRef.current?.value;

      if (!valBoleto || !numBoleto || !numCard|| !validadeCard || !codiCard) {
        setError("Preencher corretamente antes de continuar");
        return;
      } else if (+valBoleto < 0.01) {
        setError("Valor do Boleto Incorreto");
        return;
      }
      console.log(valBoleto, numBoleto, numCard, validadeCard, codiCard);
      history.push(`./BoletoSucess?valor=${valBoleto}&numCard=${numCard}&numBoleto=${numBoleto}`)
      
    }
  return (
    <IonPage>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: "OK",
            handler: () => {
              setError(undefined);
            },
          },
        ]}
      />
      <ReturnToolbar title={"Pagar com cartão"} />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Número do Boleto</IonLabel>
                <IonInput type="text" ref={numboletoRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Valor do Boleto</IonLabel>
                <IonInput type="number" ref={valorboletoRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonLabel className="white">Cartão de Crédito:</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
                <IonLabel position="floating">Número do Cartão</IonLabel>
                <IonInput type="number" ref={numcardRef}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Validade(MM/AA)</IonLabel>
                <IonInput type="text" ref={validadecardRef}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Código de Segurança</IonLabel>
                <IonInput type="number" ref={codicardRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ioncol">
              <IonButton className="btn" fill="clear" onClick={pagarBoleto}>
                Continuar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default CartaoBoleto;
