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
  IonSelectOption } from "@ionic/react";

import { useRef, useState } from "react";

import ReturnToolbar from "../../components/returnToolbar";

const TransfPix: React.FC = () => {
  
  const [tipoChave, setTipoChave] = useState<string>();
  const [error, setError] = useState<string>();

  const valorRef = useRef <HTMLIonInputElement>(null);
  const chaveRef = useRef <HTMLIonInputElement>(null);

  const EnviarPix = () => {

    let valor = valorRef.current!.value;
    let chave = chaveRef.current!.value;

    if (!valor || !chave){
      setError("Preencher corretamente antes de continuar");
       return;
    } else if (+valor < 0.01) {
      setError("Não é possível transferir esse valor");
      return;
    }   
  }
    
  const inputChangeHandler = (event:CustomEvent) => {
    setTipoChave(event.detail.value)
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
      <ReturnToolbar title={"Transferência"} />
      <IonContent>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonSelect
                onIonChange={inputChangeHandler}
                aria-label="chave"
                interface="popover"
                placeholder="Selecione o Tipo de Chave"
              >
                <IonSelectOption value="Telefone">telefone</IonSelectOption>
                <IonSelectOption value="CPF">CPF</IonSelectOption>
                <IonSelectOption value="CNPJ">CNPJ</IonSelectOption>
                <IonSelectOption value="E-mail">E-mail</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Digite o valor da Transferência
                </IonLabel>
                <IonInput
                  ref={valorRef}
                  placeholder="R$ 0,00"
                  type="number"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Digite o {tipoChave}</IonLabel>
                <IonInput
                  ref={chaveRef}
                  type={tipoChave === "E-mail" ? "text" : "number"}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton onClick={EnviarPix} fill="outline">
          Continuar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default TransfPix;
