import React, { useRef, useState } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonCard,
  IonCardContent,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

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

/* Theme variables */
import "./theme/variables.css";

import BMIController from "./components/BMIController";

const App: React.FC = () => {
  const [getBMI, setBMI] = useState<number>(0);

  const heightInput = useRef<HTMLIonInputElement>(null);
  const weighInput = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weighInput.current?.value;
    const enteredHeight = heightInput.current?.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi: number = +enteredHeight * +enteredWeight;

    setBMI(bmi);
  };

  const resetBMI = () => {
    heightInput.current!.value = "";
    weighInput.current!.value = "";
    setBMI(0);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput type="number" ref={heightInput}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput type="number" ref={weighInput}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BMIController
            onCalculate={calculateBMI}
            onReset={resetBMI}
          ></BMIController>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
