import "./Home.css";
import React from "react";
import {
  IonThumbnail,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";

export default function HomePage() {
  return (
    <div className="home">
      <IonThumbnail>
        <img src="/assets/images/NASA_logo.png" alt="a picture of a cat" />
      </IonThumbnail>
      <div className="home__description">
        <IonText>
          <strong>Nasa App</strong> is a simple app that uses the{" "}
          <a
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NASA API
          </a>{" "}
          to get the astronomy picture of the day, even tracker, near earth
          asteroids and mars rover photos.
        </IonText>

        <IonList lines="none" className="ion-margin">
          <IonItem>
            <IonLabel>APOD: Astronomy Picture of the Day</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Event Tracker: Get the next 10 events in the sky
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Near Earth Asteroids: Get the near earth asteroids
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Mars Rover Photos: Get the photos from the mars rover
            </IonLabel>
          </IonItem>
        </IonList>
      </div>
    </div>
  );
}
