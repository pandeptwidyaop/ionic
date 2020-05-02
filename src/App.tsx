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
  IonAlert,
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
import BMIResults from "./components/BMIResults";
import BMIInput from "./components/BMIInput";

const App: React.FC = () => {
  const [getBMI, setBMI] = useState<number>(0);
  const [alert, setAlert] = useState<string>("");
  const [unit, setUnit] = useState<"1" | "2">("1");

  const heightInput = useRef<HTMLIonInputElement>(null);
  const weighInput = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weighInput.current?.value;
    const enteredHeight = heightInput.current?.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      enteredHeight <= 0 ||
      enteredWeight <= 0
    ) {
      setAlert("Ada yang salah.");
      return;
    }

    const weightFactor: number = unit == "1" ? 1 : 2.2;
    const heightFactor: number = unit == "1" ? 1 : 3.2;

    const height: number = +enteredHeight / heightFactor;
    const weight: number = +enteredWeight / weightFactor;

    const bmi: number = weight / (height * height);
    console.log(bmi);

    setBMI(bmi);
  };

  const resetBMI = () => {
    heightInput.current!.value = "";
    weighInput.current!.value = "";
    setBMI(0);
  };

  const selectUnit = (v: "1" | "2") => {
    setUnit(v);
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!alert}
        message={alert}
        onDidDismiss={() => {
          setAlert("");
        }}
        buttons={[
          {
            text: "OK",
            handler: () => {
              resetBMI();
            },
          },
        ]}
      ></IonAlert>
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
                <BMIInput selected={unit} onSelected={selectUnit}></BMIInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Your Height ({unit == "1" ? "m" : "ft"})
                  </IonLabel>
                  <IonInput type="number" ref={heightInput}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Your Weight ({unit == "1" ? "kg" : "lbs"})
                  </IonLabel>
                  <IonInput type="number" ref={weighInput}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BMIController
              onCalculate={calculateBMI}
              onReset={resetBMI}
            ></BMIController>
            <BMIResults getBMI={getBMI} />
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
