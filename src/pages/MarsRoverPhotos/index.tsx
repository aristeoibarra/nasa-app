import "./MarsRoverPhotos.css";
import React from "react";
import { useMarsRoverPhotos } from "hooks";
import { Select } from "components";
import { IonCard, IonCardHeader, IonCardTitle, IonLoading } from "@ionic/react";

export default function MarsRoverPhotosPage() {
  const { marsRoverPhotosData, camera, setCamera, rover, setRover, loading } =
    useMarsRoverPhotos();

  return (
    <div>
      <div className="select-container">
        <Select
          width="45%"
          placeholder="Select Rover"
          value={rover}
          onChange={setRover}
          options={[
            { value: "Spirit", label: "Spirit" },
            { value: "Opportunity", label: "Opportunity" },
            { value: "Curiosity", label: "Curiosity" },
          ]}
        />
        <Select
          width="45%"
          placeholder="Select Camera"
          value={camera}
          onChange={setCamera}
          options={[
            { value: "navcam", label: "NAVCAM" },
            { value: "rhaz", label: "RHAZ" },
            { value: "fhaz", label: "FHAZ" },
          ]}
        />
      </div>
      {marsRoverPhotosData.photos && (
        <div className="mars-rover-photos-container">
          {marsRoverPhotosData.photos.map((photo) => (
            <div key={photo.id}>
              <img
                src={photo.img_src}
                alt={photo.camera.full_name}
                className="mars-rover-photo"
              />
              <p>
                <strong>Camera: </strong>
                {photo.camera.full_name}
              </p>
              <p>
                <strong>Rover: </strong>
                {photo.rover.name}
              </p>
            </div>
          ))}
        </div>
      )}
      <IonLoading isOpen={loading} message={"Please wait..."} />
      {loading === false && marsRoverPhotosData.photos?.length === 0 && (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              No photos found
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
      )}
    </div>
  );
}
