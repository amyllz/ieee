import React, { Component } from 'react';
import { } from 'antd';
import { } from "../axios";
import './PlenarySpeakers.css';
import MenuContent from '../menu';

export default class PlenarySpeakers extends Component {
  state = {

  }
  componentWillMount = () => {
    document.title = "Plenary Speakers - IEEE SAM 2020";
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