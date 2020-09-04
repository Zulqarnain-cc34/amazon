import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdqiREk6NFM9sVEVi66tGPb7DQwfV_MQ8",
  authDomain: "fir-7e852.firebaseapp.com",
  databaseURL: "https://fir-7e852.firebaseio.com",
  projectId: "fir-7e852",
  storageBucket: "fir-7e852.appspot.com",
  messagingSenderId: "722127699366",
  appId: "1:722127699366:web:f22b1f784708c337f72367",
  measurementId: "G-5GZD9KYBE5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
