import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
// import '../theme/variable.css';
import image from '../assets/icon/fac.png';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className='main-card'>
            <IonButton className='mob-num-email-btn' color="black"> Mobile Number or Email</IonButton>
            <IonButton color="light"><img src={image} alt='' /></IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
{/* <img src={image} alt=''/> */}