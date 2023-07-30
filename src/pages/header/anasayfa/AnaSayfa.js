import React from "react";
import "./AnaSayfa.scss";

import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import {
  CardAcıklama,
  CardHızmet,
  DahaIyısı,
  DahaIyısıBottom,
  Doktorlar,
  Hastalarımız,
  HomeGalerı,
  Map,
  NedenBız,
  NedenBızBottom,
} from "../../../components";
const anasayfa = () => {
  return (
    <div>
      <Carousel
        className="carusel"
        data-bs-theme="dark"
        style={{ backgroundColor: "#003057", color: "white" }}
      >
        <Carousel.Item>
          <img
            className="d-block h-25 w-75 m-auto"
            src={require("../../../images/carouselfoto/c1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Bilim ve Kalite</h5>
            <p>
              Teknolojik gelişmeleri yakından takip edip sizlere daha kaliteli
              bir hizmet vermekteyiz.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-75 m-auto mb-5"
            src={require("../../../images/carouselfoto/c5.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Güler Yüzlü Karşılama</h5>
            <p>
              Siz değerli müşterilerimizi sıcak kanlılık ve samimiyet ile
              karşılıyoruz.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-75 m-auto"
            src={require("../../../images/carouselfoto/c3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Güçlü ve Sağlıklı Bir Diş</h5>
            <p>
              Özgürce bir gülümseme ile hayatınızdaki mutluluklarınızı
              gizlemeyeceksiniz..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <DahaIyısı />
      <CardHızmet />
      <CardAcıklama />
      <NedenBız />
      <HomeGalerı />
      <Doktorlar />
      <Hastalarımız />
      <DahaIyısıBottom />
      <Map />
    </div>
  );
};

export default anasayfa;
