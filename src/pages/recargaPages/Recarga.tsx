import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

import { useRef, useState } from "react";

import ReturnToolbar from "../../components/returnToolbar";


const Recarga: React.FC = () => {
  const [operadora, setOperadora] = useState<string>();
  const [error, setError] = useState<string>();

  const telefoneRef = useRef<HTMLIonInputElement>(null);
  const valorRef = useRef<HTMLIonInputElement>(null);

  
  const recarga = () => {

    let telefone = telefoneRef.current!.value;
    let valor = telefoneRef.current!.value;

    if (!operadora || !valor || !telefone) {
      setError("Preencher corretamente antes de continuar");
      return;
    } else if (+valor < 5) {
      setError("Não é possível recarregar esse valor");
      return;
    }  
  };

const inputChangeHandler = (event:CustomEvent) => {
  setOperadora(event.detail.value);
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
      <ReturnToolbar title={"Recarga de Celular"} />
      <IonContent>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonItem>
                <IonSelect
                  onIonChange={inputChangeHandler}
                  aria-label="Operadora"
                  interface="popover"
                  placeholder="Selecionar Operadora"
                >
                  <IonSelectOption value="TIM">TIM</IonSelectOption>
                  <IonSelectOption value="CLARO">CLARO</IonSelectOption>
                  <IonSelectOption value="OI">OI</IonSelectOption>
                  <IonSelectOption value="VIVO">VIVO</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Número de Telefone (com DDD)
                </IonLabel>
                <IonInput ref={telefoneRef} type="number"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Valor da Recarga</IonLabel>
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
              <IonButton className="btn" fill="clear" onClick={recarga}>
                Continuar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Recarga;
