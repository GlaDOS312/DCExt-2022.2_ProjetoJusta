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

import {useState, useRef} from "react";

import ReturnToolbar from "../../components/returnToolbar";
import { useHistory } from "react-router";


const TransfPix: React.FC = () => {
  const history = useHistory();

  const [tipoChave, setTipoChave] = useState<string>();
  const [error, setError] = useState<string>();

  const valorRef = useRef<HTMLIonInputElement>(null);
  const chaveRef = useRef<HTMLIonInputElement>(null);

  const handleSubmit = () => {
    let valor = valorRef.current!.value;
    let chave = chaveRef.current!.value;

      if (!tipoChave || !valor || !chave){
    setError("Preencher corretamente antes de continuar");
    return;
  } else if (+valor < 0.01) {
    setError("Não é possível transferir esse valor");
    return;
  }
  console.log( valor, chave, tipoChave);
  
  history.push(`./PixSucess?valor=${valor}&chave=${chave}`);
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
      <ReturnToolbar title={"Transferência"} />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonSelect
                  onIonChange={(event:CustomEvent) => {setTipoChave(event.detail.value)}}
                  aria-label="chave"
                  interface="popover"
                  placeholder="Selecione o Tipo de Chave"
                >
                  <IonSelectOption value="Telefone">Telefone</IonSelectOption>
                  <IonSelectOption value="CPF">CPF</IonSelectOption>
                  <IonSelectOption value="CNPJ">CNPJ</IonSelectOption>
                  <IonSelectOption value="E-mail">E-mail</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Valor da Transferência</IonLabel>
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
                <IonLabel position="floating">
                  {tipoChave === undefined ? "Chave PIX" : tipoChave}
                </IonLabel>
                <IonInput
                  ref={chaveRef}
                  type={tipoChave === "E-mail" ? "text" : "number"}
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
export default TransfPix;
