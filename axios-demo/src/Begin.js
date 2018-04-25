import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './config';

export default class Begin extends Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
        
    // }
    componentWillMount(){
        //
        console.log("11111111");
        this.getInfoMation();
    }
    getInfoMation(){
        // axios({
        //     url:'http://wxdev3.600280.com/seller/city/list',
        //     method:'post',
        //     data:{
        //         "encrypt": "",
        //         "version": "",
        //         "deviceType": "",
        //         "appType": "",
        //         "appVersion": ""
        //     }
        // }).then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // })
        axios.post('http://10.167.3.149/seller/city/list').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err);
        })
    }
    // getInfoMation(){
    //     let param = {
    //         "encrypt": "",
    //         "version": "",
    //         "deviceType": "",
    //         "appType": "",
    //         "appVersion": ""
    //     }
    //     ReactRequestI('http://wxdev3.600280.com/seller/city/list',param).then(res=>{
    //       console.log(res);
    //     })
    //   }
    render(){
        this.getInfoMation();
        return (
            <div>
                <h1>this is my axios first page</h1>
            </div>
        )
    }
}