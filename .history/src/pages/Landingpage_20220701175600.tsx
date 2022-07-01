import { IonCard, IonInput, IonPage, IonSearchbar } from '@ionic/react';
import './Loginpage.css';
import React, { useState } from 'react';


const Landingpage: React.FC = () =>{
    const [searchText, setSearchText] = useState('');

    return (
        <IonPage>
           <IonCard className='landpage-main-card'>
           <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            <IonSearchbar></IonSearchbar>
            </IonCard> 
        </IonPage>
    )
};

export default Landingpage;