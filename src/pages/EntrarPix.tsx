import { IonFab, IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import { RouteComponentProps} from 'react-router';
import './Estilo.css';

const EntrarPix: React.FC<RouteComponentProps> = () => {
    const history = useHistory();
    return (
      <div className = "estilo">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
            <IonBackButton defaultHref="/entrarpix" />
            </IonButtons>
            <IonTitle>EntrarPix</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className ="padrao">
  
  
  
  
  
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        </IonFab>
        </IonContent>
      </IonPage>
      </div>
    );
};

export default EntrarPix;