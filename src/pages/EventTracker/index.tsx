import React from "react";
import { useEventTracker } from "hooks";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonLoading,
} from "@ionic/react";
import { Select } from "components";

export default function EventTrackerPage() {
  const { categoriesData, category, setCategory, eventsData, loading } =
    useEventTracker();

  return (
    <div>
      <IonLoading isOpen={loading} message={"Please wait..."} />
      <Select
        placeholder="Select Category"
        value={category}
        onChange={setCategory}
        options={categoriesData?.categories?.map((category) => ({
          value: category.id,
          label: category.title,
        }))}
      />
      {eventsData?.events?.map((event) => (
        <IonCard key={event.id}>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              {event.title}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            {event.sources?.map((source) => (
              <IonText key={source.id}>
                <p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.url}
                  </a>
                </p>
              </IonText>
            ))}
          </IonCardContent>
        </IonCard>
      ))}
      <IonLoading isOpen={loading} message={"Please wait..."} />
      {loading === false && eventsData?.events?.length === 0 && (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              No Events Found
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
      )}
    </div>
  );
}
