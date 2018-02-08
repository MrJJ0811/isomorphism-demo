const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, './list.json');

function getList() {
    // require 有缓存
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}

exports.addToList = (items) => {
    fs.writeFileSync(fileName, JSON.stringify(items), 'utf8');
}

exports.getList = getList;