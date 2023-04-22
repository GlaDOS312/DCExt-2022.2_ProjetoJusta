import React from "react";
import { useHistory } from "react-router";
import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { returnUpBackOutline} from "ionicons/icons";
import "../theme/app.css";



const ReturnToolbar: React.FC<{
    title: string|undefined;
}> = props => {
  const history = useHistory();
  
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">{props.title}</IonTitle>
            <IonButton onClick={() => history.push("/TelaPrincipal")} fill="clear">
              <IonIcon icon={returnUpBackOutline}></IonIcon>
            </IonButton>
        </IonToolbar>
      </IonHeader>
    );
};
export default ReturnToolbar;
