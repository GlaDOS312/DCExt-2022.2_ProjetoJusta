import { IonPage, IonContent, IonList, IonRouterOutlet } from "@ionic/react";

import {logInOutline, shield} from "ionicons/icons";

import Action from "../../components/Action";
import ReturnToolbar from "../../components/returnToolbar";

const UserConfig: React.FC = () => {
  return (
    <IonPage>
      <ReturnToolbar title={"Configurações do Usuário"} route={"./TelaPrincipal"}/>
      <IonContent>
        <IonList>
          <Action
            route={"./TelaPrincipal"}
            icon={logInOutline}
            name={"Aterar Login"}
          />
          <Action
            route={"./TelaPrincipal"}
            icon={shield}
            name={"Alterar Senha"}
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default UserConfig;
