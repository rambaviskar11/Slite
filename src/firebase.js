import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_y72Ll7vaTz6GKT36G3X5_Mn9xVaTPZA",
  authDomain: "slite-64d2e.firebaseapp.com",
  projectId: "slite-64d2e",
  storageBucket: "slite-64d2e.appspot.com",
  messagingSenderId: "478496882427",
  appId: "1:478496882427:web:0dfbfd9e869ec18dddfa5e",
  measurementId: "G-YCTWXD499M"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };