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
  IonCard,
} from "@ionic/react";

import {useRef, useState } from "react";

import ReturnToolbar from "../../components/returnToolbar";
import { useHistory } from "react-router";


const Recarga: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState<string>();

  const [operadora, setOperadora] = useState<string>();
  
  const telefoneRef = useRef<HTMLIonInputElement>(null);
  const valorRef= useRef<HTMLIonInputElement>(null);

  
  const handleSubmit = () => {
    let telefone = telefoneRef.current!.value;
    let valor = valorRef.current!.value;
    var Cashback;

    if (!operadora || !valor || !telefone) {
      setError("Preencher corretamente antes de continuar");
      return;
    } else if(+valor < 10){
        setError("Não é possível recarregar esse valor");
        return;
    }
    if(+valor >= 30){
      Cashback = (+valor * 0.05).toFixed(2);
    } else if(+valor >= 50){
      Cashback = (+valor * 0.1).toFixed(2);
    } else if(+valor >= 100){
      Cashback = (+valor * 0.15).toFixed(2);
    }else{
      Cashback = 0;
    }
    history.push(`./RecargaSucess?valor=${valor}&cashback=${Cashback}&telefone=${telefone}`)
    console.log(operadora, valor, Cashback, telefone)
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
      <ReturnToolbar title={"Recarga de Celular"} />
      <IonContent>
        <IonCard className="card">
          <p>Valor Mínimo para Recarga: R$ 10,00</p>
          <br />
          <p>Recargas Acima de R$ 30,00: 5% de Cashback!</p>
          <p>Recargas Acima de R$ 50,00: 10% de Cashback!</p>
          <p>Recargas Acima de R$ 100,00: 15% de Cashback!</p>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonSelect
                  onIonChange={(event:CustomEvent) => setOperadora(event.detail.value)}
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
                <IonInput
                  ref={telefoneRef}
                  type="number"
                  placeholder="(88)88888-888"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Valor da Recarga</IonLabel>
                <IonInput
                  ref={valorRef}
                  type="number"
                  placeholder="R$ 0,00"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ioncol">
              <IonButton className="btn" fill="clear" onClick={handleSubmit}>
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
