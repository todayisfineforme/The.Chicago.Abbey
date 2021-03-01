import { Container, Row, Col, Button } from "react-bootstrap";
import Item from "./item.js";

function Section(props){

    const items = props.section.items.map((item,index)=>{
        return(<Item title={item.title} description={item.description} price={item.price} key={index}/>)
    });

    return(
        <Container fluid>
            <h1 className="my-4">{props.section.section}</h1>
            <hr/>
                <Row>
                    <Col>{items}</Col>
                </Row>
        </Container>
        
    )
};

export default Section