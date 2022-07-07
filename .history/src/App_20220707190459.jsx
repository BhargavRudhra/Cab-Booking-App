import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage'
import Landingpage from './pages/Landingpage';
import Settings from './pages/Settings'
import Updateapp from './pages/Appupdate'
import { AuthContextProvider } from "./context/AuthContext";
import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App = () => (
  <IonApp>
    <AuthContextProvider>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/loginpage">
          <Loginpage />
        </Route>
        <Route exact path="/signuppage">
          <Signuppage />
        </Route>
        <Route exact path="/landingpage">
          <Landingpage />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </AuthContextProvider>
  </IonApp>
);

export default App;
