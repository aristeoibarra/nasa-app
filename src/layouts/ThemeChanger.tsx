import React, { useState, useEffect } from "react";
import {
  moonOutline,
  moonSharp,
  sunnyOutline,
  sunnySharp,
} from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";

export default function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  };

  return (
    <IonButton fill="clear" onClick={toggleTheme}>
      <IonIcon
        slot="icon-only"
        md={theme === "light" ? moonSharp : sunnySharp}
        ios={theme === "light" ? moonOutline : sunnyOutline}
      />
    </IonButton>
  );
}
