import { IonGrid, IonHeader, IonLabel, IonCol, IonRow } from "@ionic/react";
import React from "react";

type TableProps = {
debito: {descricao:string; taxa:string}[];
credito: {parcelas: number; taxa:string}[];
title: string;
isensao: boolean;
limiteCashBack: number;
cashBack: {valor:number; percentual:number}[];
};

const Table: React.FC<TableProps> = ({credito, debito,title, isensao, limiteCashBack, cashBack}) => {
    return (
      <IonGrid className="my-table">
        <IonHeader>
          <IonLabel>
            <h2>{title}</h2>
          </IonLabel>
        </IonHeader>

        <IonRow>
          <IonCol>Parcelas</IonCol>
          <IonCol>Taxa</IonCol>
        </IonRow>
         {debito.map((item, index) => (
          <IonRow key={index}>
            <IonCol>{item.descricao}</IonCol>
            <IonCol>{item.taxa}</IonCol>
          </IonRow>
        ))}

        {credito.map((item, index) => (
          <IonRow key={index}>
            <IonCol>{item.parcelas}</IonCol>
            <IonCol>{item.taxa}</IonCol>
          </IonRow>
        ))}

        <IonRow>
          <IonCol>Insenção da Maquininha</IonCol>
          <IonCol>{isensao == true ? "Sim" : "Não"}</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>Limite de CashBack</IonCol>
          <IonCol> R$ {limiteCashBack}</IonCol>
        </IonRow>

        <IonRow>
          <h2>CashBack:</h2>
        </IonRow>

        {cashBack.map((item, index) => (
          <IonRow key={index}>
            <IonCol>{item.valor}</IonCol>
            <IonCol>{item.percentual}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
}

const BronzeData = {
  debito: [{ descricao: 'Débito', taxa: '1,50%' }],
  credito: [
    { parcelas: 1, taxa: "3,10%" },
    { parcelas: 2, taxa: "4,30%" },
    { parcelas: 3, taxa: "5,99%" },
    { parcelas: 4, taxa: "7,10%" },
    { parcelas: 5, taxa: "9,80%" },
    { parcelas: 6, taxa: "11,33%" },
    { parcelas: 7, taxa: "13,99%" },
    { parcelas: 8, taxa: "15,20%" },
    { parcelas: 9, taxa: "17,40%" },
    { parcelas: 10, taxa: "19,99%" },
    { parcelas: 11, taxa: "20,99%" },
    { parcelas: 12, taxa: "21,99%" },
  ],
  cashBack: [
    { valor: 50000, percentual: 0.1 },
    { valor: 10000, percentual: 0.2 },
    { valor: 180000, percentual: 0.25 },
  ],
};

const PrataData = {
  debito: [{ descricao: "Débito", taxa: "1,19%" }],
  credito: [
    { parcelas: 1, taxa: "2,85%" },
    { parcelas: 2, taxa: "5,55%" },
    { parcelas: 3, taxa: "6,56%" },
    { parcelas: 4, taxa: "7,54%" },
    { parcelas: 5, taxa: "8,53%" },
    { parcelas: 6, taxa: "9,52%" },
    { parcelas: 7, taxa: "10,51%" },
    { parcelas: 8, taxa: "11,5%" },
    { parcelas: 9, taxa: "12,49%" },
    { parcelas: 10, taxa: "13,48%" },
    { parcelas: 11, taxa: "14,47%" },
    { parcelas: 12, taxa: "15,46%" },
  ],
  cashBack: [
    { valor: 50000, percentual: 0.1 },
    { valor: 10000, percentual: 0.2 },
    { valor: 180000, percentual: 0.25 },
  ],
};

const ouroData = {
  debito: [{ descricao: 'Débito', taxa: '0,99%' }],
  credito: [
    { parcelas: 1, taxa: '2,25%' },
    { parcelas: 2, taxa: '4,33%' },
    { parcelas: 3, taxa: '5,03%' },
    { parcelas: 4, taxa: '5,72%' },
    { parcelas: 5, taxa: '6,42%' },
      { parcelas: 6, taxa: '7,11%' },
      { parcelas: 7, taxa: '8,05%' },
      { parcelas: 8, taxa: '8,74'  },
      { parcelas: 9, taxa: '9,44%' },
      { parcelas: 10, taxa: '10,13%' },
      { parcelas: 11, taxa: '10,83%' },
      { parcelas: 12, taxa: '11,52%' }
    ],
  cashBack: [
    { valor: 30000, percentual: 0.1 },
    { valor: 75000, percentual: 0.2 },
    { valor: 150000, percentual: 0.25 },
  ],
};

export const bronzeTable =(
<Table 
    title="Benefícios de Bronze"
    debito={BronzeData.debito}
    credito={BronzeData.credito}
    isensao={false}
    limiteCashBack={100}
    cashBack={BronzeData.cashBack}
/>
);

export const prataTable = (
  <Table
    title="Benefícios de Prata"
    debito={BronzeData.debito}
    credito={BronzeData.credito}
    isensao={true}
    limiteCashBack={250}
    cashBack={BronzeData.cashBack}
  />
);

export const ouroTable = (
  <Table
    title="Benefícios de Ouro"
    debito={ouroData.debito}
    credito={ouroData.credito}
    isensao={true}
    limiteCashBack={500}
    cashBack={BronzeData.cashBack}
  />
);



