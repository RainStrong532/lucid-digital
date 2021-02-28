import React from 'react';
import "../../commonStyles/styles/footer.css"
import c from '../../commonStyles/images/c.svg'
import v from '../../commonStyles/images/v.png'
import twitter from '../../commonStyles/images/twitter.png'
import facebook from '../../commonStyles/images/facebook.png'
import be from '../../commonStyles/images/be.png'
import linked from '../../commonStyles/images/linked.png'
import { Col, Container, Row } from 'reactstrap';
export const Footer = () => {
    return (
        <div className="footer">
            <div className="cnt">
                <div className="footer-cnt">
                    <div className="section">
                        <Row>
                            <Col xl={2}>
                                <div className="title">CONTACT</div>
                                <div className="ft-content">
                                    <div className="key">Bussiness inquiries:</div>
                                    <div className="value">(Minh) +84 0909 571 499</div>
                                    <br/>
                                    <div className="key">Press inquiries/ General question:</div>
                                    <div className="value">contact@lucidigital.com</div>
                                </div>
                            </Col>
                            <Col xl={2}>
                                <div className="title">STUDIO LOCATION</div>
                                <div className="ft-content">
                                    <div className="key">Address:</div>
                                    <div className="value">19/14 Doan Thi Diem, Ward 1, Phu Nhuat District, Ho Chi Minh, Vietnam</div>
                                </div>
                            </Col>
                            <Col xl={2}>
                                <div className="title">SOCIAL NETWORK</div>
                                <div className="ft-content">
                                    <div className="key">We also would like you to see our works via:</div>
                                    <div className="value">
                                        <ul>
                                            <li>
                                                <img src={linked} alt="icon" />
                                            </li>
                                            <li>
                                                <img src={facebook} alt="icon" />
                                            </li>
                                            <li>
                                                <img src={be} alt="icon" />
                                            </li>
                                            <li>
                                                <img src={v} alt="icon" />
                                            </li>
                                            <li>
                                                <img src={twitter} alt="icon" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="copyright">
                        <img src={c} alt="icon" />
                        <p>LUCI DIGITAL 2020 / ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </div>
        </div>
    )
}