const firebaseConfig = {
  apiKey: "AIzaSyDlNGLlPqTnv9mXMRzlDoyDZaxGgDbuAsk",
  authDomain: "colegio-e8df5.firebaseapp.com",
  projectId: "colegio-e8df5",
  storageBucket: "colegio-e8df5.appspot.com",
  messagingSenderId: "442934886663",
  appId: "1:442934886663:web:31af2aa9739d3b24b105a2",
  measurementId: "G-6WVCMGTFJT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
let auth = firebaseApp.auth();

function criarUsuario() {
  let newUserEmail = "novoteste@teste.com";
  let newUserPassword = "123321ABCcba";

  let auth = firebase.auth();

  auth
    .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then((user) => {
      console.log("User created");
    })
    .catch((error) => {
      console.log(error);
    });
}

function login() {
  let newUserEmail = "novoteste@teste.com";
  let newUserPassword = "123321ABCcba";

  auth
    .setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(
      auth
        .signInWithEmailAndPassword(newUserEmail, newUserPassword)
        .then((loggedUser) => {
          console.log(
            "🚀 ~ auth.signInWithEmailAndPassword ~ loggedUser:",
            loggedUser
          );
          console.log(
            "🚀 ~ auth.signInWithEmailAndPassword ~ auth.currentUser:",
            auth.currentUser
          );
        })
        .catch((error) => {
          console.log(error);
        })
    )
    .catch((error) => {
      console.log(error);
    });
}

//login();

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("Niguem logado");
  }
});

function logout() {
  auth
    .signOut()
    .then(() => {
      console.log("Usuario foi deslogado");
    })
    .catch((error) => {
      console.log(error);
    });
}

// setTimeout(() => {
//   logout();
// }, 2000);
