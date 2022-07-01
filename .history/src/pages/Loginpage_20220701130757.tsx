import { IonContent, IonTitle, IonPage, IonButton,IonInput,IonText } from '@ionic/react';
import './Loginpage.css';
import maincar from '../assets/maincar.png';


const Loginpage: React.FC = () =>{
    
    return (
        <IonPage>
           <IonContent className='main-page-content'>
    <img className='mancar' src={mancar} alt='' />
    <IonTitle className='Login'>Login</IonTitle>
    <IonInput  type='text' placeholder='User Name' className='login-uname-input'></IonInput>
    <IonInput  type='password' placeholder='Password' className='login-password-input'></IonInput>
    <IonButton type='submit' className='login-submit-button' color='black'> Login </IonButton>
    <IonText className='login-text'> If you don't have account <a href='SignUp'>SinUp</a> here </IonText>
  </IonContent>
        </IonPage>
    )
};

export default Loginpage;