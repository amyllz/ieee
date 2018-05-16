import React, { Component } from 'react';
import { Row } from 'antd';
import './Organisation.css';
import MenuContent from '../menu';

export default class Organisation extends Component {
  state = {

  }
  componentWillMount = () => {
    document.title = "Organisation - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center" >
          <div className='content'>
            <h2 className='title'>Organising Committee</h2>
            <p className='Organisation-title'>General Chairs</p>
            <p>Martin Haardt, TU Ilmenau, Germany</p>
            <p>Zhiguo Shi, Zhejiang University, China</p>
            <p className='Organisation-title'>Technical Chairs</p>
            <p>André L. F. De Almeida, Federal U Ceará, Brazil</p>
            <p>Qian He, University of Electronic Science and Technology of China, China</p>
            <p className='Organisation-title'>IEEE SAM TC Representative</p>
            <p>Mónica Bugallo, Stony Brook University, US</p>
            <p className='Organisation-title'>Special Sessions Chair</p>
            <p>Lei Huang, Shenzhen University, China</p>
            <p>Yujie Gu, Temple University, US</p>
            <p className='Organisation-title'>Finance Chair</p>
            <p>Xiaopeng Yang, Beijing Institute of Technology, China</p>
            <p className='Organisation-title'>Publicity Chair</p>
            <p>Antonio De Maio, University of Naples Federico II, Italy</p>
            <p className='Organisation-title'>Local Arrangement Chair</p>
            <p>Junfeng Chen, Zhejiang University, China</p>
            <p className='Organisation-title'>Publication and Registration Chair</p>
            <p>Bo Chen, Xidian University, China</p>
          </div>
        </Row>
        <div className='Organisation-bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
      </div>
      </div>
    )
  }
}