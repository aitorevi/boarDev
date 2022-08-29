import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC9862madlubyKCuIwpPeyosaQqRJMHaHI',
  authDomain: 'boardev-d88e6.firebaseapp.com',
  projectId: 'boardev-d88e6',
  storageBucket: 'boardev-d88e6.appspot.com',
  messagingSenderId: '577116577810',
  appId: '1:577116577810:web:633cd34fc0fd3581e678cb',
  measurementId: 'G-XV12B6TGLM',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (code) => {
  const { user } = code;
  const { email, photoURL, reloadUserInfo } = user;
  const { screenName } = reloadUserInfo;
  return {
    user,
    email,
    photoURL,
    screenName,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider).then(mapUserFromFirebaseAuthToUser);
};

// const { user } = code;
// const { email, photoURL, reloadUserInfo } = user;
// const { screenName } = reloadUserInfo;
// return {
//   email,
//   photoURL,
//   screenName,
// };

// export const loginWithGitHub = () => {
//   const provider = new GithubAuthProvider();
//   provider.getCustomParameters(firebaseConfig);
//   const auth = getAuth();
//   return signInWithPopup(auth, provider).then((user) => {
//     const { user } = user;
//     const { photoUrl } = user;
//     return {
//       photoUrl,
//     };
//   });
// };

// import * as firebase from 'firebase';

// import { initializeApp } from '@firebase/app';
// import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// // firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

// // export const loginWithGitHub = () => {
// //   const githubProvider = new firebase.auth.GithubAuthProvider();
// //   return firebase.auth().signInWithPopup(githubProvider);
// // };

// Esta parte me sirve para que me devuelva el objeto completo con toda la info y ver que es lo que quiero extraer del mismo

// export const loginWithGitHub = () => {
//   const githubProvider = new GithubAuthProvider();
//   githubProvider.setCustomParameters(firebaseConfig);
//   const auth = getAuth();
//   return signInWithPopup(auth, githubProvider);
// };
