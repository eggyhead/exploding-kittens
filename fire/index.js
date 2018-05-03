const firebase = require('firebase')
// const firestore = require('firebase/firestore')
const setup = require('./setup') 

setup(firebase)

const firestore = firebase.firestore()
const database = firebase.database()
const auth = firebase.auth()
const storage = firebase.storage()


module.exports = {

}

export default firebase
export 

// Export your models here. Example:
export const userById = id => firestore.collection('users').doc(id)