import { React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Section from "./menuComponents/section.js";
import menuData from "../data/menuData.js";

function Menu(){

    const sections = menuData.map((section,index)=>{
        return(<Section section={section} key={index}/>)
    })

    return(
        <Container fluid>
            {sections}
        </Container>
    )
};

export default Menu;