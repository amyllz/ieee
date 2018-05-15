import React, { Component } from 'react';
import { Row } from 'antd';
import { } from "../axios";
import './WorkshopVenue.css';
import MenuContent from '../menu';

export default class WorkshopVenue extends Component {
  state = {}
  componentWillMount = () => {
    document.title = "Workshop Venue - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center" >
          <div className='content'>
            <h2 className='title'>Workshop Venue</h2>
            <p>The workshop will be held at Hangzhou Jinxi Villa, a hotel surrounded by West Lake.</p>
            <p><img src={require("./location.jpg")} style={{ width: "500px" }} alt="hangzhou" /></p>
            <p><img src={require("./location2.jpg")} style={{ width: "500px", marginTop: '14px' }} alt="hangzhou" /></p>
            <p style={{ marginTop: '14px' }}>Workshop banquet will be held in the Shan Wai Shan Restaurant, located in Hangzhou Botanical Garden.</p>
            <img src={require("./rest.jpg")} style={{ width: "500px" }} alt="hangzhou" />
          </div>
        </Row>
        <div className='Organisation-bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}