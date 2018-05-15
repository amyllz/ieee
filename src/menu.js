import React, { Component } from 'react';
import { Menu, Icon, Row } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MenuContent extends Component {
    state = {
        current: '',
    }

    componentWillMount = () => {
        let current = window.location.pathname.slice(1);
        this.setState({ current: current });
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Row type="flex" justify="center" align="top">
                <div style={{ width: '100%' }}>
                    <a href='/'><img src={require("./topLogo.png")} style={{ width: "300px", marginTop: "20px" }} alt="topLogo" /></a>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="Sponsorship">
                            <a href="/Sponsorship">Sponsorship</a>
                        </Menu.Item>
                        <Menu.Item key="CallforPapers">
                            <a href="/CallforPapers">Call for Papers</a>
                        </Menu.Item>
                        <SubMenu title={<span>General Info.&nbsp;&nbsp;<Icon type="down" /></span>}>
                            <Menu.Item key="VisitSheffield"><a href="/VisitSheffield">Visit Hangzhou</a></Menu.Item>
                            <Menu.Item key="WorkshopVenue"><a href="/WorkshopVenue">Workshop Venue</a></Menu.Item>
                            <Menu.Item key="HotelBooking"><a href="/HotelBooking">Hotel Booking</a></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="Organisation">
                            <a href="/Organisation">Organisation</a>
                        </Menu.Item>
                        <SubMenu title={<span>Programme&nbsp;&nbsp;<Icon type="down" /></span>}>
                            <Menu.Item key="PlenarySpeakers"><a href="/PlenarySpeakers">Plenary Speakers</a></Menu.Item>
                            <Menu.Item key="Tutorials"><a href="/Tutorials">Tutorials</a></Menu.Item>
                            <Menu.Item key="SpecialSessions"><a href="/SpecialSessions">Special Sessions</a></Menu.Item>
                            <Menu.Item key="ConferenceProgramme"><a href="/ConferenceProgramme">Conference Programme</a></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="PaperSubmission">
                            <a href="/PaperSubmission">Paper Submission</a>
                        </Menu.Item>
                        <Menu.Item key="Registration">
                            <a href="/Registration">Registration</a>
                        </Menu.Item>
                    </Menu>
                </div>
            </Row>
        );
    }
}
