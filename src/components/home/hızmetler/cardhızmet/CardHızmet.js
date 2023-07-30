import React from "react";
import "./CardHızmet.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../../constaınts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idState } from "../../../../store/cardhızmet/cardhızmet";

const CardHızmet = () => {
  const dispatch = useDispatch();

  const { CardHuzmet } = constants;
  return (
    <div>
      <h2 style={{ margin: "auto", textAlign: "center" }}>Hizmetler</h2>
      <Container className="cardhizmet">
        <Row className="justify-content-md-center cardrow ">
          {CardHuzmet.map((item, index) => (
            <Col
              style={{ cursor: "pointer" }}
              key={index}
              xs={12}
              md={3}
              onClick={() => dispatch(idState(item.number))}
            >
              <Card className="bg-dark text-white">
                <Card.Img
                  src={require(`../../../../images/homefoto/hh${item.number}.jpg`)}
                  alt="Card image"
                />
                <Card.ImgOverlay className="top-card-title">
                  <div>
                    <Card.Title className="card-title">{item.name}</Card.Title>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardHızmet;
