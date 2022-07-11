import {
  IonContent,
  IonLabel,
  IonPage,
  IonButton,
  IonInput,
  IonText,
  useIonRouter,
  IonImg,
  IonGrid,
  IonRow,
  useIonToast,
  IonSpinner,
  useIonAlert,
  IonCol
} from "@ionic/react";
import "./Loginpage.css";
import image from "../assets/fac.png";
import insta from "../assets/insta.png";
import mancar from "../assets/man-car.png";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
const Loginpage = () => {
  const { signin, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [present] = useIonToast();
  const [presentAlert] = useIonAlert();
  const {facebookSignIn} = UserAuth();
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      router.push("/Landingpage");
    } catch (error) {
      alert(error.message);
    }
  };
  async function handleButtonClick(message) {
    present({
      color: "black",
      duration: 2000,
      position: "bottom",
      message: message,
      showCloseButton: true,
      mode:"ios",
    });
  }
  async function handleAlert(message){
    presentAlert({
      header:"Alert",
      message:message,
      buttons :["OK"],
      mode:"md",
      animated:true,
      cssClass:'loginpage-alert',
      color:'light'
    });
  }
  const router = useIonRouter();
  const handleSubmit = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (email == null || email === ""){
      handleButtonClick("Please enter Email");
    } else if( password == null || password === "") {
      handleButtonClick("Please enter Password");
    } else if (password.length < 5) {
      handleButtonClick("Password must have minimum 5 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter proper email");
    } else {
      try {
        await signin(email, password);
        handleButtonClick("Successfully Login");
        setEmail("");
        setPassword("");
        router.push("/Landingpage");
      } catch (e) {
        setError(e.message);
        handleAlert(e.message);
        setEmail("");
        setPassword("");
      }
    }
  };
  return (
    <IonPage>
      <IonContent className="login-main-page-content">
        <IonGrid className="login-main-grid">
          <IonRow className="mancar-row">
            <IonImg src={mancar} className="mancar" />
          </IonRow>
          <IonRow className="Login-row">
            <IonLabel className="Login">Login</IonLabel>
          </IonRow>
          <IonRow className="login-input-row">
            <IonInput
              onIonChange={(e) => setEmail(e.detail.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="login-email-input"
            ></IonInput>
            <IonInput
              onIonChange={(e) => setPassword(e.detail.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="login-password-input"
            ></IonInput>
          </IonRow>
          <IonRow className="login-btn-row">
          <IonButton
              onClick={handleSubmit}
              type="submit"
              className="login-submit-button"
              color="brown"
            >
              Login
            </IonButton>
            {/* <IonSpinner name="lines" /> */}
          </IonRow>
          <IonRow className="login-text-row">
            <IonText className="login-text">
              If you don't have account? <a href="Signuppage">SignUp</a> here
            </IonText>
          </IonRow>
          <IonRow className="login-text-row">
            <IonText className="login-text">
              or
            </IonText>
          </IonRow>
          <IonRow className="img-btn-row">
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
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Loginpage;
