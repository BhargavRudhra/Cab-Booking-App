import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
// import '../theme/variable.css';
import image from '../assets/fac.png';
import insta from '../assets/insta.png';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className='main-card'>
            <IonButton className='mob-num-email-btn' color="black"> Mobile Number or Email</IonButton>
            <IonButton className='facebook-btn' color="light"><img src={image} alt='' />Facebook</IonButton>
            <IonButton className='insta-btn' color="light"><img src={insta} alt='' />Inst</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;