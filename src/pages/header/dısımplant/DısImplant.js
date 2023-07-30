import React from "react";
import "./DısImplant.scss";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const DısImplant = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={350}
              src={require("../../../images/homefoto/hh2.jpg")}
              alt=""
            />
          </Col>
          <Col
            xs={12}
            style={{
              textAlign: "start",
              fontWeight: "bold",
              backgroundColor: "#003057",
              margin: "15px 0",
              padding: "30px ",
              color: "white",
            }}
          >
            <h2 style={{ fontSize: "3rem" }}>Diş İmplantları</h2>
            <p>
              Diş implantları, diş eksikliğinin kalıcı olarak giderilmesi için
              kullanılan etkili ve uzun ömürlü bir diş tedavi yöntemidir.
              İmplantlar, çene kemiğine yerleştirilen yapay diş kökleri olarak
              düşünülebilir. Bu yapay kökler, bir cerrahi işlemle çene kemiğine
              yerleştirilir ve diş eksikliği olan bölgede sağlam ve dayanıklı
              bir temel oluşturur. İmplantlar sayesinde, eksik dişlerin yerine
              estetik ve fonksiyonel olarak tam teşekküllü dişler
              yerleştirilebilir.
              <br />
              Diş implantları genellikle titanyum veya titanyum alaşımından
              yapılmıştır. Bu materyal, uzun yıllardır kullanılan bir malzeme
              olup, vücutla uyumlu ve biyouyumlu özelliklere sahiptir. Bu
              nedenle, implantlar kemikle birleşerek sağlam bir bağ oluştururlar
              ve doğal diş kökleri gibi davranırlar.
            </p>
            <ul>
              <li>Diş implantları tedavisi genellikle şu adımlardan oluşur:</li>
              <li>
                Muayene ve Değerlendirme: Diş hekiminiz, diş eksikliğinin
                boyutunu ve çene kemiğinin durumunu değerlendirecektir. Röntgen
                ve gerekli görülen diğer görüntüleme teknikleri ile implant
                yerleştirme planı yapılır.
              </li>
              <li>
                Cerrahi İmplant Yerleştirme: Lokal anestezi altında, implantlar
                çene kemiğine yerleştirilir. Bu işlem, çene kemiğinin
                yoğunluğuna ve implant sayısına göre değişebilir. İmplantlar,
                çene kemiği ile güçlü bir bağlantı oluşturmak için birkaç ay
                boyunca iyileşirler.
              </li>
              <li>
                İyileşme ve Osseointegrasyon: Cerrahi işlem sonrasında,
                implantların çene kemiği ile birleşmesi sürecine
                osseointegrasyon adı verilir. Bu, implantların kemiğe tutunarak
                güçlü bir bağ oluşturması anlamına gelir. Osseointegrasyon,
                implantın istikrarını ve dayanıklılığını sağlar.
              </li>
              <li>
                Geçici Restorasyonlar: İyileşme süreci boyunca geçici diş
                protezleri takılabilir, böylece estetik ve fonksiyonel bir
                görünüm korunur.
              </li>
              <li>
                Kalıcı Protez Uygulaması: İmplantlar tamamen iyileştikten sonra,
                özel olarak hazırlanan diş protezleri (kron, köprü veya protez)
                implantlara sabitlenir. Bu protezler, diş eksikliğini tamamen
                giderir ve doğal dişlere benzer bir görünüm ve fonksiyon sağlar.
              </li>
            </ul>
            <p>
              Diş implantları, diş eksikliğinin yerine kalıcı bir çözüm sunar ve
              komşu dişleri kesmeye veya zayıflatmaya gerek kalmadan dişlerin
              yerine konulmasına imkan tanır. Ayrıca, implantlar çene kemiğini
              uyararak çene yapısının korunmasına yardımcı olur ve yüz
              hatlarının korunmasına destek olabilir. <br />
              Diş implantları, iyi ağız hijyeni ve düzenli diş hekimi
              kontrolleri ile uzun yıllar dayanabilir. Bu nedenle, uygun adaylar
              için diş eksikliği tedavisinde tercih edilen ve başarılı sonuçlar
              veren bir seçenektir. Ancak, implant tedavisi için uygunluğunuzu
              belirlemek ve tedavi planı oluşturmak için bir diş hekimine
              danışmanız önemlidir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DısImplant;
