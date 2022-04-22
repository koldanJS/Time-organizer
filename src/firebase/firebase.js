import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import
// import
import firebaseConfig from './firebase.config'

const firebaseApp = initializeApp(firebaseConfig)

// const auth = getAuth(firebaseApp)    //Для авторизации

const db = getFirestore(firebaseApp)    //Для использования БД

export { db }