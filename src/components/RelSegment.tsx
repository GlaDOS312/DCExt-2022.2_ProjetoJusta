import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const RelSegment: React.FC<{
  selected: "credito" | "debito";
  onSelect: (value: "credito" | "debito") => void;
}> = (props) => {
  const segmentHandler = (event: CustomEvent) => {
    props.onSelect(event.detail.value);
  };
  return (
    <IonSegment className="segment" value={props.selected} onIonChange={segmentHandler}>
      <IonSegmentButton value="credito">
        <IonLabel>Crétido</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="debito">
        <IonLabel>Débito</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default RelSegment;