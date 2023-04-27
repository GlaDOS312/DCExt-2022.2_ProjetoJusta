import { IonCol, IonGrid, IonHeader,IonLabel, IonRow } from "@ionic/react";
import React from "react";

type TableProps = {
  data: { bandeira: string; total: number; transacoes:number}[];
  title: string;
};

const Table: React.FC<TableProps> = ({ data, title }) => {
  return (
    <IonGrid className="my-table">
      <IonHeader>
        <IonLabel>
          <h2>{title}</h2>
        </IonLabel>
      </IonHeader>
      <IonRow>
          <IonCol>BANDEIRA</IonCol>
          <IonCol>TOTAL</IonCol>
          <IonCol>TRANSAÇÕES</IonCol>
      </IonRow>
      {data.map((item, index) => (
        <IonRow key={index}>
          <IonCol>{item.bandeira}</IonCol>
          <IonCol>{item.total}</IonCol>
          <IonCol>{item.transacoes}</IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

const creditData = [
  { bandeira: "Credit 1", total: 100, transacoes: 15 },
  { bandeira: "Credit 2", total: 200, transacoes: 25 },
  { bandeira: "Credit 3", total: 300, transacoes: 35 },
];

const debitData = [
  { bandeira: "Debit 1", total: 50, transacoes: 23 },
  { bandeira: "Debit 2", total: 75, transacoes: 33 },
  { bandeira: "Debit 3", total: 100, transacoes: 43 },
];

export const creditTable = <Table data={creditData} title="Crédito"/>;
export const debitTable = <Table data={debitData} title="Débito" />;
