import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonText,
  IonImg,
  useIonRouter,
  IonGrid,
  IonRow,
  IonLabel,
  useIonToast,
  useIonAlert,
  IonLoading,
  useIonLoading
} from "@ionic/react";
import "./Signuppage.css";
import mancar from "../assets/man-car.png";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { toastController } from "@ionic/core";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";

const SignUp = () => {
  const [present] = useIonToast();
  async function handleButtonClick(message) {
    present({
      color: "black",
      duration: 3000,
      position: "bottom",
      message: message,
      showCloseButton: true,
      mode:"ios",
    });
  }
  const [presentAlert] = useIonAlert();
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [presentloading,dismissloading] = useIonLoading();
  const { createUser, currentUser } = UserAuth();
  const router = useIonRouter();
  const clearInputs = () => {
        setUsername("");
        setMobile("");
        setEmail("");
        setPassword("");
  };
  const Loginin = async () =>{
    clearInputs();
    router.push("/Loginpage");
  };
  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "ios",
      color: "darkgreen",
    });
  }

  const handleSubmit = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (
      username == null ||
      username === "" ){
        handleButtonClick("Please enter User Name");
      } else if(
      mobile == null ||
      mobile === "" ){
        handleButtonClick("Please enter Mobile Number");
      }else if(
      email == null ||
      email === ""){
        handleButtonClick("Please enter Email");
      } else if (
      password == null ||
      password === ""
    ) {
      handleButtonClick("Please enter Password");
    } else if (password.length < 5) {
      handleButtonClick("Password must have minimum 5 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter valid email");
    } else {
      //   e.preventDefault()
      //   setError('')
      try {
        presentloading({
          message : 'Loggingin!..',
          duration : 2000,
          spinner : "lines-small",
        })
        await createUser(email, password);
        dismissloading();
        handleButtonClick("User Added");
        clearInputs();
        router.push("/Loginpage");
      } catch (e) {
        dismissloading();
        setError(e.message);
        handleAlert(e.message);
        clearInputs();
      }
    }
  };
  return (
    <IonPage>
      <IonContent className="signup-main-page-content">
        <IonGrid className="signup-main-grid">
          <IonRow className="mancar-row">
            <IonImg src={mancar} className="mancar" />
          </IonRow>
          <IonRow className="signup-title-row">
            <IonLabel className="signup">SignUp</IonLabel>
            {/* </IonRow>
        <IonRow className="signup-input-row"> */}
            <IonInput
              onIonChange={(e) => setUsername(e.detail.value)}
              value={username}
              type="text"
              placeholder="User Name"
              className="signup-uname-input"
            ></IonInput>
            <IonInput
              onIonChange={(e) => setMobile(e.detail.value)}
              value={mobile}
              type="number"
              placeholder="Mobile Number"
              className="signup-number-input"
            ></IonInput>
            <IonInput
              onIonChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="signup-email-input"
            ></IonInput>
            <IonInput
              onIonChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="signup-password-input"
            ></IonInput>
          </IonRow>
          <IonRow className="signup-btn-row">
          <IonButton
              type="submit"
              className="signup-submit-button"
              color="brown"
              onClick={handleSubmit}
            >
              SignUp{" "}
            </IonButton>
          </IonRow>
          <IonRow className="signup-text-row">
            <IonText className="signup-text">
              {" "}
              Have an account ? <IonText className="Login-text" onClick={Loginin}>Login</IonText> here
            </IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
