import { IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonPage, IonRow } from "@ionic/react";
import "./Settings.css";
import { settings, location } from "ionicons/icons";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent className="setting-main-content" fullscreen>
                <IonRow>
                <IonCol> Settings </IonCol>
                 </IonRow>
                <IonGrid className="setting-main-grid">
                    <IonRow className="setting-row">
                        Electric
                    </IonRow>
                    <IonRow className="setting-row">
                        <IonIcon className="settings-icon" icon={settings} size="large"/>
                         Your Rides </IonRow>
                    <IonRow className="setting-row"> Drive Bookings </IonRow>
                    <IonRow className="setting-row"> Payments </IonRow>
                    <IonRow className="setting-row"> Refer & Earn </IonRow>
                    <IonRow className="setting-row"> Support </IonRow>
                    <IonRow className="setting-row"> About </IonRow>
                    <IonRow className="setting-row"> Account </IonRow>
                    <IonRow className="setting-row"> Logout </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;