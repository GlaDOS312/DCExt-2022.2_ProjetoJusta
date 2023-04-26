import { IonRouterOutlet, IonCol, IonInput, IonItem, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonDatetime } from '@ionic/react';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import TelaPrincipal from './TelaPrincipal';
import { useHistory } from 'react-router';
import { RouteComponentProps} from 'react-router';
import '../theme/Estilo.css';


const Comecar: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  return (
    <div >
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Cadastrar dados</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="estilo">
        
        <IonCol>
          <IonItem className ="login">
            <IonInput label="Nome completo"  labelPlacement="stacked" placeholder="Digite seu nome completo"></IonInput>
          </IonItem>
        </IonCol>
      

        <IonDatetime  size="cover" presentation="date" preferWheel={true}></IonDatetime>


        <IonCol>
          <IonItem>
            <IonInput label="E-mail"  labelPlacement="stacked" placeholder="Digite o seu e-mail"></IonInput>
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonInput label="Telefone"  type="password" labelPlacement="stacked" placeholder="888-888-8888"></IonInput>
          </IonItem>
        </IonCol>


        <IonCol>
          <IonItem>
            <IonInput label="CNPJ"  labelPlacement="stacked" type="number" placeholder="000"></IonInput>
          </IonItem>
        </IonCol>


        <IonCol>
          <IonItem>
            <IonInput  type="password" labelPlacement="stacked" label="Rua" placeholder="Digite o nome de sua rua"></IonInput>
          </IonItem>
        </IonCol>

      
        <IonCol>
          <IonItem>
            <IonInput  type="password" labelPlacement="stacked" label="Bairro" placeholder="Digite o nome de seu bairro"></IonInput>
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonInput  type="password" labelPlacement="stacked" label="Cidade" placeholder="Digite o nome de sua cidade"></IonInput>
          </IonItem>
        </IonCol>


        <IonCol>
          <IonItem>
            <IonInput  type="password" labelPlacement="stacked" label="Estado" placeholder="Digite o nome de seu Estado"></IonInput>
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem>
            <IonInput  labelPlacement="stacked" label="CEP" type="number" placeholder="000"></IonInput>
          </IonItem>
        </IonCol>
       

        <IonCol>
          <IonItem>
            <IonInput label="Senha" type="password" labelPlacement="stacked" placeholder="Digite a sua senha"></IonInput>
          </IonItem>
        </IonCol>
     

        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/telaprincipal" component={TelaPrincipal} />
            <Redirect exact from="/" to="/login" />
          </IonRouterOutlet>
        </IonReactRouter>



        <IonButton  shape="round" className="botao" onClick={() => history.push('/telaprincipal')}>Enviar</IonButton>

        </div>
      </IonContent>
    </IonPage>
    </div>
  );
};
export default Comecar;

