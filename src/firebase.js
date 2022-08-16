import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCNlvAc1XahPULmln9f-qBtzEhYoBN6X_E",
    authDomain: "disney-plus-cone-pal89.firebaseapp.com",
    projectId: "disney-plus-cone-pal89",
    storageBucket: "disney-plus-cone-pal89.appspot.com",
    messagingSenderId: "973646014323",
    appId: "1:973646014323:web:22bdc087cd9c8109788706",
    measurementId: "G-D4F9L04P17"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, analytics};
export default db;