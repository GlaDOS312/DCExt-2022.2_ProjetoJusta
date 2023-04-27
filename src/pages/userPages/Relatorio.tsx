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
      <ReturnToolbar title={"Relatória de Vendas"} />
      <IonContent>
        <div>
          <IonItem>
            <label>FILTRO: </label>
            <IonSelect
              onIonChange={(event: CustomEvent) =>
                setFiltro(event.detail.value)
              }
              interface="popover"
              placeholder="Todos"
            >
              <IonSelectOption value="5">Últimos 5 dias</IonSelectOption>
              <IonSelectOption value="10">Últimos 10 dias</IonSelectOption>
              <IonSelectOption value="15">Últimos 15 dias</IonSelectOption>
              <IonSelectOption value="30">Últimos 30 dias</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>
        <div>
          <RelSegment
            selected={opc}
            onSelect={(selected: "credito" | "debito") => setOpc(selected)}
          />
        </div>
        <IonGrid className="my-table">
          {opc === "credito" ? creditTable : debitTable}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Relatorio;
