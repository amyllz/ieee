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
            <p>The workshop will be held at Zhejiang University. </p>
            <img src={require("./location.jpg")} style={{ height: "300px" }} alt="hangzhou" />
          </div>
        </Row>
        <div className='bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}