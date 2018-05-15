import React, { Component } from 'react';
import { Row } from 'antd';
import './Sponsorship.css';
import MenuContent from '../menu';

export default class Sponsorship extends Component {
  state = {}
  componentWillMount = () => {
    document.title = "Sponsorship - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center" >
          <div className='content'>
            <h2 className='title'>Sponsorship</h2>
            <p>The SAM Workshop is an important IEEE Signal Processing Society event dedicated to sensor array and multichannel signal processing with about 200 participants. SAM 2020 will feature plenary talks by leading researchers in the field as well as poster and oral sessions with presentations by the participants.</p>
            <p>If you are interested in sponsoring this event, please contact the General Chair, Prof. Zhiguo Shi, via email: shizg@zju.edu.cn.</p>
            <p>We look forward to working with you.</p>
          </div>
        </Row>
        <img src={require("./ieee.png")} style={{ height: "80px", marginTop: "60px" }} alt="ieee" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={require("./universitylogo.jpg")} style={{ height: "80px", marginTop: "60px" }} alt="universitylogo" />
        <div className='bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}