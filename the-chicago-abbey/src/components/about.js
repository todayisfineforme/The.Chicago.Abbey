import { Container, Row, Col } from "react-bootstrap";

function About(){
    return(
        <Container>
            <Row>
                <Col>
                    <h1>About The Abbey</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="https://express-images.franklymedia.com/6616/sites/350/2019/08/17135248/The_Abbey_Pub__Grill_1_Chicago_IL_2009.jpg" height="350vh"></img>
                </Col>
            </Row>
            <Row>
                <p>In lectus risus, maximus eu ipsum a, porta maximus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sed leo est. Morbi posuere eleifend neque. Sed laoreet commodo dui. Duis sit amet pharetra est. Nulla facilisi. Vivamus rhoncus sem in ipsum malesuada, at ullamcorper nulla vulputate. Integer elit diam, hendrerit a elit in, rhoncus dignissim nisl. Quisque eu mattis sem. Pellentesque id justo faucibus, porta ante a, fringilla nibh. Nullam porttitor lacus ut augue cursus, sit amet imperdiet orci molestie.</p>
            </Row>
        </Container>
    )
};

export default About;