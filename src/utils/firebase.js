const Firebase = require('firebase-admin');
const config = require('../../config');

// Firebase.database.enableLogging(true);

const firebase = Firebase.initializeApp(config.firebase);

function getConfig(path) {
  if (path === false) {
    return Promise.resolve(false);
  }
  return firebase.database().ref(path)
                 .once('value')
                 .then(snap => {
                   Firebase.database().goOffline();
                   return snap.val();
                 });
}

module.exports = {
  getConfig,
};
