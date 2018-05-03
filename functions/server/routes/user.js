const express = require('express');

const functions = require('firebase-functions');
// const firebase = require('~/fire');
const { firestore } = require ('../../../fire')
const router = express.Router();

let usersQuery = firestore.collection('users')

router.get('/', (req, res, next) => {
    usersQuery
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

router.get('/:userId', (req, res, next) => {
    usersQuery
    .where("id", "==", req.params.userId)
    .get()
    .then((querySnapshot) => {
        return querySnapshot.forEach(d => {
            let data = d.data()
            res.send(data)
        })
    })
    .catch(next)
})

router.post('/new-user', (req, res, next) => {
   try {
       firestore.collection("users").add({
           email: req.body.email,
           password: req.body.password,
           username: req.body.username
       })
       .then(docRef => {
        console.log("Document written with ID: ", docRef.id)
        return res.send("TESTING POST ROUTE FOR USERS")   
        })
       .catch(error => console.error("error adding document: ", error))
    } catch (error) {
        return next(error);
    }   
})

module.exports = router;