import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDkkkW10x3FI9W3soq-TUBs4HV6O0UZgBU",
  authDomain: "gremio-361306.firebaseapp.com",
  databaseURL: "https://gremio-361306-default-rtdb.firebaseio.com",
  projectId: "gremio-361306",
  storageBucket: "gremio-361306.appspot.com",
  messagingSenderId: "835750519863",
  appId: "1:835750519863:web:f50c31f747d17475534bb2",
  measurementId: "G-TBYYJ1MTYM",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
getToken(messaging, {
  vapidKey:
    "BMGmMVgahNlqfVhW0kjMOoVG9bYMj4vgKRRxIsZaSL2Dhc1oAFaxxjGJJBvWVOmFhq5OXxeiB91WFCwj6wA0Scc",
}).then((currentToken) => {
  if (currentToken) {
    console.log("currentToken: ", currentToken);
  } else {
    console.log("Can not get token");
  }
});
