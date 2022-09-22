import "./NearEarthAsteroids.css";
import React from "react";
import { useNearEarthAsteroids } from "hooks";
import { IonCol, IonGrid, IonRow, IonLoading } from "@ionic/react";

export default function NearEarthAsteroidsPage() {
  const { asteroidsData, loading } = useNearEarthAsteroids();
  return (
    <IonGrid>
      <h1>Near Earth Asteroids</h1>
      <IonRow className="table-header">
        <IonCol size="4">Name</IonCol>
        <IonCol size="4">Distance</IonCol>
        <IonCol size="4">Velocity</IonCol>
      </IonRow>

      {asteroidsData.map((asteroid) => (
        <IonRow key={asteroid.id} className="table-row">
          <IonCol size="4" className="table-cell">
            {asteroid.name}
          </IonCol>
          <IonCol size="4" className="table-cell">
            {asteroid.close_approach_data[0].miss_distance.kilometers}
          </IonCol>
          <IonCol size="4" className="table-cell">
            {
              asteroid.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            }
          </IonCol>
        </IonRow>
      ))}
      <IonLoading isOpen={loading} message={"Please wait..."} />
      {loading === false && asteroidsData.length === 0 && (
        <IonRow className="table-row">
          <IonCol size="12" className="table-cell">
            <p>No data found</p>
          </IonCol>
        </IonRow>
      )}
    </IonGrid>
  );
}
