const $ = require('shelljs');
const _ = require('lodash');
const readline = require('readline');
const fs = require('fs');

const processName = input => {
  const name = input.trim();
  if (/^\d+(\.\d+)?$/.test(name)) {
    return `v${name}`;
  }
  return name;
};

const status = $.exec('git status --porcelain').stdout;
if (status) {
  console.log('There are changes in the working tree, commit or stash them before deploying');
  process.exit(2);
}

$.exec('git fetch --tags');

const tags = _.compact($.exec('git tag', { silent: true }).stdout.split('\n')).sort();

const lastTagName = _.last(tags.filter(tag => /v\d+(\.d+)?/.test(tag)));

function nextNum(match) {
  return Number(match) + 1;
}
const suggestedName = lastTagName ? lastTagName.replace(/\d+$/, nextNum) : 'v0';

const suggestedMessage = $.exec('git log -1 --pretty=%B | cat').stdout.trim();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Name for this release? (last was ${lastTagName}, default ${suggestedName}): `, input => {
  const tagName = processName(input) || suggestedName;
  rl.question(`Release message (default ${suggestedMessage}): `, messageInput => {
    rl.close();

    const releaseMessage = messageInput || suggestedMessage;

    $.exec(`git tag ${tagName} -m "${releaseMessage}"`);
    $.exec('git push origin master --tags');

    fs.writeFileSync('release', tagName);
  });
});
