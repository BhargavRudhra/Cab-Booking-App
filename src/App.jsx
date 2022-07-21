import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  isPlatform,
  setupIonicReact,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Landingpage from "./pages/Landingpage";
import Settings from "./pages/Settings";
import Updateapp from "./pages/Profilepage";
import { AuthContextProvider } from "./context/AuthContext";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";
import { useEffect, useState } from "react";
import { Browser } from "@capacitor/browser";
import { App as app } from "@capacitor/app";

setupIonicReact();

const App = () => {
  const [updateDetails, setUpdateDetails] = useState({});
  const [appVersion, setAppVersion] = useState("");

  const updateRef = doc(db, "TaxiVIP_app_config", "GBmeBS6sGV2YWmjUlDUy");
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  const handleToast = (msg) => {
    present({
      message: msg,
      position: "top",
      animated: true,
      duration: 2000,
      color: "brown",
      mode: "ios",
    });
  };
  const handleAlert = (msg, title, btn, appVersion) => {
    presentAlert({
      header: title,
      subHeader: `Version : ${appVersion}`,
      message: msg,
      buttons: [
        {
          text: btn,
          role: "Download",
          handler: async () => {
            handleToast("Download Clicked");
            await Browser.open({
              url: "https://play.google.com/store/apps/details?id=com.cabbooking.app",
            });
          },
        },
      ],
      backdropDismiss: true,
      translucent: true,
      animated: true,
      cssClass: "lp-sp-alert",
    });
  };
  const getAppInfo = async () => {
    let info = await app.getInfo();
    return info;
  };
  const getConfigData = async () => {
    const docSnap = await getDoc(updateRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", docSnap.data());
      setUpdateDetails(data.updateMsg);
      setAppVersion(data.current);
    } else {
      console.log("No such document!");
    }
  };
  const checkUpdate = async () => {
    try {
      if (isPlatform("android")) {
        const currentAppInfo = getAppInfo();
        if (appVersion > (await currentAppInfo).version) {
          const msg = updateDetails.msg;
          const title = updateDetails.title;
          const btn = updateDetails.btn;
          handleAlert(msg, title, btn, appVersion);
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    getConfigData();
    if (isPlatform("android")) {
      getAppInfo();
    }
  },);
  checkUpdate();
  return (
    <>
      <AuthContextProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/loginpage">
                <Loginpage />
              </Route>
              <Route exact path="/signuppage">
                <Signuppage />
              </Route>
              <Route exact path="/landingpage">
                <Landingpage />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/appupdate">
                <Updateapp />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </AuthContextProvider>
    </>
  );
};

export default App;
