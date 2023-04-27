import React, { useState } from "react";
import { IonContent, IonGrid,IonPage,IonItem,IonSelect, IonSelectOption } from "@ionic/react";

import ReturnToolbar from "../../components/returnToolbar";
import RelSegment from "../../components/RelSegment";

import { creditTable, debitTable } from "./Tabelas";


const Relatorio: React.FC = () => {
  const [filtro, setFiltro] = useState<number>(30)
  const [opc, setOpc] = useState<"credito"|"debito">("credito");

  return (
    <IonPage>
      <ReturnToolbar title={"Relatório de Vendas"} />
      <IonContent>
        <div>
          <IonItem>
          <RelSegment
            selected={opc}
            onSelect={(selected: "credito" | "debito") => setOpc(selected)}
          />
          </IonItem>
        </div>
        <IonGrid className="my-table">
          {opc === "credito" ? creditTable : debitTable}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Relatorio;
