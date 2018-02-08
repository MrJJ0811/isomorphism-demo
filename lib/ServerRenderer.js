const path = require('path');
const fs = require('fs');

module.exports = async (mod, url) => {
    var Component = require(path.resolve(__dirname, '../', mod));
    const template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    const com = new Component({
        url
    });

    await com.preFetch();

    return template
            .replace(
                '<!-- ssr -->', 
                com.render() + 
                    '<script>window.__initial_props__ = ' + JSON.stringify(com.props) + '</script>')
            .replace('${modName}', mod);
    // return template;
}