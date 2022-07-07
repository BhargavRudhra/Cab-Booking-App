import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRow } from "@ionic/react";
import "./Settings.css";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent className="setting-main-content" fullscreen>
                <IonRow>
                <IonCol> Settings </IonCol>
                 </IonRow>
                <IonGrid className="setting-main-grid">
                    <IonRow className="setting-main-card-row">
                        Electric
                    </IonRow>
                    <IonRow> Your Rides </IonRow>
                    <IonRow> Drive Bookings </IonRow>
                    <IonRow> Payments </IonRow>
                    <IonRow> Refer & Earn </IonRow>
                    <IonRow> Logout </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;