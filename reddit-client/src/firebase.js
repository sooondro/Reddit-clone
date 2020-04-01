import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBuULN6U7uzURKdcNegThb98ALWDi65jz8',
  authDomain: 'reddit-clone-99242.firebaseapp.com',
  databaseURL: 'https://reddit-clone-99242.firebaseio.com',
  projectId: 'reddit-clone-99242',
  storageBucket: 'reddit-clone-99242.appspot.com',
  messagingSenderId: '1071427488066',
  appId: '1:1071427488066:web:c1578d209e1f19ace060db',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
