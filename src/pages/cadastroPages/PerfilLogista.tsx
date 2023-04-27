import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption } from "@ionic/react";
import ReturnToolbar from "../../components/returnToolbar";
import { useRef, useState } from "react";
import { bronzeTable, ouroTable, prataTable } from "./Beneficios";
import { useHistory } from "react-router";

const PerfilLogista: React.FC = () => {
    const history= useHistory();
    const [error, setError] = useState<string>();
    const [perfil, setPerfil] = useState("Bronze");
    const rendaRef = useRef<HTMLIonInputElement>(null);

    const handleSubmit = () => {
        let renda = rendaRef.current!.value;

        if(!renda || !perfil){
            setError("Preencher corretamente antes de Continuar");
            return;
        }else if (+renda < 0) {
            setError("Renda Inválida");
            return
        }else if (+renda > 10000 && perfil === "Bronze") {
            setError("O valor é acima do perfil selecionado!");
            return;
        } else if (+renda > 29000 && perfil === "Prata") {
            setError("O valor é acima do perfil selecionado!");
            return;
        } else if (perfil === "Prata" && +renda < 10000) {
            setError("O valor está abaixo do perfil selecionado!");
            return;
        } else if (perfil === "Ouro" && +renda < 30000) {
            setError("O valor está abaixo do perfil selecionado!");
            return;
        }
        history.push("./CadSucess");
    }

    return (
      <IonPage>
        <ReturnToolbar title={"Perfil do Logista"} />
        <IonContent>
          <IonItem>
            <IonSelect
              onIonChange={(event: CustomEvent) =>
                setPerfil(event.detail.value)
              }
              interface="popover"
              placeholder="Selecione seu Perfil"
            >
              <IonSelectOption value="Bronze">Bronze</IonSelectOption>
              <IonSelectOption value="Prata">Prata</IonSelectOption>
              <IonSelectOption value="Ouro">Ouro</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Informe Sua Renda mensal:</IonLabel>
            <IonInput
              ref={rendaRef}
              placeholder="R$ 0,00"
              type="number"
            ></IonInput>
          </IonItem>

          <IonGrid className="my-table">
            {perfil === "Bronze"
              ? bronzeTable
              : perfil === "Prata"
              ? prataTable
              : ouroTable}
          </IonGrid>

          <IonCol className="ioncol">
            <IonButton className="btn" fill="clear" onClick={handleSubmit}>
              Escolher Esse Perfil
            </IonButton>
          </IonCol>

          <IonAlert
            isOpen={!!error}
            message={error}
            buttons={[
              {
                text: "OK",
                handler: () => {
                  setError(undefined);
                },
              },
            ]}
          />
        </IonContent>
      </IonPage>
    );
}
export default PerfilLogista;