import React, { Component } from 'react';
import { Row } from 'antd';
import './PreviousInfo.css';
import MenuContent from '../menu';

export default class PreviousInfo extends Component {
  state = {}
  componentWillMount = () => {
    document.title = "Call for Papers - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center">
          <div className='content' id='PreviousInfo-div'>
            <h2 className='title'>Previous Conferences Information</h2>
            <p className='PreviousInfo-highlight'>SAM 2018</p>
            <p>July 8-11, 2018, Sheffield, United Kingdom</p>
            <p><a href='http://www.sam2018.org' target='_blank'>SAM 2018: Website</a></p>

            <p className='PreviousInfo-highlight'>SAM 2016</p>
            <p>July 10-13, 2016, Rio de Janeiro, Brazil</p>
            <p><a href='http://sam2016.cetuc.puc-rio.br' target='_blank'>SAM 2016: Website</a></p>

            <p className='PreviousInfo-highlight'>SAM 2014</p>
            <p>June 22-25, A Coruna, Spain</p>
            <p><a href='http://signalprocessingsociety.org/SAM2014/index-2.html' target='_blank'>SAM 2014: Website</a></p>

            <p className='PreviousInfo-highlight'>SAM 2010</p>
            <p>October 4-7, 2010, Israel</p>
            <p><a href='http://signalprocessingsociety.org/SAM2010' target='_blank'>SAM 2010: Website</a></p>

            <p className='PreviousInfo-highlight'>SAM 2008</p>
            <p>July 21-23, 2008, Darmstadt, Germany</p>
            <p><a href='http://signalprocessingsociety.org/SAM2008' target='_blank'>SAM 2008: Website</a></p>

            <p className='PreviousInfo-highlight'>SAM 2002</p>
            <p>August 4-6, 2002, Key Bridge Marriott Hotel, Roslyn, VA, USA</p>
            <p><a href='http://signalprocessingsociety.org/SAM2002/index.htm' target='_blank'>SAM 2002: Website</a></p>

          </div>
        </Row>
        <div className='PreviousInfo-bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}