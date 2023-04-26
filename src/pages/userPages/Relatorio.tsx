import React from "react";
import sales from "./salesData";
import { IonCol, IonContent, IonGrid,IonPage, IonRow, IonItem } from "@ionic/react";
import ReturnToolbar from "../../components/returnToolbar";

const Relatorio: React.FC = () => {
  const data = sales;
  let count = data.length
  return (
    <IonPage>
      <ReturnToolbar title={"Relatória de Vendas"} />
      <IonContent>
        <IonGrid>
          <IonRow className="header-row">
            <IonCol size="4">
              <IonItem>Data</IonItem>
            </IonCol>
            <IonCol size="4">
              <IonItem>Total de Vendas</IonItem>
            </IonCol>
            <IonCol size="4">
              <IonItem>Brandeira</IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Relatorio;