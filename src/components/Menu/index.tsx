import React from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import routes from "routerManager/routes";
import "./Menu.css";

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu
      contentId="main"
      type="overlay"
      style={{ "--border": ".5px solid #000" }}
    >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader className="ion-padding-bottom">Nasa App</IonListHeader>
          {routes.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.path ? "selected" : ""
                  }
                  routerLink={appPage.path}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
