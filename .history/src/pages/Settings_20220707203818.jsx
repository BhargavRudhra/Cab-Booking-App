import { IonCol, IonContent, IonGrid, IonPage,IonIcon, IonRow } from "@ionic/react";
import "./Settings.css";
import { arrowBack } from "ionicons/icons";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent className="setting-main-content" fullscreen>
                <IonRow className="settings-row">
                <IonIcon
                className="settings-icon"
                icon={arrowBack}
                size="large"
                // onClick={handleSettings}
              />
                <IonCol className="settings-col"> Settings </IonCol>
                 </IonRow>
                <IonGrid className="setting-main-grid">
                    <IonRow className="setting-grid-row">
                        Electric
                    </IonRow>
                    <IonRow className="setting-grid-row">Your Rides </IonRow>
                    <IonRow className="setting-grid-row"> Drive Bookings </IonRow>
                    <IonRow className="setting-grid-row"> Payments </IonRow>
                    <IonRow className="setting-grid-row"> Refer & Earn </IonRow>
                    <IonRow className="setting-grid-row"> Support </IonRow>
                    <IonRow className="setting-grid-row"> About </IonRow>
                    <IonRow className="setting-grid-row"> Account </IonRow>
                    <IonRow className="setting-grid-row"> Logout </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;