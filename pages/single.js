const Component = require('../lib/Component');

module.exports = class Index extends Component {
    switchUrl() {
        const isYou = this.props.url === '/single/you';
        const newUrl = `/single/${isYou ? 'me' : 'you'}`;
        this.props.url = newUrl;
        window.history.pushState({}, '', newUrl);
        this.setState();
    }
    bind() {
        this.options.mount.getElementsByClassName('switch-btn')[0].onclick = this.switchUrl.bind(this);
    }
    render() {
        ;
        return `
            <h1>${this.props.url}</h1>
            <button class="switch-btn">切换</button>
        `;
    }
}