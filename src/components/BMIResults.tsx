import React from "react";
import { IonRow, IonCard, IonCol, IonCardContent } from "@ionic/react";

const BMIResults: React.FC<{ getBMI: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h3 className="ion-text-center"> Your Body Mass Index</h3>
            <h2
              className="ion-text-center"
              style={{ fontSize: "50px", marginTop: "40px" }}
            >
              {props.getBMI.toFixed(2)}
            </h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResults;
