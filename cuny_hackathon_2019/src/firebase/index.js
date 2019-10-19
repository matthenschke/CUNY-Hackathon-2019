import firebase from 'firebase/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBksqyZZtx3zVQKoiK9HUOc10c1ynG9kjU",
    authDomain: "cuny-hackathon-2019-a415f.firebaseapp.com",
    databaseURL: "https://cuny-hackathon-2019-a415f.firebaseio.com",
    projectId: "cuny-hackathon-2019-a415f",
    storageBucket: "cuny-hackathon-2019-a415f.appspot.com",
    messagingSenderId: "29813772517",
    appId: "1:29813772517:web:484a64c158f152dd04840c",
    measurementId: "G-F1N317JXQF"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
    storage, firebase as default
  } 