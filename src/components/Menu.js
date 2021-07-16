import React from 'react';
import "./Menu.css";
import { Card, Row, Col } from 'react-bootstrap';

const Menu = (props) => {
    return (
        <div className="Menu">
            <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={props.menuIMG} />
                        <Card.Body>
                            <Card.Title>{props.menuName}</Card.Title>
                            <span className="price">{props.productPrice}</span>
                            <Card.Text>
                                <p>{props.menuRecipe}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Menu;