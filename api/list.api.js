const axios = require('axios');
const { isBrowser } = require('../utils');

const host = isBrowser ? '/' : 'http://localhost:3000/';

function getUrl(path) {
    return host + path;
}

exports.getList = () => axios.get(getUrl('getList'));

exports.addToList = (items) => axios.post(getUrl('addToList'), {
    items
});