import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'YOURAPIKEY',
	authDomain: 'YOURDOMAIN',
	databaseURL: 'YOURURL',
	projectId: 'YOURPROJECTID',
	storageBucket: 'STORAGEBUCKER',
	messagingSenderId: 'ID',
	appId: 'ID'
});

export { firebaseConfig as firebase };
