import { Container, Row, Col, Button } from "react-bootstrap";

function Item(props){
    return(
        <Container>
            <Row className="my-2">
                <h3>{props.title}</h3>
            </Row>
            <Row>
                <Col ><p>{props.description}</p></Col>
                <Col><h4>{props.price}</h4></Col>
            </Row>
        </Container>
    )
};
export default Item;