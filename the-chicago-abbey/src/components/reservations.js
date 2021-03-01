import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Reservations(){
    return(
        <Container>
            <h1>Request a Reservation</h1>
            <h5>Groups larger than 10 must call for a reservation</h5>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="Name" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridReason">
                                <Form.Label>Occasion</Form.Label>
                                <Form.Control placeholder="Birthday, Retirement, Date" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTelephone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control placeholder="555.555.5555" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label>Number of People</Form.Label>
                                <Form.Control as="select" defaultValue="0">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridTime">
                                <Form.Label>Time Requested</Form.Label>
                                <Form.Control as="select" defaultValue="1100">
                                    <option value="1100">11:00 am</option>
                                    <option value="1130">11:30 am</option>
                                    <option value="1200">12:00 pm</option>
                                    <option value="1230">12:30 pm</option>
                                    <option value="1300">1:00 pm</option>
                                    <option value="1330">1:30 pm</option>
                                    <option value="1400">2:00 pm</option>
                                    <option value="1430">2:30 pm</option>
                                    <option value="1500">3:00 pm</option>
                                    <option value="1530">3:30 pm</option>
                                    <option value="1600">4:00 pm</option>
                                    <option value="1630">4:30 pm</option>
                                    <option value="1700">5:00 pm</option>
                                    <option value="1730">5:30 pm</option>
                                    <option value="1800">6:00 pm</option>
                                    <option value="1830">6:30 pm</option>
                                    <option value="1900">7:00 pm</option>
                                    <option value="1930">7:30 pm</option>
                                    <option value="2000">8:00 pm</option>
                                    <option value="2030">8:30 pm</option>
                                    <option value="2100">9:00 pm</option>
                                    <option value="2130">9:30 pm</option>
                                    <option value="2200">10:00 pm</option>
                                    <option value="2230">10:30 pm</option>
                                    <option value="2300">11:00 pm</option>
                                    <option value="2330">11:30 pm</option>
                                    <option value="0000">12:00 am</option>
                                    <option value="0030">12:30 am</option>
                                    <option value="0100">1:00 am</option>
                                    <option value="0130">1:30 am</option>
                                    <option value="0200">2:00 am</option>
                                    <option value="0230">2:30 am</option> 
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="outline-dark" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
};

export default Reservations;