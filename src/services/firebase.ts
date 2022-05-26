import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBOCyDHiOpFA21_-otMZdvYlYOFmS4AFw4',
  authDomain: 'react-7fa67.firebaseapp.com',
  projectId: 'react-7fa67',
  storageBucket: 'react-7fa67.appspot.com',
  messagingSenderId: '376835423759',
  appId: '1:376835423759:web:8fe6bfdcc989297655ad7a',
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');

export const getChatsById = (chatId: string) => ref(db, `chats/${chatId}`);

export const getMessageListById = (chatId: string) =>
  ref(db, `chats/${chatId}/messageList/`);
