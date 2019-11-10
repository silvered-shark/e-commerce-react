import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col, Card, Table, Form, Button} from "react-bootstrap";
import "./assets/css/user.css";
import { LiAi, LiIs } from "../../components/LiComponent/CommonLiComponent";
import {
  headerPoppers,
  asideData,
  headerFeatureList
} from "../../inc/users/users";
import { HeaderComponent } from "../../components/header/Header";

const PaymentPage = () => {
  return (
    <>
      <div className="allWrapper">
        <HeaderComponent/>
        <div className="userBodyArea clearfix" id="userBodyArea">
          <Container fluid={true} className="pl-0 pr-0">
            <Row noGutters>
              <Col sm="2">
                <aside
                  className="userAsideBar pt-3 clearfix shadow"
                  id="userAsideBar"
                >
                  <nav className="userNav">
                    <ul className="userNavBar">
                      {asideData.map(aside => (
                        <LiAi
                          key={Math.floor(Math.random() * 10)}
                          ListClass={aside.LIST_CLASS}
                          Title={aside.TITLE}
                          Url={aside.URL}
                          IconName={aside.ICON_NAME}
                          AnchorClass={aside.ANCHOR_CLASS}
                        />
                      ))}
                    </ul>
                    {/* end of userNavBar */}
                  </nav>
                  {/* end of userNav */}
                </aside>
                {/* end of aside */}
              </Col>
              {/* end of Col */}

              <Col>
                <main
                  className="userMainContent clearfix bgImage bgImg03"
                  id="userMainContent"
                >
                  <section
                    className="myOrderArea secGap clearfix"
                    id="myOrderArea"
                  >
                    <Container fluid={true}>
                      <Row>
                        <Col>
                          <Card>
                            <Card.Body>
                              <Table responsive className="cardTable">
                                <thead>
                                  <tr>
                                    <th> Payment methods</th>
                                    <th> Actions</th>
                                  </tr>
                                </thead>
                                {/* end of thead */}

                                <tbody>
                                  <tr>
                                    <td className="cardInfotd">
                                      <div className="cardPaymentDetails">
                                        <h3 className="payTitle">
                                          Visa{" "}
                                          <span className="cardNumber">
                                            **** **** **** 5365
                                          </span>
                                        </h3>
                                        <p className="payExp">
                                          Expires in 09/21
                                        </p>
                                      </div>
                                      {/* end of cardPaymentDetails */}
                                    </td>
                                    {/* end of td */}

                                    <td class="actionBtntd">
                                      <Link
                                        to="/"
                                        className="btn btnActionUpdate"
                                      >
                                        Update
                                      </Link>
                                      <Link
                                        to="/"
                                        className="btn btnActionDelete"
                                      >
                                        Delete
                                      </Link>
                                    </td>
                                    {/* end of td */}
                                  </tr>
                                  {/* end of tr */}
                                </tbody>
                                {/* end of tbody */}
                              </Table>
                              {/* end of Table */}
                              <Link to="#" className="btn btn-primary btnSm">
                                Add payment method
                              </Link>
                            </Card.Body>
                            {/* end of Card.Body */}
                            <Card.Body className="addPaymentCard">
                              <Row>
                                <Col sm="6">
                                  <Form className="selectPaymentOption">
                                    <div className="formRadioGroup bgGray mb-2">
                                      <Form.Check
                                        className="formRadio"
                                        type="radio"
                                        label="Mesa"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                      />
                                    </div>
                                    {/* end of formBody */}

                                    <div className="formRadioGroup bgGray mb-2">
                                      <Form.Check
                                        className="formRadio"
                                        type="radio"
                                        label="Paypal"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                      />

                                      <div className="payInfoDetails clearfix">
                                        <hr className="hrBorder" />
                                        <div className="cardInfoForm p-3">
                                          <Row className="align-items-center">
                                            <Col sm="10">
                                              <Form.Group>
                                                <Form.Label>
                                                  Card number
                                                </Form.Label>
                                                <Form.Control
                                                  type="text"
                                                  id="card-number"
                                                />
                                              </Form.Group>
                                              {/* end of Form.Group */}
                                            </Col>
                                            {/* end of Form.Group */}

                                            <Col>
                                              <img
                                                src="../assets/images/user/card_icon_img.png"
                                                alt=""
                                              />
                                            </Col>
                                            {/* end of Col */}
                                          </Row>
                                          {/* end of Row */}

                                          <Row className="align-items-center justify-content-between">
                                            <Col sm="3">
                                              <Form.Group>
                                                <Form.Label>
                                                  Expiry date
                                                </Form.Label>
                                                <ul class="cardPayFiled d-flex align-items-center justify-content-end">
                                                  <li>
                                                    <Form.Control
                                                      type="text"
                                                      id="card-mm"
                                                      placeholder="MM"
                                                    />
                                                  </li>
                                                  <li class="cardBl">/</li>
                                                  <li>
                                                    <Form.Control
                                                      type="text"
                                                      id="card-yy"
                                                      placeholder="YY"
                                                    />
                                                  </li>
                                                </ul>
                                                {/* end of cardPayFiled */}
                                              </Form.Group>
                                              {/* end of Form.Group */}
                                            </Col>
                                            {/* end of Col */}

                                            <Col sm={{ offset: 4 }}>
                                              <Form.Group>
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control
                                                  type="text"
                                                  id="card-cvv"
                                                />
                                              </Form.Group>
                                              {/* end of Form.Group */}
                                            </Col>
                                            {/* end of Col */}

                                            <Col sm="2">
                                              <img src="" alt="" />
                                            </Col>
                                            {/* end of Col */}
                                          </Row>
                                          {/* end of Row */}

                                          <Row>
                                            <Col>
                                              <Button
                                                variant="primary"
                                                type="submit"
                                              >
                                                Add
                                              </Button>
                                            </Col>
                                            {/* end of Col */}
                                          </Row>
                                          {/* end of Row */}
                                        </div>
                                        {/* end of cardInfoForm */}
                                      </div>
                                      {/* end of payInfoDetails */}
                                    </div>
                                    {/* end of formBody */}
                                  </Form>
                                  {/* end of Form */}
                                </Col>
                                {/* end of Col */}
                              </Row>
                              {/* end of Row */}
                            </Card.Body>
                            {/* end of Card.Body */}
                          </Card>
                          {/* end of Card */}
                        </Col>
                        {/* end of Col */}
                      </Row>
                      {/* end of Row */}
                    </Container>
                    {/* end of Container */}
                  </section>
                  {/* end of myOrderArea */}
                </main>
                {/* end of mainContent */}
              </Col>
              {/* end of Col */}
            </Row>
            {/* end of Row */}
          </Container>
          {/* end of Container */}
        </div>
        {/* end of userBodyArea */}
      </div>
      {/* end of allWrapper */}
    </>
  );
};

export default PaymentPage;
