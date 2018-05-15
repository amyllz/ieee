import React, { Component } from 'react';
import { Row } from 'antd';
import './VisitHangzhou.css';
import MenuContent from '../menu';

export default class VisitHangzhou extends Component {
  state = {}
  componentWillMount = () => {
    document.title = "Visit Sheffield - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center" className='content-row'>
          <div className='content'>
            <h2 className='title'>Visit Hangzhou</h2>
            <p>Hangzhou, Hangzhou, capital of Zhejiang Province in the east of China, is one of the more modern and prosperous cities in China. It sits at the southern end of the Grand Canal and is one of China's seven ancient national capitals.</p>
            <p>You can arrive at Hangzhou using the Hangzhou Xiaoshan International Airport.</p>
            <Row type="flex" justify="space-around" style={{ marginTop: '40px' }}>
              <img src={require("./pic2.jpg")} style={{ width: "260px", height: "180px" }} alt="pic2" />
              <img src={require("./pic4.jpg")} style={{ width: "260px", height: "180px" }} alt="pic4" />
              <img src={require("./pic3.jpg")} style={{ width: "260px", height: "180px" }} alt="pic3" />
            </Row>
          </div>
        </Row>
        <div className='bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
      </div>
      </div>
    )
  }
}