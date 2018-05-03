const express = require('express');

const functions = require('firebase-functions');
//const firebase = require('firebase-admin');
const { firestore } = require ('../../../fire')
const router = express.Router();



router.get('/', (req, res, next) => {
    firestore.collection("games")
    .get()
    .then((querySnapshot) => {
        let queryData = [];
        querySnapshot.forEach((doc) => {
            let id = doc.id
            console.log('id: ', id)
            let data = doc.data()
            queryData = queryData.concat([{id: id, data: data}])
        })
        return res.send(queryData)
    })
    .catch(error => console.error(error))
 })

router.post('/new-game', (req, res, next) => {
   try {
       firestore.collection("users").add({
           player1: "erika"
       })
       .then(docRef => {
        console.log("Document written with ID: ", docRef.id)
        return res.send("TESTING POST ROUTE FOR GAMES")   
        })
       .catch(error => console.error("error adding document: ", error))
    } catch (error) {
        return next(error);
    }   
})

module.exports = router;