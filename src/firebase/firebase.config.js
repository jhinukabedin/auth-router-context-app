// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldgdcK2AWWuHM_TbTgrAsj_eH5gmBXVw",
  authDomain: "my-eshop-app.firebaseapp.com",
  projectId: "my-eshop-app",
  storageBucket: "my-eshop-app.appspot.com",
  messagingSenderId: "999881444231",
  appId: "1:999881444231:web:eab6430a135e8337c9a122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;