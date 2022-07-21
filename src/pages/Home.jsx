import {
  IonButton,
  IonCardContent,
  IonContent,
  IonPage,
  IonImg,
  IonGrid,
  IonRow
} from "@ionic/react";
import "./Home.css";
import maincar from "../assets/maincar.png";
import TaxiVIP from "../assets/TaxiVIP.png";
const Home = () => {
  return (
    <IonPage>
      <IonContent className="home-main-content">
        <IonGrid className="home-main-grid">
          <IonRow className="home-img-row">
            <IonImg src={TaxiVIP} className="taxivip" />
            <IonImg src={maincar} className="maincar-img" />
          </IonRow>
          <IonRow className="home-button-row">
            <IonButton
              className="mob-num-email-btn"
              color="black"
              href="/Loginpage"
            >
              Get Started
            </IonButton>
          </IonRow>
          <IonRow className="copyrights-row">
            <IonCardContent className="copyrights">
              {" "}
              Copyright @ TaxiVIP cabs 21{" "}
            </IonCardContent>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
