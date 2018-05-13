import React, { Component } from 'react';
import { } from 'antd';
import { } from "../axios";
import './HotelBooking.css';
import MenuContent from '../menu';

export default class HotelBooking extends Component {
  state = {

  }
  componentWillMount = () => {
    document.title = "Hotel Booking - IEEE SAM 2020";
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