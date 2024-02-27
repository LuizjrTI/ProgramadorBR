## FIREBASE - CRIANDO A CONTA NO FIREBASE

Link de acesso : [FIREBASE](https://https://firebase.google.com/?hl=pt)

## FIREBASE - LENDO DOCUMENTOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Firebase</title>
  </head>
  <body></body>
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>
  <script src="./script/app.js"></script>
</html>
```

**JAVASCRIPT**

```JavaScript
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

db.collection("turmaA")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let aluno = doc.data();
      console.log("🚀 ~ snapshot.forEach ~ aluno:", aluno.nome);
    });
  });

```

## FIREBASE - BUSCAS SELECIONANDO MELHOR OS DOCUMENTOS

```JavaScript
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

// Exemplo 1
db.collection("turmaA")
  .where("notas.nota1", ">", 7)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let aluno = doc.data();

      console.log(aluno.nome + " => " + aluno.notas.nota1);
    });
  });

// Exemplo 2
db.collection("turmaA")
  .where("nome", ">", "M")
  .where("nome", "<", "Z")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log(aluno.nome);
    });
  });

```

- No where ele aceita **`==`**,**`>`**,**`>=`**,**`<`**,**`<=`**.
- Ele não permite o uso do **`!=`**,

## FIREBASE - CRIANDO E ALTERANDO DOCUMENTOS

```javascript
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

const TURMA = "turmaA";

db.collection(TURMA) // id
  .add({
    nome: "Marcos",
    sobrenome: "Souza",
    notas: {
      nota1: 9.8,
      nota2: 5.7,
    },
  })
  .then((doc) => {
    console.log("Documento Inserido com sucesso:", doc);
  })
  .catch((err) => {
    console.log(err);
  });

db.collection(TURMA)
  .doc("ALuno") // id
  .set(
    {
      nome: "Matheus",
      sobrenome: "Souza",
      notas: {
        nota1: 9.8,
        nota2: 5.7,
      },
    },
    { merge: true }
  )
  .then(() => {
    console.log("Documento Inserido com sucesso:");
  })
  .catch((err) => {
    console.log(err);
  });

db.collection(TURMA)
  .doc("ALuno") // id
  .update({
    cidade: firebase.firestore.FieldValue.arrayUnion("Vitoria", "São Paulo"),
    cidade: firebase.firestore.FieldValue.arrayRemove("Vitoria"),
    faltas: firebase.firestore.FieldValue.increment(1),
    //cidade: ["Rio de Janeiro"],
  })
  .then(() => {
    console.log("Documento Inserido com sucesso:");
  })
  .catch((err) => {
    console.log(err);
  });
```

## FIREBASE - ON SNAPSHOT (ATUALIZANDO EM TEMPO REAL )

```javascript
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

const TURMA = "turmaA";

db.collection("turmaA").onSnapshot((snapshot) => {
  snapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    let aluno = doc.data();
    console.log("🚀 ~ snapshot.forEach ~ aluno:", aluno.nome);
  });
});
```

## FIREBASE - APAGANDO CAMPOS E DOCUMENTOS

- Para deletar um **CAMPO**

```javascript
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

const TURMA = "turmaA";

db.collection(TURMA)
  .doc("ALuno") // id
  .update({
    cidade: firebase.firestore.FieldValue.delete(),
  })
  .then(() => {
    console.log("Documento Inserido com sucesso:");
  })
  .catch((err) => {
    console.log(err);
  });
```

- Para deletar um **Documento**

```javascript
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

const TURMA = "turmaA";

db.collection(TURMA)
  .doc("ALuno") // id
  .delete()
  .then(() => {
    console.log("Documento deletado com sucesso:");
  })
  .catch((err) => {
    console.log(err);
  });
