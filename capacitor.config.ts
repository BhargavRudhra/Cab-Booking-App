import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cabbooking.app',
  appName: 'TaxiVIP',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
        launchShowDuration : 2000
    },
    GoogleAuth: {
      scopes: ["profile","email"],
      serverClientId: "835146067948-v1ebkvbelblqosgh6b0d4m12gddjs708.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    }
  }
};

export default config;
