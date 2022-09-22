import React from "react";
import "./MainLayout.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Menu } from "components";
import { useLocation } from "react-router-dom";
import { getRouteByPath } from "routerManager/routes";
import ThemeChanger from "./ThemeChanger";

interface MainLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  return (
    <IonSplitPane contentId="main">
      <Menu />
      <IonRouterOutlet id="main">
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
                <IonTitle>{getRouteByPath(location.pathname)?.title}</IonTitle>
              </IonButtons>
              <IonButtons slot="end">
                <ThemeChanger />
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <div className="container">{children}</div>
          </IonContent>
        </IonPage>
      </IonRouterOutlet>
    </IonSplitPane>
  );
}
