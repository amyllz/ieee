import React, { Component } from 'react';
import { message, Row, Col, Layout } from 'antd';
import { getAllTeaGardenIDs } from "../axios";
import './Home.css';
import MenuContent from '../menu';
const { Header, Footer, Sider, Content } = Layout;

export default class Home extends Component {
  state = {}

  componentWillMount = () => {
    document.title = "IEEE SAM 2020 Workshop";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <div className='Home-picdiv'>
          <img src={require("./hangzhoulogo.png")} style={{ width: "100px", marginTop: "60px" }} alt="hangzhou" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={require("./universitylogo.jpg")} style={{ width: "80px", marginTop: "60px" }} alt="hangzhou" />
          <p style={{ fontSize: '40px', marginTop: '40px' }}>IEEE SAM 2020</p>
          <p>Zhejiang University,Hangzhou,China</p>
          <p>June 8-11,2020</p>
        </div>
        <div className='bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}