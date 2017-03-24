import url from 'url';
import { memoize, defaultsDeep } from 'lodash/fp';

const getApiUrl = memoize(to => {
  const apiUrl = url.parse(process.env.API_URL);
  if (process.env.NODE_ENV === 'production') {
    apiUrl.protocol = 'https';
  }
  const from = url.format(apiUrl);
  return url.resolve(from, to);
});

function requestOptions(options) {
  return defaultsDeep(options, {
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
      'X-Requester-Host': window.location.host,
    },
  });
}

function checkStatus(response) {
  if ((response.status >= 200 && response.status < 300) || response.status === 304) {
    return response;
  }
  return response.json().then(body => {
    const error = new Error(response.statusText);
    error.response = response;
    error.body = body;
    throw error;
  });
}

function parseResponse(response) {
  if (/application\/.*json/.test(response.headers.get('Content-Type'))) {
    return response.json();
  }
  if (response.headers.get('Content-Transfer-Encoding') === 'binary') {
    const [, type, filename] = /(\w+); filename="(.+)"/.exec(response.headers.get('Content-Disposition'));
    return response.blob().then(blob => ({
      type,
      filename,
      blob,
    }));
  }
  return response.text();
}

function methodRequest(method, path, options = {}) {
  const body = typeof options.body === 'string'
    ? options.body
    : JSON.stringify(options.body);

  const methodOptions = Object.assign({}, options, { body, method });
  return window.fetch(getApiUrl(path), requestOptions(methodOptions))
    .then(checkStatus)
    .then(parseResponse);
}

export function get(path, options = {}) {
  return window.fetch(getApiUrl(path), requestOptions(options))
    .then(checkStatus)
    .then(parseResponse);
}

export const post = (...args) => methodRequest.apply(null, ['POST', ...args]);
export const put = (...args) => methodRequest.apply(null, ['PUT', ...args]);
export const del = (...args) => methodRequest.apply(null, ['DELETE', ...args]);
