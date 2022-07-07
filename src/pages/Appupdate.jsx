import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Appupdate.css';
import { AppUpdate } from '@robingenz/capacitor-app-update';
const UpdateApp = () => {

    const getCurrentAppVersion = async () => {
        const result = await AppUpdate.getAppUpdateInfo();
        return result.currentVersion;
      };
      
    //   const getAvailableAppVersion = async () => {
    //     const result = await AppUpdate.getAppUpdateInfo();
    //     return result.availableVersion;
    //   };
      
    //   const openAppStore = async () => {
    //     await AppUpdate.openAppStore();
    //   };
      
    //   const performImmediateUpdate = async () => {
    //     const result = await AppUpdate.getAppUpdateInfo();
    //     if (result.updateAvailability !== AppUpdateAvailability.UPDATE_AVAILABLE) {
    //       return;
    //     }
    //     if (result.immediateUpdateAllowed) {
    //       await AppUpdate.performImmediateUpdate();
    //     }
    //   };
      
    //   const startFlexibleUpdate = async () => {
    //     const result = await AppUpdate.getAppUpdateInfo();
    //     if (result.updateAvailability !== AppUpdateAvailability.UPDATE_AVAILABLE) {
    //       return;
    //     }
    //     if (result.flexibleUpdateAllowed) {
    //       await AppUpdate.startFlexibleUpdate();
    //     }
    //   };
      
    //   const completeFlexibleUpdate = async () => {
    //     await AppUpdate.completeFlexibleUpdate();
    //   };

    return (
        <IonPage>
            <IonContent>
                <IonButton className='Update-btn' onClick={getCurrentAppVersion}> Update </IonButton>
            </IonContent>
        </IonPage>
    )
};

export default UpdateApp;