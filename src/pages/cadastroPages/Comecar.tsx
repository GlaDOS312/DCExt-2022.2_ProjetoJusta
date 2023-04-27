import {
  IonContent,
  IonPage,
  IonCol,
  IonItem,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonLabel,
  IonInput,
  IonAlert,
} from "@ionic/react";
import React, { useRef, useState} from "react";
import { useHistory } from "react-router";

const Comecar: React.FC = () => {
  const history = useHistory();

  const [error, setError] = useState<string>();

  const nomeRef= useRef<HTMLIonInputElement>(null) 
  const sobrenomeRef = useRef<HTMLIonInputElement>(null); 

  const emailRef = useRef<HTMLIonInputElement>(null); 
  const cnpjRef = useRef<HTMLIonInputElement>(null) 

  const agenciaRef = useRef<HTMLIonInputElement>(null); 
  const contaRef = useRef<HTMLIonInputElement>(null); 
  const saldoRef = useRef<HTMLIonInputElement>(null);

  const senhaRef= useRef<HTMLIonInputElement>(null) 

  const abrirConta = () => {
    const nome = nomeRef.current!.value
    const sobrenome = sobrenomeRef.current!.value
    const email = emailRef.current!.value
    const cnpj = cnpjRef.current!.value
    const agencia = agenciaRef.current!.value
    const conta = contaRef.current!.value
    const saldo = saldoRef.current!.value
    const senha = senhaRef.current!.value
    if (!nome || !sobrenome || !saldo){
      setError("Preencher Corretamente Antes de Continuar");
      return;
    }
    console.log(nome, sobrenome);
    history.push(`./cadSucess?nome=${nome}&sobrenome=${sobrenome}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle className="title">Cadastrar dados</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCol>
          <IonItem className="login">
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput type="text" ref={nomeRef} />
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem className="login">
            <IonLabel position="floating">Sobrenome</IonLabel>
            <IonInput type="text" ref={sobrenomeRef} />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" ref={emailRef} />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonLabel position="floating">Agencia</IonLabel>
            <IonInput type="text" ref={agenciaRef} />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonLabel position="floating">CNPJ</IonLabel>
            <IonInput type="text" ref={cnpjRef} />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonLabel position="floating">Conta</IonLabel>
            <IonInput type="text" ref={contaRef} />
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Saldo</IonLabel>
            <IonInput type="text" ref={saldoRef} />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput type="text" ref={senhaRef} />
          </IonItem>
        </IonCol>
        <IonCol className="ioncol">
          <IonButton className="btn" fill="clear" onClick={abrirConta}>
            Abrir Conta
          </IonButton>
        </IonCol>
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
      </IonContent>
    </IonPage>
  );
};
export default Comecar;
