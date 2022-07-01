import { IonContent, IonCard, IonPage, IonButton,IonCardContent } from '@ionic/react';
import './Loginpage.css';


const Loginpage: React.FC = () =>{
    
    return (
        <IonPage>
           <IonContent>
               <img className='taxivip' src={TaxiVIP} alt='' />
               <img className='maincar-img' src={maincar} alt='' />
                <IonCard className='main-card'>
                   <IonButton className='mob-num-email-btn' color="black"> Mobile Number or Email</IonButton>
                     <IonButton className='facebook-btn' color="light"><img className='face-img' src={image} alt='' />Facebook</IonButton>
                     <IonButton className='insta-btn' color="light"><img className='insta-img' src={insta} alt='' />Instagram</IonButton>
                     <IonCardContent className='copyrights'> Copyright @ TaxiVIP cabs 21 </IonCardContent>
                </IonCard>
      </IonContent> 
        </IonPage>
    )
};

export default Loginpage;