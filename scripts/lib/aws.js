const config = require('../../config');
const AWS = require('aws-sdk');

AWS.config = {
  credentials: config.aws,
  region: 'us-east-2',
  signatureVersion: 'v4',
};

module.exports = AWS;
