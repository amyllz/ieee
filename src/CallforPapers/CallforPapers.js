import React, { Component } from 'react';
import { } from 'antd';
import { } from "../axios";
import './CallforPapers.css';
import MenuContent from '../menu';

export default class CallforPapers extends Component {
  state = {

  }
  componentWillMount = () => {
    document.title = "Call for Papers - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <p style={{ fontSize: '2rem', marginTop: '20%' }}>under construction</p>
      </div>
    )
  }
}