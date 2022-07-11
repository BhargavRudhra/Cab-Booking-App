import {
  IonButton,
  IonCardContent,
  IonContent,
  IonPage,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  useIonRouter
} from "@ionic/react";
// import Loginpage from './Loginpage';
import "./Home.css";
// import '../theme/variable.css';
import image from "../assets/fac.png";
import insta from "../assets/insta.png";
import maincar from "../assets/maincar.png";
import TaxiVIP from "../assets/TaxiVIP.png";
import { UserAuth } from "../context/AuthContext";
const Home = () => {
  // const router = useIonRouter();
  // const {facebookSignIn} = UserAuth();
  // const handleFacebookSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await facebookSignIn();
  //     router.push("/Landingpage");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
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
          {/* <IonRow className="img-btn-row">
            <IonCol className="img-col">
              <IonButton className="facebook-btn" color="lightwhite" onClick={handleFacebookSignIn}>
                <IonImg className="face-img" src={image} />
                Facebook
              </IonButton>
            </IonCol>
            <IonCol className="img-col">
              <IonButton className="insta-btn" color="lightwhite">
                <IonImg className="insta-img" src={insta} />
                Instagram
              </IonButton>
            </IonCol>
          </IonRow> */}
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
