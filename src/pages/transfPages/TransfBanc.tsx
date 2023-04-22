import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import { useRef, useState } from "react";

import ReturnToolbar from "../../components/returnToolbar";

const TransfBanc: React.FC = () => {

  const [error, setError] = useState<string>();

  const valorRef = useRef<HTMLIonInputElement>(null);
  const nomeRef = useRef<HTMLIonInputElement>(null);
  const cpfcnpjRef = useRef<HTMLIonInputElement>(null);
  const agenciaeRef = useRef<HTMLIonInputElement>(null);
  const contaRef = useRef<HTMLIonInputElement>(null);

  const Transferir = () => {
    
    let valor = valorRef.current!.value;
    let nome = valorRef.current!.value;
    let cpfCnpj = valorRef.current!.value;
    let agencia = valorRef.current!.value;
    let conta = valorRef.current!.value;


    if (!valor) {
      setError("Preencher corretamente antes de continuar");
      return;
    } else if (+valor < 0.01) {
      setError("Não é possível transferir esse valor");
      return;
    }
  };

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
      <ReturnToolbar title={"Transferência Bancária"} />
      <IonContent>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Nome do receptor</IonLabel>
                <IonInput ref={valorRef} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">CPF/CNPJ do Receptor</IonLabel>
                <IonInput ref={valorRef} type="number"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonSelect
                  aria-label="Banco"
                  interface="popover"
                  placeholder="Selecionar Banco"
                >
                  <IonSelectOption value="BRADESCO">BRADESCO</IonSelectOption>
                  <IonSelectOption value="BANCO DE BRASIL">BANCO DO BRASIL</IonSelectOption>
                  <IonSelectOption value="CAIXA ECÔNOMICA FEDERAL">CAIXA ECÔNOMICA FEDERAL</IonSelectOption>
                  <IonSelectOption value="ITAÚ">ITAÚ</IonSelectOption>
                  <IonSelectOption value="SANTANDER">SANTANDER</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Agência do Receptor</IonLabel>
                <IonInput ref={valorRef} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Conta do Receptor</IonLabel>
                <IonInput ref={valorRef} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Valor da Transferência</IonLabel>
                <IonInput ref={valorRef} type="number" placeholder="R$ 0,00"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton onClick={Transferir} fill="outline">
          Continuar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default TransfBanc;
