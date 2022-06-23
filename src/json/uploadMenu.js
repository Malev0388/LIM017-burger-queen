/*
const admin = require('firebase-admin');
const serviceAccount = require("./key_service_account.json");
const data = require("./menus.json");
const collectionKey = "menus"; //Name of the collection
*/
import admin from 'firebase-admin';
import serviceAccount from './key_service_account.json';
import data from './menus.json';
const collectionKey = "menus";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
 firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}