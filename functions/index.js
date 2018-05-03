'use strict'

const functions = require('firebase-functions')
const lib = require('./lib');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
// const firebase = require('~/fire');
    // const firebaseApp = firebase.initializeApp(
    //     functions.config().firebase //uses the configured project's credentials
    // )
const cors = require('cors')
let router = require('./server/routes')
const app = express();

//admin.initializeApp();    
exports.helloWorld = functions.https.onRequest((request, response) =>
   response.send(lib))
   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors({origin: true}));
   
   // data && Object.keys(data).forEach(key => {
   //     const nestedContent = data[key];
   
   //     if (typeof nestedContent === "object") {
   //         Object.keys(nestedContent).forEach(docTitle => {
   //                 firestore.collection(key)
   //             .doc(docTitle)
   //             .set(nestedContent[docTitle])
   //             .then((res) => {
   //                 return console.log("Document successfully written")
   //             })
   //             .catch((error) => {
   //                 console.error("Error writing document ", error)
   //             })
   //         })
   //     }
   // })
   
   // app.get('/', (req, res) => {
   //     /*res.set('Cache-Control', 'public, max-age=300, s-maxage=600') */ 
   //     /*
   //     Caching stores content in a server that lives closer to the user (CDN), improving load time
       
   //     1. 'public' means we can cache content on a server as opposed to on the user's browser,
   //     2. 'max-age' says how long we can store content in the user's browser, 
   //     3. 's-maxage' says how long we can store content on the CDN*/
   //     getFacts()
   //     console.log('facts ', facts)
   //     res.render('index', {facts})
      
   // })
   
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/api', router)
app.listen(8888, function(){
    console.log('App listening on port 8888!')
})
   
   //app.use('/users', gamesRouter)
   // // Create and Deploy Your First Cloud Functions
   // // https://firebase.google.com/docs/functions/write-firebase-functions
   //
exports.app = functions.https.onRequest(app);   
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into the Realtime Database using the Firebase Admin SDK.
//     return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
//       // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//       return res.redirect(303, snapshot.ref.toString());
//     });
//   });


// Always change the value of "/hello" to "world!"
// exports.hello = functions.database.ref('/hello').onWrite(event => {
//     // set() returns a promise. We keep the function alive by returning it.
//     return event.data.ref.set('world!').then(() => {
//       console.log('Write succeeded!');
//     });
//   });