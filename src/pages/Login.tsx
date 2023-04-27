import {
  IonInput,
  IonItem,
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import ReturnToolbar from "../components/returnToolbar";
import justalogo from './justalogo.jpeg';


const Login: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  const [error,setError] = useState<string>();
  
  const loginRef = useRef<HTMLIonInputElement>(null);
  const senhaRef= useRef<HTMLIonInputElement>(null);
  
  const entrar = () => {
    let login = loginRef.current!.value
    let senha = senhaRef.current!.value
    NewUser = {
      login:{login},
      senha:{senha},
    }
  }
  
  return (
    <div className="estilo">
      <IonPage>
         <ReturnToolbar title={"Login"}/>

        <IonContent>
          <div className="container">
            <IonItem>
              <IonInput
                label="E-mail"
                type="email"
                placeholder="Digite o seu e-mail"
                ref={loginRef}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                label="Digite a sua senha"
                type="password"
                ref={senhaRef}
              ></IonInput>
            </IonItem>

            <IonButton
              shape="round"
              className="botaobranco"
              onClick={entrar}
            >
              Entrar
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};
export default Login;
