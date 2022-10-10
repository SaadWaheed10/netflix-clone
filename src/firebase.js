import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTbmricFXBFUF-6MuuQrVmck6oDVz_OC0",
  authDomain: "netflix-clone-55943.firebaseapp.com",
  projectId: "netflix-clone-55943",
  storageBucket: "netflix-clone-55943.appspot.com",
  messagingSenderId: "130650506906",
  appId: "1:130650506906:web:f7948798b09e04daf80123",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
// export default { db };
