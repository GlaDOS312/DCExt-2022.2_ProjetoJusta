import * as React from "react";
import {IonTitle } from "@ionic/react";

const SaldoVendas: React.FC = () => {
  return (
    <div className="saldo">
      <IonTitle>Saldo da Conta</IonTitle>
      <p>R$ 0,00</p>
    </div>
  );
};
export default SaldoVendas;
