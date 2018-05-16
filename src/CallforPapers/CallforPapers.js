import React, { Component } from 'react';
import { Row } from 'antd';
import './CallforPapers.css';
import MenuContent from '../menu';

export default class CallforPapers extends Component {
  state = {}
  componentWillMount = () => {
    document.title = "Call for Papers - IEEE SAM 2020";
  }

  render() {
    return (
      <div>
        <MenuContent />
        <Row type="flex" justify="center" >
          <div className='content'>
            <h2 className='title'>Call for Papers</h2>
            <p><span className='CallforPapers-highlight'>Technical Program – </span>The SAM Workshop is an important IEEE Signal Processing Society event dedicated to sensor array and multichannel signal processing. The organizing committee invites the international community to contribute with state-of-the-art developments in the field. SAM 2020 will feature plenary talks by leading researchers in the field as well as poster and oral sessions with presentations by the participants.</p>
            <p><span className='CallforPapers-highlight'>Research Areas – </span>Authors are invited to submit contributions related (but not limited) to the following topics:</p>
            <ul>
              <li>Adaptive beamforming</li>
              <li>Array processing for biomedical applications</li>
              <li>Array processing for communications</li>
              <li>Big data</li>
              <li>Blind source separation and channel identification</li>
              <li>Computational and optimization techniques</li>
              <li>Compressive sensing and sparsity-based signal processing</li>
              <li>Detection and estimation</li>
              <li>Direction-of-arrival estimation</li>
              <li>Distributed and adaptive signal processing</li>
              <li>Intelligent systems and knowledge-based signal processing</li>
              <li>Machine learning for signal processing</li>
              <li>Microphone and loudspeaker array applications</li>
              <li>MIMO radar</li>
              <li>Multi-antenna systems: multiuser MIMO, massive MIMO and space-time coding</li>
              <li>Multi-channel imaging and hyperspectral processing</li>
              <li>Multi-sensor processing for smart grid and energy</li>
              <li>Non-Gaussian, nonlinear, and non-stationary models</li>
              <li>Optimization techniques</li>
              <li>Performance evaluations with experimental data</li>
              <li>Radar and sonar array processing</li>
              <li>Sensor networks</li>
              <li>Signal Processing for The Internet of Things</li>
              <li>Source Localization, classification and tracking</li>
              <li>Synthetic aperture techniques</li>
              <li>Space-time adaptive processing</li>
              <li>Statistical modelling for sensor arrays</li>
              <li>Tensor signal processing</li>
              <li>Waveform diverse sensors and systems</li>
            </ul>
            <p><span className='CallforPapers-highlight'>Submission of Papers – </span>Full-length papers with 4 pages of content and 1 extra page only for references should be electronically submitted.</p>
            <p><span className='CallforPapers-highlight'>Submission of Signal Processing Letters Papers – </span>Authors of IEEE Signal Processing Letters (SPL) papers will be given the opportunity to present their work at SAM 2020, subject to space availability and approval by the Technical Program Chairs. SPL papers published between <span className='CallforPapers-highlight'>June 15, 2019 </span>and <span className='CallforPapers-highlight'>February 15, 2020 </span>are eligible for presentation at SAM 2020. Requests for presentation of SPL papers should be made by emailing the Technical Program Chairs as early as possible and the latest by <span className='CallforPapers-highlight'>May 31, 2020</span>. However, to take advantage of the advance registration rate (<span className='CallforPapers-highlight'>May 20, 2020</span>), please send your request by <span className='CallforPapers-highlight'>April 30, 2020</span>. Decision will be made within two weeks of receiving the request. Approved requests for presentation must have one author/presenter registered for SAM 2020. </p>
            <p><span className='CallforPapers-highlight'>Special Session Proposals – </span>They should be submitted by e-mail to the Technical Program Chairs and the Special Sessions Chair by September 15, 2019 and include a title, rationale, session outline, contact information and list of invited speakers. </p>
            <p><span className='CallforPapers-highlight'>Tutorial Proposals – </span>They should be submitted by e-mail to the Technical Chairs (André L. F. De Almeida: andre@gtel.ufc.br;  Qian He: qianhe@uestc.edu.cn) and the General Chairs (Zhiguo Shi: shizg@zju.edu.cn; Martin Haardt: martin.haardt@tu-ilmenau.de) and include a title, rationale, outline of the content and contact information by <span className='CallforPapers-highlight'>December 15, 2019.</span></p>
            <p><span className='CallforPapers-highlight'>Important Dates:</span></p>
            <p>Special Session Proposals: September 15, 2019</p>
            <p>Submission of Papers:  December 15, 2019 </p>
            <p>Notification of Acceptance:  February 15, 2020</p>
            <p>Final Manuscript Submission:  March 15, 2020</p>
            <p>Advance Registration:  April 15, 2020</p>
          </div>
        </Row>
        <div className='CallforPapers-bottomdiv'>
          @Colledge of Information Science & Electronic Engineering, Zhejiang University
        </div>
      </div>
    )
  }
}