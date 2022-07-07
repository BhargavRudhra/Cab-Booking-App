import { IonButton, IonContent, IonGrid, IonLabel, IonPage, IonRow } from "@ionic/react";
import "./Settings.css";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow className="setting-logout-btn-row">
                        <IonButton className="setting-logout-btn" color="lightwhite"> Logout</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;