const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const firebase = require('firebase-admin');
// const firebaseApp = firebase.initializeApp(
//     functions.config().firebase //uses the configured project's credentials
// )
const cors = require('cors')
let router = require('./routes')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors({origin: true}))

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
app.get('*', (req, res, next) => {
    res.send('Hello!')
})

//app.use('/users', gamesRouter)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
module.exports.app = functions.https.onRequest(app);