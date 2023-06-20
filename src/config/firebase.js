import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAGRJQavHFnb43r6lUyjOiOS2vrd4gwVbY",
  authDomain: "tiktok---jornada-2f54b.firebaseapp.com",
  projectId: "tiktok---jornada-2f54b",
  storageBucket: "tiktok---jornada-2f54b.appspot.com",
  messagingSenderId: "408056584530",
  appId: "1:408056584530:web:c32c8d81e774ed7a34428b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;