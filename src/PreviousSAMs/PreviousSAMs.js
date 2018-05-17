import React, { Component } from 'react';
import { Row } from 'antd';
import './PreviousSAMs.css';
import MenuContent from '../menu';

export default class PreviousSAMs extends Component {
  state = {}
  componentWillMount = () => {
    document.title = "Call for Papers - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center">
          <div className='content' id='PreviousSAMs-div'>
            <h2 className='title'>Previous SAMs</h2>

            <p className='PreviousSAMs-highlight'><a href='http://www.sam2018.org' target='_blank'>SAM 2018</a></p>
            <p>July 8-11, 2018, Sheffield, United Kingdom</p>

            <p className='PreviousSAMs-highlight'><a href='http://sam2016.cetuc.puc-rio.br' target='_blank'>SAM 2016</a></p>
            <p>July 10-13, 2016, Rio de Janeiro, Brazil</p>

            <p className='PreviousSAMs-highlight'><a href='http://signalprocessingsociety.org/SAM2014/index-2.html' target='_blank'>SAM 2014</a></p>
            <p>June 22-25, 2014, A Coruna, Spain</p>

            <p className='PreviousSAMs-highlight'><a href='http://signalprocessingsociety.org/SAM2010' target='_blank'>SAM 2010</a></p>
            <p>October 4-7, 2010, Israel</p>

            <p className='PreviousSAMs-highlight'><a href='http://signalprocessingsociety.org/SAM2008' target='_blank'>SAM 2008</a></p>
            <p>July 21-23, 2008, Darmstadt, Germany</p>

            <p className='PreviousSAMs-highlight'><a href='http://signalprocessingsociety.org/SAM2002/index.htm' target='_blank'>SAM 2002</a></p>
            <p>August 4-6, 2002, Key Bridge Marriott Hotel, Roslyn, VA, USA</p>
          </div>
        </Row>
        <div className='bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}