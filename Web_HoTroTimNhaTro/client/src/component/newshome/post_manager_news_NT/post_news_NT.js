import React, { Component } from 'react';
import axios from 'axios';


import '../post_management/post_management.css'
class PostmanagementNT extends Component {
    constructor(props) {
        super(props);
        this.state={
            list_NT:[]
        } 
    }
   async componentDidMount(){
        await axios.get('/phong-tro/quan-ly-tin-dang/nha-tro')
        .then(res => {
            this.setState({
                list_NT:res.data.list_NT
            });
        })
        .catch( (error) => console.log(error)); 
    }
    formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    ClickHiddenNewsNT=async (e)=>{
        let id=e.target.value;
        await axios.post('/phong-tro/quan-ly-tin-dang/an-tin-tuc-nha-tro',{
           id
         },{headers: {'Accept': 'application/json'}})
        .then(res => {
            this.setState({
                list_NT:res.data.list_NT
            });
        })
        .catch( (error) => console.log(error)); 
    }
    ClickShowNewsNT=async (e)=>{
        let id=e.target.value;
        await axios.post('/phong-tro/quan-ly-tin-dang/hien-tin-tuc-nha-tro',{
           id
         },{headers: {'Accept': 'application/json'}})
        .then(res => {
            this.setState({
                list_NT:res.data.list_NT
            });
        })
        .catch( (error) => console.log(error)); 
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 tieudepage_mg">
                        <h2 className="tieudepage_mg-h2">Quản lý tin Nhà Trọ</h2>
                        <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                    </div>
                </div>
            
                <div className="wapper-post_manager wow fadeInUp" data-wow-delay="0.1s"> 
                        <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ảnh đại diện</th>
                            <th scope="col">Tiêu đề</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Ngày bắt đầu</th>
                            <th scope="col">Ngày kết thúc</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list_NT.map((item,index)=>
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td><img className="img-postmanager" src={item.img_avatar} alt="avatar"/></td>
                                    <td>{item.infor.title}</td>
                                    <td>{this.formatNumber(item.infor.price) ? this.formatNumber(item.infor.price) + " VND" : ""}</td>
                                    <td>{item.infor.datetime_create}</td>
                                    <td>{item.infor.datetime_finish}</td>
                                    <td>{item.infor.state_news === true ? 
                                    <button value={item._id} className="bnt-click_hidden_news" onClick={(e)=>this.ClickHiddenNewsNT(e)}>Tin đang hiện</button>
                                    :(
                                        <button
                                          className="bnt-click_show_news"
                                          value={item._id}
                                          onClick={(e) => this.ClickShowNewsNT(e)}
                                        >
                                          Tin đang ẩn (Hiện tin)
                                        </button>
                                      )}
                                    </td>
                            </tr>
                            )
                        }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PostmanagementNT;