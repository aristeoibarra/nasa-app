import React from "react";
import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";

interface IOption {
  value: string;
  label: string;
}

interface SelectProps {
  width?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  options: IOption[];
}

export default function Select(props: SelectProps) {
  return (
    <IonList style={{ width: props.width }}>
      <IonItem>
        <IonSelect
          placeholder={props.placeholder}
          style={{ width: "100%" }}
          value={props.value}
          onIonChange={(e) => props.onChange(e.detail.value)}
        >
          {props?.options?.map((option) => (
            <IonSelectOption key={option.value} value={option.value}>
              {option.label}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
