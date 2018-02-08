const {isBrowser} = require('../utils');

module.exports = class Component {
    constructor (props = {}, options) {
        this.props = props;
        this.options = options;
        this.beforeMount();
        if (isBrowser) {
            // 浏览器端
            this.options.mount.innerHTML = this.render();
            this.mounted();
            this.bind();
        }
    }
    async preFetch() {}
    beforeMount() {}
    mounted() {}
    bind() {}
    setState() {
        this.options.mount.innerHTML = this.render();
        this.bind();
    }
    render() {
        return '';
    }
};