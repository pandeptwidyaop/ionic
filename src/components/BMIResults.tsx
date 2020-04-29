import React from "react";
import { IonRow, IonCard, IonCol, IonCardContent } from "@ionic/react";

const BMIResults: React.FC<{ getBMI: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h2>{props.getBMI}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResults;
