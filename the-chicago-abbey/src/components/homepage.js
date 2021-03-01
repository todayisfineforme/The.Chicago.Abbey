import { Container, Row, Col, Button } from "react-bootstrap";

function Homepage(){
    return(
        <Container fluid className="h-100">
            <Row noGutters className="h-100">
                <Col sm={{span:12}} md={{span:6}} className="text-center home-menu">
                    <Row className="h-100">
                        <Col className="my-auto">
                            <h1>Food</h1>
                            <Button variant="outline-dark" size="lg" href="/menu">View Menu</Button>
                            <br/>
                            <Button variant="outline-dark" size="lg" href="/reservations">Request a Reservation</Button>
                            <br/><br/>
                            <h3>Hours</h3>
                            <p>Sunday: 11:00am - 2:00am</p>
                            <p>Monday: 11:00am - 2:00am</p>
                            <p>Tuesday: 11:00am - 2:00am</p>
                            <p>Wednesday: 11:00am - 2:00am</p>
                            <p>Thursday: 11:00am - 2:00am</p>
                            <p>Friday: 11:00am - 2:00am</p>
                            <p>Saturday: 11:00am - 3:00am</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={{span:12}} md={{span:6}} className="text-center home-music">
                    <Row className="h-100">
                        <Col className="my-auto">
                            <h1>Music</h1>
                            <Button variant="outline-dark" size="lg" href="/music">Schedule</Button>
                            <br/>
                            <Button variant="outline-dark" size="lg" href="/tickets">Buy Tickets</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Homepage;