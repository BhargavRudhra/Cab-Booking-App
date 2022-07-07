import {
  IonCard,
  IonLabel,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonSearchbar,
  useIonRouter,
  IonRow,
  IonIcon,
  IonCol,
  IonButton,
  IonText,
} from "@ionic/react";
import { settings, location } from "ionicons/icons";
import "./Landingpage.css";
import React, { useState } from "react";
import map from "../assets/map.png";
import Dashboardcar from "../assets/Dashboard-car.png";
import auto from "../assets/auto.png";
import bike from "../assets/Bike.png";
import travelpic from "../assets/travelpic.png";
import { UserAuth } from "../context/AuthContext";
// import { toastController } from "@ionic/core";

const Landingpage = () => {
  const { logout } = UserAuth();
  const router = useIonRouter();
  const handleSettings = async () => {
    router.push("/Settings");
  };
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/Loginpage");
      alert("Successfully Logout");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <IonPage>
      <IonContent className="landingpage-main-content">
        <IonGrid className="landingpage-main-grid">
          <IonRow className="landingpage-img-row">
            <IonImg src={map} className="map-img" />
            <IonCard className="landpage-pick-card">
              <IonSearchbar
                className="pickup-search"
                placeholder="Your Location"
                color="white"
              ></IonSearchbar>
              <IonIcon
                className="settings-icon"
                icon={settings}
                size="large"
                routerLink="/Settings"
              />
            </IonCard>
          </IonRow>
          <IonRow className="landingpage-booking-vehicles">
            <IonCol className="landingpage-dashboard-col">
              <IonImg src={Dashboardcar} className="dashboard-img" />
              <IonLabel className="car-vehicle-name">Car</IonLabel>
            </IonCol>
            <IonCol className="landingpage-auto-img-col">
              <IonImg src={auto} className="auto-img" />
              <IonLabel className="auto-vehicle-name">Auto</IonLabel>
            </IonCol>
            <IonCol className="landingpage-bike-img-col">
              <IonImg src={bike} className="bike-img" />
              <IonLabel className="bike-vehicle-name">Bike</IonLabel>
            </IonCol>
            <IonCol className="landingpage-dashboard-img2-col">
              <IonImg src={Dashboardcar} className="dashboard-img2" />
              <IonLabel className="rental-vehicle-name">Rental</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="landingpage-destination-card-row">
            <IonCard className="landpage-main-card">
              <IonSearchbar
                className="landingpage-destination-search"
                placeholder="Destination"
                color="white"
              ></IonSearchbar>
              <IonText className="location1">
                {" "}
                <IonIcon className="map-icon" icon={location} size="small" />
                Hi-tech city Cyber Towers...
              </IonText>
              <IonText className="location2">
                {" "}
                <IonIcon className="map-icon" icon={location} size="small" />
                Jubilee hills Peddhamma Temple...
              </IonText>
              <IonText className="location3">
                {" "}
                <IonIcon className="map-icon" icon={location} size="small" />
                KBHP Near Foram Mall...
              </IonText>
              <IonText className="location4">
                {" "}
                <IonIcon className="map-icon" icon={location} size="small" />
                Madhapur Durgam Cheruvu...
              </IonText>
            </IonCard>
          </IonRow>
          <IonRow className="landingpage-image-card-row">
            <IonCard className="image-card">
              <IonImg src={travelpic} className="travel-pic" />
            </IonCard>
          </IonRow>
          <IonRow className="logout-btn-row">
            <IonButton className="logout-btn" color="black" onClick={handleLogout}>Logout</IonButton>
            <IonButton className="logout-bt" color="black" href="/Settings">Settings</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Landingpage;
