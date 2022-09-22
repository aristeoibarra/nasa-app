import "./Apod.css";
import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonFooter,
  IonLoading,
} from "@ionic/react";
import { useApod } from "hooks";

export default function APODPage() {
  const { apodData, loading } = useApod();

  return (
    <div className="apod md">
      <IonCard className="apod__card">
        <IonCardHeader>
          <IonCardTitle className="ion-text-center ion-padding">
            {apodData.title} ({apodData.date})
          </IonCardTitle>
          <div className="apod__card__image">
            <img src={apodData.url} alt={apodData.title} />
          </div>
        </IonCardHeader>
        <IonCardContent>
          <IonText className="apod__card__text">
            <p>{apodData.explanation}</p>
          </IonText>
        </IonCardContent>
        <IonFooter className="ion-text-center ion-padding">
          <IonText>
            <a
              href="https://api.nasa.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by NASA API
            </a>
          </IonText>
        </IonFooter>
      </IonCard>
      <IonLoading isOpen={loading} message={"Please wait..."} />
    </div>
  );
}
