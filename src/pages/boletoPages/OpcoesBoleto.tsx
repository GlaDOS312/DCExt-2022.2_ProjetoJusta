import {
  IonPage,
  IonContent,
  IonList,
} from "@ionic/react";

import {
  cameraOutline,
  barcodeOutline,
  cardOutline,
} from "ionicons/icons";

import Action from "../../components/Action";
import ReturnToolbar from "../../components/returnToolbar";

const OpcoesBoleto: React.FC = () => {
  return (
    <IonPage>
      <ReturnToolbar title={"Opções Boleto"} />
      <IonContent>
        <IonList>
          <Action
            route={"/CartaoBoleto"}
            icon={cardOutline}
            name={"Pagar com Cartão"}
          />
          <Action
            route={"/TelaPrincipal"}
            icon={cameraOutline}
            name={"Ler Boleto"}
          />
          <Action
            route={"/TelaPrincipal"}
            icon={barcodeOutline}
            name={"Gerar Boleto"}
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default OpcoesBoleto;
