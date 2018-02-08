const Component = require('../lib/Component');

module.exports = class Index extends Component {
    render() {
        return `
            <h1>我是首页</h1>
            <a href="/list">列表页</a>
        `;
    }
}