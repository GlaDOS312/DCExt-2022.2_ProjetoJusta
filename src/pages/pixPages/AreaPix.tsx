import {
  IonPage,
  IonContent,
  IonList,
} from "@ionic/react";

import {
  paperPlaneOutline,
  copyOutline,
  qrCodeOutline,
  keyOutline,
  enterOutline,
} from "ionicons/icons";

import Action from "../../components/Action";
import ReturnToolbar from "../../components/returnToolbar";


const AreaPix: React.FC = () => {
  return (
    <IonPage>
      <ReturnToolbar title={"Área Pix"}/>
      <IonContent>
        <IonList>
          <Action
            route={"/TransfPix"}
            icon={paperPlaneOutline}
            name={"Transferir para chave PIX"}
          />
          <Action
            route={"/TelaPrincipal"}
            icon={copyOutline}
            name={"PIX Copia e Cola"}
          />
          <Action
            route={"/TelaPrincipal"}
            icon={qrCodeOutline}
            name={"Ler QR CODE"}
          />
          <Action
            route={"/TelaPrincipal"}
            icon={enterOutline}
            name={"Receber PIX"}
          />
          <Action
            route={"/TelaPrincipal"}
            icon={keyOutline}
            name={"Gerenciar Suas Chaves"}
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
}
export default AreaPix;
