import React from "react";
import "./HomeGalerı.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
const HomeGalerı = () => {
  return (
    <Container className="homegaleri">
      <h2>Galeri</h2>
      <Row>
        <Col xs={12} md={4}>
          <Image
            width={450}
            style={{ height: 275 }}
            src={require("../../../images/carouselfoto/c1.jpg")}
            thumbnail
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            width={450}
            style={{ height: 275 }}
            src={require("../../../images/homefoto/homevector/v1.jpg")}
            thumbnail
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            width={450}
            style={{ height: 275 }}
            src={require("../../../images/homefoto/homevector/v2.jpg")}
            thumbnail
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            width={450}
            style={{ height: 275 }}
            src={require("../../../images/carouselfoto/c2.jpg")}
            thumbnail
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            width={450}
            style={{ height: 275 }}
            src={require("../../../images/carouselfoto/c3.jpg")}
            thumbnail
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            width={450}
            style={{ height: 275 }}
            src={require("../../../images/carouselfoto/c5.jpg")}
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeGalerı;
