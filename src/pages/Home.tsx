import { IonButton, IonIcon, IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import { chatbubble } from "ionicons/icons";

import Justalogo from "./Justalogo.jpeg";

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <img className="img" src={Justalogo} alt="logo Justa" />
          <IonButton
            shape="round"
            className="botaobranco"
            onClick={() => history.push("/login")}
          >
            Login
          </IonButton>

          <IonButton
            shape="round"
            className="botaoazul"
            onClick={() => history.push("/abrirconta")}
          >
            Abrir conta
          </IonButton>
        </div>

        <IonIcon className="icone" icon={chatbubble}></IonIcon>
      </IonContent>
    </IonPage>
  );
};
export default Home;
