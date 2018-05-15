import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Sponsorship from './Sponsorship/Sponsorship';
import CallforPapers from './CallforPapers/CallforPapers';
import VisitHangzhou from './VisitHangzhou/VisitHangzhou';
import WorkshopVenue from './WorkshopVenue/WorkshopVenue';
import HotelBooking from './HotelBooking/HotelBooking';
import Organisation from './Organisation/Organisation';
import PlenarySpeakers from './PlenarySpeakers/PlenarySpeakers';
import Tutorials from './Tutorials/Tutorials';
import SpecialSessions from './SpecialSessions/SpecialSessions';
import ConferenceProgramme from './ConferenceProgramme/ConferenceProgramme';
import PaperSubmission from './PaperSubmission/PaperSubmission';
import Registration from './Registration/Registration';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Sponsorship' component={Sponsorship} />
            <Route path='/CallforPapers' component={CallforPapers} />
            <Route path='/VisitHangzhou' component={VisitHangzhou} />
            <Route path='/WorkshopVenue' component={WorkshopVenue} />
            <Route path='/HotelBooking' component={HotelBooking} />
            <Route path='/Organisation' component={Organisation} />
            <Route path='/PlenarySpeakers' component={PlenarySpeakers} />
            <Route path='/Tutorials' component={Tutorials} />
            <Route path='/SpecialSessions' component={SpecialSessions} />
            <Route path='/ConferenceProgramme' component={ConferenceProgramme} />
            <Route path='/PaperSubmission' component={PaperSubmission} />
            <Route path='/Registration' component={Registration} />
        </Switch>
    </Router>
    , document.getElementById('root'));
