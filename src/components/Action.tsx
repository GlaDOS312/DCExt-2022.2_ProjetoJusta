import * as React from "react";
import { useHistory } from "react-router";
import { LocationDescriptor } from "history";
import { IonButton, IonIcon, IonItem} from "@ionic/react";


const Action: React.FC<{
  icon: string | undefined;
  name: string | undefined;
  route: LocationDescriptor;
}> = props => {
  const history = useHistory();
  
  return (
    <IonItem className="ion-item">
      <IonButton
        onClick={() => history.push(props.route)}
        className="block"
        fill="clear"
      >
        <IonIcon slot="start" icon={props.icon}></IonIcon>
        {props.name}
      </IonButton>
    </IonItem>
  );
};
export default Action;
