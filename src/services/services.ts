;

import firebase from 'firebase/app';
import 'firebase/auth';

import '../db/connection';

// Registrar un usuario nuevo
export async function signIn(mail: string, password: string) {
    await firebase.auth().createUserWithEmailAndPassword(mail, password)
        .then((succes) => {
            console.log(succes)
        })
        .catch((error) => {
            if (error.code == "auth/email-already-in-use") {
                alert("La dirección de correo electrónico ya está siendo utilizada por otra cuenta.");
            } else {
                console.log(error);
            }
        });
}

// Iniciar sesión 
export async function logIn(mail: string, password: string) {
    // signInWithEmailAndPassword inicia sesión a partir de
    await firebase.auth().signInWithEmailAndPassword(mail, password)
        .then((credenciales) => {
            console.log("login")
            console.log(credenciales.user)
        })
        .catch((error) => {
            if (error.code == "auth/email-already-in-use") {
                alert("La dirección de correo electrónico ya está siendo utilizada por otra cuenta.");
            } else {
                console.log(error);
            }
        });
}

// Cerrar sesión
export async function signOut() {
    await firebase.auth().signOut()
        .then(() => {
            console.log("ha cerrado sesion")
        })
        .catch((error) => {
            console.log(error);
        });
}