```

## FIREBASE - CRIANDO USUARIOS NO FIREBASE

```html
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>
```

```javascript
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
```

## FIREBASE - GERENCIANDO LOGINS

- O Firebase é uma plataforma poderosa para desenvolvimento de aplicativos móveis e web, que fornece uma variedade de serviços, incluindo autenticação de usuários. O gerenciamento de logins no Firebase permite que os desenvolvedores autentiquem usuários de forma segura e eficiente, utilizando diferentes métodos de autenticação, como e-mail/senha, Google, Facebook, Twitter, entre outros.

- No exemplo fornecido, o código JavaScript demonstra como realizar o login de um usuário utilizando o método **`signInWithEmailAndPassword()`** do Firebase Auth para autenticar um usuário por e-mail e senha. Após o login bem-sucedido, é possível acessar informações sobre o usuário autenticado e também monitorar mudanças no estado de autenticação utilizando o método **`onAuthStateChanged()`** . Além disso, o código também demonstra como realizar o logout de um usuário utilizando o método **`signOut()`** .

* O método **`onAuthStateChanged()`** é usado para monitorar mudanças no estado de autenticação do usuário. Sempre que o estado de autenticação do usuário mudar (por exemplo, quando um usuário faz login ou logout), a função de retorno de chamada fornecida será executada. Se um usuário estiver autenticado, o objeto user conterá informações sobre o usuário. Caso contrário, o valor de user será null.

```javascript
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

setTimeout(() => {
  logout();
}, 2000);
```

## FIREBASE - SESSÃO DE USUARIOS

- O Firebase Authentication é um serviço oferecido pela plataforma Firebase que permite autenticar usuários em seus aplicativos. Para gerenciar a sessão de usuários, o Firebase Authentication oferece três opções de persistência de sessão, que determinam como a autenticação do usuário é mantida entre sessões e se ele será mantido conectado mesmo após o fechamento do navegador ou a reinicialização do aplicativo.

**firebase.auth.Auth.Persistence.NONE:**

- Com essa opção, a sessão de autenticação do usuário não será mantida entre sessões. Isso significa que, ao fechar o navegador ou reiniciar o aplicativo, o usuário será automaticamente desconectado e precisará fazer login novamente na próxima vez que acessar o aplicativo.
- Esta opção é útil em situações onde você deseja garantir que o usuário faça login sempre que acessar o aplicativo, sem manter sua sessão ativa entre sessões.

**firebase.auth.Auth.Persistence.LOCAL:**

- Com essa opção, a sessão de autenticação do usuário é mantida localmente no dispositivo do usuário, mesmo após o fechamento do navegador ou a reinicialização do aplicativo. Isso significa que o usuário permanecerá conectado automaticamente quando acessar o aplicativo novamente.
- Esta opção é ideal para aplicativos onde você deseja que os usuários permaneçam conectados entre sessões e não precisem fazer login repetidamente.

**firebase.auth.Auth.Persistence.SESSION:**

- Com essa opção, a sessão de autenticação do usuário é mantida apenas durante a sessão atual do navegador ou do aplicativo. Isso significa que, ao fechar o navegador ou reiniciar o aplicativo, o usuário será desconectado e precisará fazer login novamente na próxima vez que acessar o aplicativo.
- Esta opção é útil em cenários onde você deseja manter os usuários conectados durante a sessão atual, mas não deseja manter a sessão ativa entre sessões.

- Essas opções de persistência de sessão oferecidas pelo Firebase Authentication permitem personalizar o comportamento de autenticação do usuário de acordo com as necessidades específicas do seu aplicativo. É importante escolher a opção mais adequada com base nos requisitos de segurança e usabilidade do seu aplicativo.

```javascript
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
```

## FIREBASE PERMISSÕES E REGRAS

**Algumas regras comuns:**

- Somente Usuários autenticados podem ler ou modificar:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

- ​Somente os donos do conteúdo podem ler ou modificar:

```
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow only authenticated content owners access
    match /some_collection/{userId}/{documents=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId
    }
  }
}
```

- Todos podem ler mas apenas os donos do conteúdo podem modificar:

```
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access, but only content owners can write
    match /some_collection/{document} {
      allow read: if true
      allow create: if request.auth.uid == request.resource.data.author_uid;
      allow update, delete: if request.auth.uid == resource.data.author_uid;
    }
  }
}
```

- Permissão baseada no papel do usuário:

```
service cloud.firestore {
  match /databases/{database}/documents {
    // For attribute-based access control, Check a boolean `admin` attribute
    allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true;
    allow read: true;

    // Alterntatively, for role-based access, assign specific roles to users
    match /some_collection/{document} {
     allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "Reader"
     allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "Writer"
   }
  }
}
```
