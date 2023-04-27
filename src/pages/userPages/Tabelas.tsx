import { IonCol, IonGrid, IonHeader,IonLabel, IonRow } from "@ionic/react";
import React from "react";

type TableProps = {
  data: {
    date: string;
    metodoPagamento: string;
    quantia: number;
    marca: string;
  }[];
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
        <IonCol>Data</IonCol>
        <IonCol>Método</IonCol>
        <IonCol>Quantia</IonCol>
        <IonCol>Bandeira</IonCol>
      </IonRow>
      {data.map((item, index) => (
        <IonRow key={index}>
          <IonCol>{item.date}</IonCol>
          <IonCol>{item.metodoPagamento}</IonCol>
          <IonCol>{item.quantia}</IonCol>
          <IonCol>{item.marca}</IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

const creditData = [
  { date: "20-04-2023", metodoPagamento: "Crédito", quantia: 500.0, marca: "Visa" },
  { date: "20-04-2023", metodoPagamento: "Crédito", quantia: 1000.0, marca: "Mastercard" },
  { date: "19-04-2023", metodoPagamento: "Crédito", quantia: 800.0, marca: "American Express" },
  { date: "17-04-2023", metodoPagamento: "Crédito", quantia: 600.0, marca: "Visa" },
  { date: "13-04-2023", metodoPagamento: "Crédito", quantia: 200.0, marca: "Mastercard" },
  { date: "11-04-2023", metodoPagamento: "Crédito", quantia: 750.0, marca: "American Express" },
  { date: "09-04-2023", metodoPagamento: "Crédito", quantia: 1200.0, marca: "Visa" },
  { date: "07-04-2023", metodoPagamento: "Crédito", quantia: 100.0, marca: "American Express" },
  { date: "05-04-2023", metodoPagamento: "Crédito", quantia: 300.0, marca: "Mastercard" },
  { date: "03-04-2023", metodoPagamento: "Crédito", quantia: 1800.0, marca: "American Express" },
  { date: "01-04-2023", metodoPagamento: "Crédito", quantia: 700.0, marca: "Visa" },
];

const debitData = [
  { date: "19-04-2023", metodoPagamento: "debito", quantia: 300.0, marca: "Visa" },
  { date: "18-04-2023", metodoPagamento: "debito", quantia: 250.0, marca: "Mastercard" },
  { date: "16-04-2023", metodoPagamento: "debito", quantia: 700.0, marca: "Mastercard" },
  { date: "14-04-2023", metodoPagamento: "debito", quantia: 1500.0, marca: "Visa" },
  { date: "12-04-2023", metodoPagamento: "debito", quantia: 1000.0, marca: "Visa" },
  { date: "10-04-2023", metodoPagamento: "debito", quantia: 350.0, marca: "Mastercard" },
  { date: "08-04-2023", metodoPagamento: "debito", quantia: 900.0, marca: "Mastercard" },
  { date: "06-04-2023", metodoPagamento: "debito", quantia: 2000.0, marca: "Visa" },
  { date: "04-04-2023", metodoPagamento: "debito", quantia: 150.0, marca: "Visa" },
  { date: "02-04-2023", metodoPagamento: "debito", quantia: 250.0, marca: "Mastercard" },
  { date: "31-03-2023", metodoPagamento: "debito", quantia: 950.0, marca: "Mastercard" },
];

export const creditTable = <Table data={creditData} title="Crédito"/>;
export const debitTable = <Table data={debitData} title="Débito" />;
