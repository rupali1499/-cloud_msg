import React, { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './components/screens/Landingpage/LandingPage';
import Profile from './components/screens/profile/Profile';
import About from './components/screens/aboutPage/about';
import Cart from './components/screens/cart/Cart';
import ProductDetails from './components/screens/productDetails/ProductDetails';
import Text from './components/text/text';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Timer from './components/timer/Timer';
import Api from './components/api/Api';
// import RemoveElements from './redux1/RemoveElements';
import List from './dragAndDrop/List';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import firebase, { geTtokenn } from './firebase';
// import './firebase';
import './messaging_sw_init';



export const App = () => {

  // const [isTokenFound, setTokenFound] = useState(false);

  // function notifyMe() {

  //   if (!("Notification" in window)) {
  //     // Check if the browser supports notifications
  //     alert("This browser does not support desktop notification");
  //   } else if (Notification.permission === "granted") {
  //     geTtokenn(setTokenFound);
  //     // Check whether notification permissions have already been granted;
  //     // if so, create a notification
  //     const notification = new Notification("Hi there!");
  //     // …
  //   } else if (Notification.permission !== "denied") {
  //     // We need to ask the user for permission
  //     Notification.requestPermission().then((permission) => {
  //       // If the user accepts, let's create a notification
  //       if (permission === "granted") {
  //         const notification = new Notification("Hi there!");
  //         // …
  //       }
  //     });
  //   }

  //   // At last, if the user has denied notifications, and you
  //   // want to be respectful there is no need to bother them anymore.
  // }

  // useEffect(() => {
  //   notifyMe()
  //   console.log(isTokenFound, 'dfkjc')
  //   // geTtoken(t => console.log(t));
  // }, [isTokenFound])


  return (

    <>
      {/* <Timer /> */}
      {/* <Text /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={< About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product_details" element={<ProductDetails />} />

        </Routes>
      </BrowserRouter> */}

      {/* <Api /> */}

      {/* <RemoveElements /> */}

      {/* <DndProvider backend={HTML5Backend}>
        <List />
      </DndProvider> */}
      <div>
        <p> push notification</p>
        {/* {isTokenFound &&
          "Notification permission enabled"}

        {!isTokenFound &&
          "Need notification permission"} */}
      </div>

    </>
  )
}


export default App;
