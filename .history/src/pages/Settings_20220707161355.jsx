import { IonButton, IonCard, IonContent, IonGrid, IonLabel, IonPage, IonRow } from "@ionic/react";
import "./Settings.css";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent className="setting-main-content" fullscreen>
                <IonRow> Settings </IonRow>
                <IonGrid className="setting-main-grid">
                    <IonRow className="setting-main-card-row">
                        <IonCard className="setting-main-card">
                        <IonButton className="setting-logout-btn" color="lightwhite"> Logout</IonButton>
                        </IonCard>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;