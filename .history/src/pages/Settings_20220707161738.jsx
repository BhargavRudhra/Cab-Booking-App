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
                        <IonButton className="setting-logout-btn" color="lightwhite"> Logout</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;