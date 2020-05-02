import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const BMIController: React.FC<{
  selected: "1" | "2";
  onSelected: (value: "1" | "2") => void;
}> = (props) => {
  const inputChangeHanlder = (e: CustomEvent) => {
    props.onSelected(e.detail.value);
  };

  return (
    <IonSegment value={props.selected} onIonChange={inputChangeHanlder}>
      <IonSegmentButton value="1">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="2">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default BMIController;
