import React, {useRef} from "react";
import { useHistory } from "react-router";
import { IonButton, IonHeader, IonIcon, IonList, IonModal, IonToolbar } from "@ionic/react";
import {logOutOutline, personCircle, settingsOutline } from "ionicons/icons";


const ToolBar: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);
  const history = useHistory();

  const LogOut = () =>{
    // codigo para deslogar e o .push para home
    history.push("/TelaPrincipal")
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButton slot="start" fill="clear" id="open-modal">
          <IonIcon icon={personCircle}></IonIcon>
        </IonButton>
      </IonToolbar>

      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={1}
        breakpoints={[0, 1]}
      >
        <IonList>
          <IonButton
            onClick={() => history.push("/UserConfig")}
            className="block"
            fill="clear"
          >
            <IonIcon icon={settingsOutline}></IonIcon>
            Configurações
          </IonButton>
          <IonButton
            onClick={LogOut}
            className="block"
            fill="clear"
          >
            <IonIcon icon={logOutOutline}></IonIcon>
            Sair
          </IonButton>
        </IonList>
      </IonModal>
    </IonHeader>
  );
};
export default ToolBar;
