import firebase from "firebase/app";
import "firebase/firestore";
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDs5t7d03rsyIVs4WYFxeesEBJ7HWAIVBs",
    authDomain: "kudsi-group.firebaseapp.com",
    databaseURL: "https://kudsi-group.firebaseio.com",
    projectId: "kudsi-group",
    storageBucket: "kudsi-group.appspot.com",
    messagingSenderId: "416085688958",
    appId: "1:416085688958:web:b3f3b5e5e8b9dd7c910e2f",
    measurementId: "G-CL9CSP2PH6"
  };
  firebase.initializeApp(config);
}
const fireDb = firebase.firestore();

export { fireDb };
