import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCC2MBbXjlYNpJg3JMGQZvG0WzLTcKRlec",
  authDomain: "first-cloud-messaging-b5760.firebaseapp.com",
  projectId: "first-cloud-messaging-b5760",
  storageBucket: "first-cloud-messaging-b5760.appspot.com",
  messagingSenderId: "39743451272",
  appId: "1:39743451272:web:57bc3ba20060fe57116f3d",
  measurementId: "G-SQ3KQZTJ4K"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);

      getToken(messaging, {
        vapidKey:
          "BPFqvsevg9x5b0FULb_6TA_aYUMCgOgg7Bu6n7aItpUL-RJKPQXmNKDiRuu2RYCPz8ldLOIsj9Vo_0YOpENEQLg",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      }).catch(err => console.log(err, 'gdf'))
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();