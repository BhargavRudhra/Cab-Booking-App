import { IonContent, IonGrid, IonLabel, IonPage } from "@ionic/react";
import "./Settings.css";

const Settings = () => {
    
    return(
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonLabel>
                        Settings
                    </IonLabel>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Settings;