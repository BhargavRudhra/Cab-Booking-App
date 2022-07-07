import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./Settings.css";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent className="setting-main-content" fullscreen>
                <IonRow className="settings-row">
                <IonCol className=""> Settings </IonCol>
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