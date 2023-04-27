import { IonButton, IonCol, IonContent, IonLabel, IonPage, IonRow} from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";

const CadSucess: React.FC = () => {
    const history=useHistory();
    const location = useLocation();
    const nome = new URLSearchParams(location.search).get("nome");
    const sobrenome = new URLSearchParams(location.search).get("sobrenome");
    
    
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <div className="sucess">
              <IonLabel>
                <h1 className="ion-text-center">
                  Conta Registrada com sucesso!
                </h1>
              </IonLabel>
              <IonLabel>
                <h2 className="ion-text-center">
                    Bem-Vindo(a), {nome} {sobrenome} 
                </h2>
              </IonLabel>
          </div>
          <IonRow>
            <IonCol className="ioncol">
                <IonButton className="btn" fill="clear" onClick={() => history.push("/TelaPrincipal")}>
                    Entrar no App
                </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
}
export default CadSucess;