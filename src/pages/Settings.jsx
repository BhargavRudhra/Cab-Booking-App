import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonIcon,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import "./Settings.css";
import { arrowBack } from "ionicons/icons";
import { UserAuth } from "../context/AuthContext";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
const Settings = () => {
  const { logout } = UserAuth();
  const router = useIonRouter();
  const handleArrowback = async () => {
    router.push("/Landingpage");
  };
  const routetoProfilepage = () => {
    router.push("/Profilepage");
  };
  const handleLogout = async () => {
    try {
      if (GoogleAuth.initialize()) {
        await GoogleAuth.signOut();
        router.push("/Loginpage");
        alert("Successfully Logout");
      } else {
        await logout();
        router.push("/Loginpage");
        alert("Successfully Logout");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <IonPage>
      <IonContent className="setting-main-content" fullscreen>
        <IonRow className="settings-row">
          <IonCol>
            <IonIcon
              className="arrow-back-icon"
              icon={arrowBack}
              size="large"
              onClick={handleArrowback}
            />
          </IonCol>
          <IonCol className="settings-col"> Settings </IonCol>
        </IonRow>
        <IonGrid className="setting-main-grid">
          <IonRow className="setting-grid-row" onClick={routetoProfilepage}> Profile </IonRow>
          <IonRow className="setting-grid-row"> Your Rides </IonRow>
          <IonRow className="setting-grid-row"> Drive Bookings </IonRow>
          <IonRow className="setting-grid-row"> Payments </IonRow>
          <IonRow className="setting-grid-row"> Refer & Earn </IonRow>
          <IonRow className="setting-grid-row"> Support </IonRow>
          <IonRow className="setting-grid-row"> About </IonRow>
          <IonRow className="setting-grid-row"> Electric </IonRow>
          <IonRow className="setting-grid-row" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
