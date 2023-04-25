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
  useIonModal,
} from "@ionic/react";

import { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/core/components";

import ReturnToolbar from "../../components/returnToolbar";
import TransfModal from "../../components/TransfModal";

const TransfBanc: React.FC = () => {

  const [error, setError] = useState<string>();
  
  const [present, dismiss] = useIonModal(TransfModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  const [banco, setBanco] = useState<string>();
  const valorRef = useRef<HTMLIonInputElement>(null);
  const nomeRef = useRef<HTMLIonInputElement>(null);
  const cpfcnpjRef = useRef<HTMLIonInputElement>(null);
  const agenciaRef = useRef<HTMLIonInputElement>(null);
  const contaRef = useRef<HTMLIonInputElement>(null);
  
  const confeirDados = () => {
    if (!valorRef || !nomeRef || !cpfcnpjRef || !banco || !agenciaRef || !contaRef) {
      setError("Preencher corretamente antes de continuar");
      return;
    } else if (+valorRef < 0.01) {
      setError("Não é possível transferir esse valor");
      return;
    }
    let valor = valorRef.current!.value;
    let nome = nomeRef.current!.value;
    let cpfCnpj = cpfcnpjRef.current!.value;
    let agencia = agenciaRef.current!.value;
    let conta = contaRef.current!.value;
  }
  
  const inputChangeHandler = (event: CustomEvent) => {
    let banco = event.detail.value;
    
    if (banco !== "OUTROS"){
      setBanco(banco);
    } else {
      openModal();
    }
  };
  
  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === "confirm") {
          setBanco(ev.detail.data);
        }
      },
    });
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

      <ReturnToolbar title={"Transferência Bancária"} />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Nome do receptor</IonLabel>
                <IonInput ref={nomeRef} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">CPF/CNPJ do Receptor</IonLabel>
                <IonInput ref={cpfcnpjRef} type="number"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonSelect
                  onIonChange={inputChangeHandler}
                  interface="popover"
                  placeholder="Selecionar Banco"
                >
                  <IonSelectOption value="BRADESCO">BRADESCO</IonSelectOption>
                  <IonSelectOption value="BANCO DO BRASIL">
                    BANCO DO BRASIL
                  </IonSelectOption>
                  <IonSelectOption value="CAIXA ECÔNOMICA FEDERAL">
                    CAIXA ECÔNOMICA FEDERAL
                  </IonSelectOption>
                  <IonSelectOption value="ITAÚ">ITAÚ</IonSelectOption>
                  <IonSelectOption value="SANTANDER">SANTANDER</IonSelectOption>
                  <IonSelectOption value="OUTROS">Outros</IonSelectOption>
                </IonSelect>
              </IonItem>
              {(banco != undefined & banco != "BRADESCO" && banco != "BANCO DO BRASIL" && banco != "CAIXA ECÔNOMICA FEDERAL" && banco != "ITAÚ" && banco != "SANTANDER") 
               && <IonItem>{banco}</IonItem>}
              <IonItem>
                <IonLabel position="floating">Agência</IonLabel>
                <IonInput ref={agenciaRef} type="text"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Conta</IonLabel>
                <IonInput ref={contaRef} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Valor da Transferência</IonLabel>
                <IonInput
                  ref={valorRef}
                  type="number"
                  placeholder="R$ 0,00"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className="btn" fill="clear" onClick={conferirDados}>
                Continuar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default TransfBanc;
