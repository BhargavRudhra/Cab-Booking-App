import { IonCard, IonContent, IonImg, IonPage, IonSearchbar } from '@ionic/react';
import './Landingpage.css';
import React, { useState } from 'react';
import map from '../assets/map.png'


const Landingpage: React.FC = () =>{
    const [searchText, setSearchText] = useState('');

    return (
        <IonPage>
            <IonContent>
            <IonImg src={map} className='map-img' />
           <IonCard className='landpage-main-card'>
           <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            </IonCard> 
            </IonContent>
        </IonPage>
    )
};

export default Landingpage;