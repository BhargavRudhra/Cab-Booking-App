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
  useIonViewWillEnter,
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import { settings, location } from "ionicons/icons";
import "./Landingpage.css";
import { useState } from "react";
import map from "../assets/map.png";
import Dashboardcar from "../assets/Dashboard-car.png";
import auto from "../assets/auto.png";
import bike from "../assets/Bike.png";
import { imgdata } from "./dashboarddata";
const Landingpage = () => {
  const [dashdata, setDashdata] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const pushdashData = () => {
    const max = dashdata.length + 5;
    const min = max - 5;
    const newData = [];
    for (let i = min; i < max; i++) {
      imgdata[i].id = imgdata[i].id + i * i;
      newData.push(imgdata[i]);
    }
    setDashdata([...dashdata, ...newData]);
  };
  const loaddashData = (ev) => {
    console.log(dashdata.length);
    setTimeout(() => {
      pushdashData();
      console.log("Loaded data");
      ev.target.complete();
      if (dashdata.length === 30) {
        setInfiniteDisabled(true);
      }
    }, 1000);
  };
  useIonViewWillEnter(() => {
    pushdashData();
  });
  const router = useIonRouter();
  const handleSettings = async () => {
    router.push("/Settings");
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
                color="transperant"
              ></IonSearchbar>
              <IonIcon
                className="settings-icon"
                icon={settings}
                size="large"
                onClick={handleSettings}
              />
            </IonCard>
          </IonRow>
          <IonRow className="landingpage-booking-vehicles-row">
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
          {dashdata.map((Data) => {
            return (
              <IonRow className="landingpage-image-card-row" key={Data.id}>
                <IonCard className="image-card">
                  <IonImg src={Data.image} className="travel-pic" />
                </IonCard>
              </IonRow>
            );
          })}
          <IonInfiniteScroll
            onIonInfinite={loaddashData}
            threshold="100px"
            disabled={isInfiniteDisabled}
          >
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Loading more data..."
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Landingpage;
