import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGAcRit8fE8ALP0w6KaltGdby7721tQiA",
    authDomain: "music-release-database.firebaseapp.com",
    projectId: "music-release-database",
    storageBucket: "music-release-database.appspot.com",
    messagingSenderId: "569925143677",
    appId: "1:569925143677:web:e076b3f76c2c5ad338b514",
    measurementId: "G-NCLTXLMTP6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
