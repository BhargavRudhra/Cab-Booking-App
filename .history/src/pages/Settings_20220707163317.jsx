import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRow } from "@ionic/react";
import "./Settings.css";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent className="setting-main-content" fullscreen>
                <IonRow >
                <IonCol> Settings </IonCol>
                 </IonRow>
                <IonGrid className="setting-main-grid">
                    <IonRow className="setting-row">
                        Electric
                    </IonRow>
                    <IonRow className="setting-row"> Your Rides </IonRow>
                    <IonRow className="setting-row"> Drive Bookings </IonRow>
                    <IonRow className="setting-row"> Payments </IonRow>
                    <IonRow className="setting-row"> Refer & Earn </IonRow>
                    <IonRow className="setting-row"> Logout </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;