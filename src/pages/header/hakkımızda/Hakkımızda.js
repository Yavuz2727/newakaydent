import React, { useState } from "react";
import "./Hakkımızda.scss";
import {
  DahaIyısı,
  DahaIyısıBottom,
  Doktorlar,
  Hastalarımız,
  HomeCarusel,
} from "../../../components";
import { Button, Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../constaınts";
const Hakkımızda = () => {
  const { Vizyon } = constants;
  const [vizyon, setVizyon] = useState(0);

  return (
    <div>
      <HomeCarusel />
      <DahaIyısıBottom />
      <div className="hakkımızda">
        {" "}
        <Container style={{ display: "block", margin: "auto" }}>
          <Row
            style={{ textAlign: "center", margin: "auto" }}
            className="hakkımızdarow"
          >
            <Col xs={6} md={4}>
              <Button
                variant="success"
                onClick={() => setVizyon(0)}
                className="btnhak"
              >
                Misyonumuz
              </Button>
            </Col>
            <Col xs={6} md={4}>
              <Button
                variant="secondary"
                onClick={() => setVizyon(1)}
                className="btnhak"
              >
                Vizyonumuz
              </Button>
            </Col>
            <Col xs={6} md={4}>
              <Button
                variant="warning"
                onClick={() => setVizyon(2)}
                className="btnhak"
              >
                Değerlerimiz
              </Button>
            </Col>
          </Row>
        </Container>
        <Container
          style={{
            margin: "100px 0",
            display: "block",
            margin: "auto",
            padding: "20px 0",
          }}
        >
          <Row>
            <Col xs={12} md={6}>
              <img
                width={370}
                height={350}
                src={require(`../../../images/homefoto/homevector/v${Vizyon[vizyon].number}.jpg`)}
                alt=""
              />
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textAlign: "center",
                width: 400,

                display: "block",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <p>{Vizyon[vizyon].text}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Doktorlar />
      <Hastalarımız />
      &nbsp;
    </div>
  );
};

export default Hakkımızda;
