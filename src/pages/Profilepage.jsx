import {
  IonContent,
  IonPage,
  IonCol,
  IonRow,
  useIonRouter,
  IonIcon,
  IonImg,
  IonAvatar
} from "@ionic/react";
import "./Profilepage.css";
import { arrowBack } from "ionicons/icons";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
// import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
const UserProfile = () => {
    const [email,setEmail] = useState();
    const{googleuser} = UserAuth();
    console.log(googleuser.email);
    console.log(googleuser.familyName);
    console.log(googleuser.imageUrl)
    const router = useIonRouter();
    const routeToSettingsPage = () => {
    router.push("/Settings");
    setEmail("");
  };
//   const result = GoogleAuth;
//   const email = result.email;
//   console.log(email);
  return (
    <IonPage>
      <IonContent>
        <IonRow className="profile-row">
          <IonCol>
            <IonIcon
              className="profile-arrow-back-icon"
              icon={arrowBack}
              size="large"
              onClick={routeToSettingsPage}
            />
          </IonCol>
          <IonCol className="profile-col"> Profile </IonCol>
        </IonRow>
        <IonAvatar className="profile-avthar"><IonImg className="profile-img" src={googleuser.imageUrl} /></IonAvatar>
        <IonRow className="username-row" > {googleuser.familyName}</IonRow>
        <IonRow className="useremail-row" value={email} onIonClick={(e) => setEmail(e.details.value)} > {googleuser.email} </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
