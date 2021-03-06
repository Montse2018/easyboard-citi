function initialization() {
    const config = {
      apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
      authDomain: 'red-social-19985.firebaseapp.com',
      databaseURL: 'https://red-social-19985.firebaseio.com',
      projectId: 'red-social-19985',
      storageBucket: 'red-social-19985.appspot.com',
      messagingSenderId: '169924096887'
    };
        
    firebase.initializeApp(config);
}
let  auth = initialization();

 function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        goToKanban();
      } else {
        console.log('No hace nada XD');
      }
    });
}

function authGoogle() {
let provider = new firebase.auth.GoogleAuthProvider();
valitator(provider);
}

function valitator(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      observador();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);  
    });
}

function goToKanban() {
    window.location.href = 'views/kanban.html';
}

const google = document.getElementById('logGoogle');
    google.addEventListener('click', (event) => {
        authGoogle();
        goToKanban();
});