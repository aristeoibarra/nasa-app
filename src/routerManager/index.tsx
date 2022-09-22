import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import MainLayout from "layouts/MainLayout";

import { Redirect, Route } from "react-router-dom";
import routes from "./routes";

export default function RouterManager() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <MainLayout>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={() => <route.component />}
            />
          ))}
        </MainLayout>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
