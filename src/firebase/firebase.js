import * as firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqCLfGoEUUQuewMMH98oY8dvgNOXLbyNk",
    authDomain: "expensify-demo-1866b.firebaseapp.com",
    databaseURL: "https://expensify-demo-1866b-default-rtdb.firebaseio.com",
    projectId: "expensify-demo-1866b",
    storageBucket: "expensify-demo-1866b.appspot.com",
    messagingSenderId: "249251563646",
    appId: "1:249251563646:web:177a233e744ee822d5702f",
    measurementId: "G-Z5945J7XLP",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });