import { IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className='main-card'>
          <IonCard className='mob-num-email'></IonCard>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
