import * as React from "react";
import { useHistory } from "react-router";
import { LocationDescriptor } from "history";
import {
  IonButton,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

const ReturnToolbar: React.FC<{
  title: string | undefined;
  route: LocationDescriptor;
}> = (props) => {
  const history = useHistory();

  return (
      <IonToolbar>
        <IonTitle className="title">{props.title}</IonTitle>
        <IonButton onClick={() => history.push(props.route)} fill="clear">
          <IonIcon icon={arrowBackOutline}></IonIcon>
        </IonButton>
      </IonToolbar>
  );
};
export default ReturnToolbar;
