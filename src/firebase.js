import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";



const firebaseConfig = {
  apiKey: "AIzaSyCC2MBbXjlYNpJg3JMGQZvG0WzLTcKRlec",
  authDomain: "first-cloud-messaging-b5760.firebaseapp.com",
  projectId: "first-cloud-messaging-b5760",
  storageBucket: "first-cloud-messaging-b5760.appspot.com",
  messagingSenderId: "39743451272",
  appId: "1:39743451272:web:57bc3ba20060fe57116f3d",
  measurementId: "G-SQ3KQZTJ4K"
};


const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);


export const geTtokenn = (setTokenFound) => {
  // console.log('dfs')
  return getToken(messaging, { vapidKey: "BPFqvsevg9x5b0FULb_6TA_aYUMCgOgg7Bu6n7aItpUL-RJKPQXmNKDiRuu2RYCPz8ldLOIsj9Vo_0YOpENEQLg" }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {

      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);

      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}
