import React, { Component } from 'react';
import { Table ,message,Button} from 'antd'
import 'antd/dist/antd.css';
import './style.css'

//实际项目中，用户点击收藏的时候会对接口进行调用，当用户进入该页面的时候，应该有后台传给前端已经收藏的数据。
//由于不是前后端联动的项目，并且只是个demo，故存储在sessionStorage,必要的时候我们可以清楚数据，等同于清楚收藏页面。
const data = [
    {
        id:1,
        productName:'果粒橙',
        category:'饮料',
        number:1,
        collection:false
    },
    {
        id:2,
        productName:'小熊饼干',
        category:'零食',
        number:1,
        collection:false
    },
    {
        id:3,
        productName:'iphone',
        category:'电子产品',
        number:1,
        collection:false
    },
    {
        id:4,
        productName:'kindle',
        category:'电子产品',
        number:1,
        collection:false
    },
    {
        id:5,
        productName:'机械键盘',
        category:'3c',
        number:1,
        collection:false
    },
    {
        id:6,
        productName:'显示器',
        category:'数码',
        number:1,
        collection:false
    },
];


//模拟数据。
class CollectionPgae extends Component {
    constructor(props){
        super(props);
        this.state= {
            newData:[]
        }
    }
    componentDidMount(){
        //TODO 可以用router进行传值，一样可以达到demo想要的效果。
        /*if(this.props.location.query.idList){
            this.setState({
                newData: this.findCollection(this.props.location.query.idList,data)
            })
        }*/
        if(window.sessionStorage.id){
            this.setState({
                newData:this.findCollection(window.sessionStorage.id,data)
            })
        }
    }

    findCollection(id,arr){
        let newData = [];
        for(let i = 0;i<id.length;i++){
            for(let j = 0; j<arr.length;j++){
                if(id[i] == arr[j].id){
                    newData.push(arr[j])
                }
            }
        }
        return newData
    }
    emptyHandler(){
        window.sessionStorage.removeItem('id');
        window.location.reload()
        message.success('清除成功');
    }
    backHandler(){
        this.context.router.goBack()
    }
    render() {
        const { newData }  = this.state
        const columns = [
            {
                title:'商品id',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'商品名称',
                dataIndex:'productName',
                key:'productName'
            },
            {
                title:'商品类型',
                dataIndex:'category',
                key:'category'
            },
            {
                title:'商品数量',
                dataIndex:'number',
                key:'number'
            },
        ];
        return (
            <div  className="TabelContainer">
                <Button type="primary" onClick={this.emptyHandler.bind(this)}>清空收藏</Button>
                <Button type="primary" style={{float:'right'}} onClick={this.backHandler.bind(this)}>返回商品列表</Button>
                <Table columns={columns}
                       dataSource={newData}
                       rowKey={row => row.id}
                       pagination={false}
                    //loading={loading}
                />
            </div>
        )
    }
}

CollectionPgae.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default CollectionPgae