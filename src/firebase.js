import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyDCitiQ2Wkm6DylwEGumAtZV0thHLMxBOI',
	authDomain: 'todoist-clone-a48f6.firebaseapp.com',
	databaseURL: 'https://todoist-clone-a48f6.firebaseio.com',
	projectId: 'todoist-clone-a48f6',
	storageBucket: 'todoist-clone-a48f6.appspot.com',
	messagingSenderId: '373259292021',
	appId: '1:373259292021:web:a99a818919be616ce0573c'
});

export { firebaseConfig as firebase };
