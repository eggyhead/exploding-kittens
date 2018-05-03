const express = require('express');

const functions = require('firebase-functions');
//const firebase = require('~/fire');
const { firestore } = require ('../../../fire')
const router = express.Router();


router.get('/', (req, res, next) => {
    firestore.collection("deck")
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

module.exports = router;