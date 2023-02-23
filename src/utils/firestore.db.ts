import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, limit } from "firebase/firestore";
import { UserProps } from "../@types/user";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  projectId: "devcards-d1264",
  storageBucket: "devcards-d1264.appspot.com",
  messagingSenderId: "781349439903",
  appId: "1:781349439903:web:6d5d37b9affb43da4fd5aa",
  measurementId: "G-4S26KPC1Y2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

export async function getUserByUrl(url: string): Promise<UserProps | null> {
    const q = query(collection(db, "cards"), where("url", "==", url), limit(1));
    const docSnap = await getDocs(q);
    const users: UserProps[] = [];
    docSnap.forEach((doc) => {
        users.push(doc.data() as UserProps);
    });
    return users[0] || null;
}
