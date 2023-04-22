/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "./theme/variables.css";
import "./theme/app.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { IonApp,IonRouterOutlet,setupIonicReact} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

/*Todas as Páginas */
import TelaPrincipal from "./pages/TelaPrincipal";
import AreaPix from "./pages/pixPages/AreaPix";
import TransfBanc from "./pages/transfPages/TransfBanc";
import TransfPix from "./pages/pixPages/TransfPix";
import OpcoesBoleto from "./pages/boletoPages/OpcoesBoleto";
import CartaoBoleto from "./pages/boletoPages/CartaoBoleto";
import UserConfig from "./pages/userPages/UserConfig";
import Recarga from "./pages/recargaPages/Recarga";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/TelaPrincipal" component={TelaPrincipal} />
          <Route path="/AreaPix" component={AreaPix} />
          <Route path="/TransfPix" component={TransfPix} />
          <Route path="/TransfBanc" component={TransfBanc} />
          <Route path="/OpcoesBoleto" component={OpcoesBoleto} />
          <Route path="/CartaoBoleto" component={CartaoBoleto} />
          <Route path="/UserConfig" component={UserConfig} />
          <Route path="/Recarga" component={Recarga} />
          <Redirect exact from="/" to="/TelaPrincipal" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
