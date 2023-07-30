import React from "react";
import "./Iletısım.scss";
import { HomeCarusel, Map } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const Iletısım = () => {
  return (
    <div>
      <HomeCarusel />
      <Container
        style={{
          backgroundColor: "#003057",
          color: "white",
          padding: "15px",
          marginTop: "30px",
          marginBottom: "30px",
          fontWeight: "bold",
          borderRadius: 15,
        }}
      >
        <Row style={{ textAlign: "start", margin: "30px 0" }}>
          <Col md={12}>
            <h3>İletişim Bilgileri:</h3>
            <p>
              Adres: İncili Pınar, Buhara iş merkezi, Prof. Muammer Aksoy Blv.
              No:44 asma kat, 27000 Şehitkamil/Gaziantep
            </p>
            <p>Tlf No: 0544 833 27 27</p>
            <p>
              Klinik Yetkilisi:{" "}
              <h4 style={{ textShadow: "5px 6px 4px #00B7AA" }}>
                Recep AYDEMİR
              </h4>
            </p>
          </Col>
        </Row>
      </Container>
      <Map n />
    </div>
  );
};

export default Iletısım;
