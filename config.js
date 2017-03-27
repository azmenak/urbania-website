const nconf = require('nconf');
const path = require('path');
// const admin = require('firebase-admin');

// const firebaseCredentials = require('./credentials.json');

nconf.env().argv();

nconf.file(path.resolve(__dirname, 'env.json'));

nconf.defaults({
  env: process.env.NODE_ENV || 'development',
  s3Bucket: 'new.urbaniacanada.com',
  distDir: path.resolve(__dirname, 'dist'),
  port: 9000,
  // firebase: {
  //   databaseURL: '',
  //   credential: admin.credential.cert(firebaseCredentials),
  // },
});

module.exports = nconf.get();
