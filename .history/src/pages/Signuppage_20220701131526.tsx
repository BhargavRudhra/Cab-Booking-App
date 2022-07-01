import { IonContent, IonPage, IonTitle,IonInput,IonButton,IonText } from '@ionic/react';
import './Signuppage.css';
import mancar from '../assets/man-car.png';

const Loginpage: React.FC = () =>{
    
    return (
        <IonPage>
           <IonContent className='main-page-content'>
                <img className='mancar' src={mancar} alt='' />
                <IonTitle className='signup'>SignUp</IonTitle>
                <IonInput  type='text' placeholder='User Name' className='signup-uname-input'></IonInput>
                <IonInput  type='number' placeholder='Mobile Number' className='signup-number-input'></IonInput>
                <IonInput  type='email' placeholder='Email' className='signup-email-input'></IonInput>
                <IonInput  type='password' placeholder='Password' className='signup-password-input'></IonInput>
                <IonButton type='submit' className='signup-submit-button' color='black'> SignUp </IonButton>
                <IonText className='signup-text'> Have an account <a href='SignUp'>Login</a> here </IonText>
            </IonContent> 
        </IonPage>
    )
};

export default Loginpage;