/* eslint-disable no-console */

const config = require('../config');
const AWS = require('./lib/aws');
const fs = require('fs');
const path = require('path');
const co = require('co');
const glob = require('glob');
const mime = require('mime');
const colors = require('colors'); // eslint-disable-line no-unused-vars

const s3 = new AWS.S3();

glob('**/*', { cwd: config.distDir, nodir: true }, (err, files) => {
  co(function* deploy() {
    try {
      yield files.map(file => {
        const filePath = path.resolve(config.distDir, file);
        const stats = fs.statSync(filePath);
        const body = fs.readFileSync(filePath);

        const uploads = [];

        if (/index.html/.test(file)) { // Page files
          if (file === 'index.html') { // Root index
            uploads.push({
              Bucket: config.s3Bucket,
              Key: file,
              Body: body,
              ACL: 'public-read',
              ContentType: mime.lookup(filePath),
              ContentLength: stats.size,
              CacheControl: 'no-cache, no-store, must-revalidate',
            });
          } else { // Sub page files
            const key = file.replace('/index.html', '');
            uploads.push({
              Bucket: config.s3Bucket,
              Key: key,
              Body: body,
              ACL: 'public-read',
              ContentType: mime.lookup(filePath),
              ContentLength: stats.size,
              CacheControl: 'no-cache, no-store, must-revalidate',
            });
            uploads.push({
              Bucket: config.s3Bucket,
              Key: file,
              Body: '',
              ACL: 'public-read',
              ContentLength: 0,
              WebsiteRedirectLocation: `/${key}`,
            });
          }
        } else { // Assets
          uploads.push({
            Bucket: config.s3Bucket,
            Key: file,
            Body: body,
            ACL: 'public-read',
            ContentType: mime.lookup(filePath),
            ContentLength: stats.size,
            CacheControl: 'public, max-age=31536000',
          });
        }

        return Promise.all(uploads.map(upload =>
          s3.putObject(upload).promise().then(() => {
            console.log(`Uploaded ${upload.Key}`);
          }).catch(error => console.log(error))
        ));
      });
    } catch (error) {
      console.log(error);
    }
  });
});
