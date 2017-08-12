import React, { Component } from 'react';
import { Table ,Button,message} from 'antd'
import { hashHistory } from 'react-router'
import 'antd/dist/antd.css';
import './style.css'
import _ from 'lodash'



//模拟数据，通常这个数据是从后台传过来的，前端只做页面的展示以及必要的值的传输。
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
    {
        id:7,
        productName:'显示器',
        category:'数码',
        number:1,
        collection:false
    },
    {
        id:8,
        productName:'显示器',
        category:'数码',
        number:1,
        collection:false
    },
    {
        id:9,
        productName:'显示器',
        category:'数码',
        number:1,
        collection:false
    },
    {
        id:10,
        productName:'显示器',
        category:'数码',
        number:1,
        collection:false
    },
];

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            collectionData:[]
        }
    }
    CollectionHandler(id){
        this.setState({
            collectionData:this.state.collectionData.concat(id)  //此处state存储已选id的目的是控制每种商品只能储存一次。
        })
        if(window.sessionStorage.id){                       //使用H5的新API sessionStorage进行储存id的数组。
            window.sessionStorage.id = window.sessionStorage.id.concat(id)
        } else {
            let a = [];
            window.sessionStorage.id = a.concat(id)
        }
        message.success('收藏成功')
        //TODO 此处可以尝试使用react-router进行传值。
        /*this.context.router.push({
            pathname:'/message',
            query:{
                idList:this.state.collectionData.concat(id)
            }
        });*/
    }
    jumpHandler(){
        this.context.router.push({
            pathname:'/message',
            query:{
                idList:this.state.collectionData
            }
        })
    }
    render() {
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
            {
                title:'收藏',
                dataIndex:'collection',
                key:'collection',
                render:(data,row)=>{
                    return(
                        <Button type="primary" disabled={_.includes(window.sessionStorage.id,row.id)} onClick={this.CollectionHandler.bind(this,row.id+'/')}>收藏</Button>
                    )
                }
            }

        ];
        return (
            <div className="TabelContainer" style={{width:800,margin:'0 auto'}}>
                <Button type="primary" onClick={this.jumpHandler.bind(this)}>进入收藏页</Button>
                <Table columns={columns}
                       dataSource={data}
                       rowKey={row => row.id}
                       pagination={false}   //此处可以和后台联动进行table的pageSize以及初始page的控制。由于模拟数据暂时不需要分页功能。
                       //loading={loading}  //此处可以在进行ajax请求的过程中loading。
                />
            </div>
        )
    }
}

HomePage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default HomePage