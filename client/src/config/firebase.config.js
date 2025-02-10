import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkSd9yf04pbdsefmu3pmxJtUfwmJIyddI",
  authDomain: "projectmusicapp-a4fea.firebaseapp.com",
  projectId: "projectmusicapp-a4fea",
  storageBucket: "projectmusicapp-a4fea.appspot.com",
  messagingSenderId: "1056909350723",
  appId: "1:1056909350723:web:abbecffa8bc00da5b6c1f6"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
