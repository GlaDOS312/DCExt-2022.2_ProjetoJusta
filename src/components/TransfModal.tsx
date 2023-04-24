import React, { useState, useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonToolbar,
  IonItem,
  IonInput,
  IonCard,
  IonCardContent,
  IonLabel,
} from "@ionic/react";

const TransfModal = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);

  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <IonLabel position="floating">Digite Seu Banco</IonLabel>
          <IonInput ref={inputRef} type="text" />
        </IonItem>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              onClick={() => onDismiss(inputRef.current?.value, "confirm")}
              strong={true}
            >
              Confirmar
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonCardContent>
    </IonCard>
  );
};
export default TransfModal;
