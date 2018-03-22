const Component = require('../lib/Component');
const {
    getList,
    addToList
} = require('../api/list.api');

module.exports = class Index extends Component {
    constructor (props, options) {
        super(props, options);
    }
    async preFetch() {
        await this.getList();
    }
    mounted() {
        // axios.get('/getList').then(({
        //     data: list
        // }) => {
        //     this.props.list = list;
        // });
    }
    bind() {
        this.options.mount.getElementsByClassName('add-btn')[0].onclick = this.add.bind(this);
        const delBtns = this.options.mount.getElementsByClassName('del-btn');
        for(let i = 0; i < delBtns.length; i++) {
            delBtns[i].onclick = this.del.bind(this, i);
        }
        this.options.mount.getElementsByClassName('save-btn')[0].onclick = this.save.bind(this);
    }
    async getList() {
        const list = (await getList()).data;
        this.props.list = list;
    }
    add() {
        this.props.list.push({
            name: this.props.list.length + 1
        });
        this.setState();
    }
    del(i) {
        this.props.list.splice(i, 1);
        this.setState();
    }
    save() {
        addToList(this.props.list).then(() => {
            alert('success')
        });
    }
    render() {
        return `
            <h1>我是列表页</h1>
            <button class="add-btn">add</button>
            <button class="save-btn">save</button>
            <ul>
                ${
                    this.props.list.length ? 
                    this.props.list.map((val, index) => `
                        <li>
                            ${val.name}
                            <button class="del-btn">删除</button>
                        </li>
                    `).join('') :
                    '列表为空'
                }
            </ul>
        `;
    }
}