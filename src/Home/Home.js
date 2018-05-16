import React, { Component } from 'react';
import { message, Row, Col, Layout } from 'antd';
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
        <Row type="flex" justify="center" align="middle" className='Home-picdiv'>
          <div>
            <p>THE ELEVENTH IEEE SENSOR ARRAY AND </p>
            <p>MULTICHANNEL SIGNAL PROCESSING WORKSHOP</p>
            <p>June 8 - 11, 2020</p>
            <p>HANGZHOU, CHINA</p>
          </div>
        </Row>
        <div className='bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}
