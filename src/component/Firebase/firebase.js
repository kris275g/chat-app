import app from 'firebase/app';
import 'firebase/auth';
const Config = {
    apiKey: "AIzaSyBZNRBSCA-ZSsNkcvKJEeszvj8SOLEFnek",
    authDomain: "angularreact-327a7.firebaseapp.com",
    databaseURL: "https://angularreact-327a7.firebaseio.com",
    projectId: "angularreact-327a7",
    storageBucket: "angularreact-327a7.appspot.com",
    messagingSenderId: "427818118744",
    appId: "1:427818118744:web:1364a83eadd1a30b50642d",
    measurementId: "G-WH72RNCMY1"
  };

  const devConfig = {
    apiKey: "AIzaSyAbxTtgENz9WCyOwEgfHYsu1CXn3IhDNiU",
    authDomain: "test-8a919.firebaseapp.com",
    databaseURL: "https://test-8a919.firebaseio.com",
    projectId: "test-8a919",
    storageBucket: "test-8a919.appspot.com",
    messagingSenderId: "935267411434",
    appId: "1:935267411434:web:e160867823575bca12fe93",
    measurementId: "G-CPHSFXGZ18"  
  };

  class Firebase {
    constructor() {
        app.initializeApp(devConfig);

        this.auth = app.auth();
    }
    // Auth api

    doCreateUserWithEmailAndPassword = (email, password) =>this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => this.auth.doSignInWithEmailAndPassword(email, password);

    doSignOut = ()=>this.auth.signOut();
    
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;