importScripts("https://www.gstastic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstastic.com/firebasejs/9.0.0/firebase-messaging.js");
firebase.intializeApp({
  messagingSenderId: 39743451272
})

const firebaseConfig = {
  apiKey: "AIzaSyCC2MBbXjlYNpJg3JMGQZvG0WzLTcKRlec",
  authDomain: "first-cloud-messaging-b5760.firebaseapp.com",
  projectId: "first-cloud-messaging-b5760",
  storageBucket: "first-cloud-messaging-b5760.appspot.com",
  messagingSenderId: "39743451272",
  appId: "1:39743451272:web:57bc3ba20060fe57116f3d",
  measurementId: "G-SQ3KQZTJ4K"
};

// const initmessaging = firebase.messaging();
// const messaging = firebase.messaging();

firebase.initializeApp(firebaseConfig);

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

