import React from "react";
import "./doktorlar.scss";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Card } from "react-bootstrap";
const Doktorlar = () => {
  return (
    <div style={{ margin: "0 0" }}>
      <h2 style={{ margin: "30px 0", textAlign: "center", color: "#6DBEBF" }}>
        Doktor ve Asistanlarımız
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper doktorlar"
      >
        <SwiperSlide>
          <Card style={{ width: "23rem" }} className="mx-auto card">
            <Card.Img
              variant="top"
              src={require("../../../images/homefoto/homevector/aw.jpg")}
            />
            <Card.Body>
              <Card.Title>Asistan</Card.Title>
              <Card.Title>Kız İSMET</Card.Title>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "23rem" }} className="mx-auto card">
            <Card.Img
              variant="top"
              src={require("../../../images/homefoto/homevector/avm.jpg")}
            />
            <Card.Body>
              <Card.Title>Diş Hekimi </Card.Title>
              <Card.Title>Sansar SELİM</Card.Title>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "23rem" }} className="mx-auto card">
            <Card.Img
              variant="top"
              src={require("../../../images/homefoto/homevector/aw.jpg")}
            />
            <Card.Body>
              <Card.Title>Asistan</Card.Title>
              <Card.Title>MEHTAP Abla</Card.Title>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Doktorlar;
