import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Profilepage.css';
const UserProfile = () => {
    return (
        <IonPage>
            <IonContent>
                <IonButton className='Update-btn'> Update </IonButton>
            </IonContent>
        </IonPage>
    )
};

export default UserProfile;