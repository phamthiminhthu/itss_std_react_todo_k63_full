import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCq6LYE2Ot_kl-e6IoMokatF9Av9RIYaNw",
  authDomain: "fir-sample-a4f0a.firebaseapp.com",
  projectId: "fir-sample-a4f0a",
  storageBucket: "fir-sample-a4f0a.appspot.com",
  messagingSenderId: "199903716475",
  appId: "1:199903716475:web:a7c1e51f0e3fda4844eede"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const getAllTodosFireBase = await db
      .collection("todos")
      .get();
    const items = getAllTodosFireBase.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};
