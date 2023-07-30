import React, { useEffect, useState } from "react";
import "./CocukDıs.scss";
import Confetti from "react-confetti";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
const CocukDıs = () => {
  const [Confeti, setConfeti] = useState(true);
  useEffect(() => {
    const swalToast = (title, icon = "info", timer = 4000) => {
      // icon: 'success', 'error', 'warning', 'info', 'question'
      Swal.fire({
        title: title,
        icon: icon,
        timer: timer,
        showConfirmButton: true,
      });
    };
    const handleButtonClick = () => {
      swalToast("Çocuklarınız Bizim için Çok kıymetlidir..", "success", 4000);
    };
    const timeoutId = setTimeout(() => {
      setConfeti(false);
    }, 7000);
    handleButtonClick();
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      {Confeti && <Confetti width={2000} height={2000} />}

      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={500}
              src={require("../../../images/homefoto/hh4.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Çocuk Diş Hekimliği</h2>
            <p>
              Çocuk diş hekimliği, çocukların (bebekler, çocuklar ve gençler)
              ağız ve diş sağlığı ile ilgilenen bir diş hekimliği dalıdır. Bu
              alandaki uzmanlar, çocukların diş ve ağız sağlığını korumak,
              tedavi etmek ve geliştirmek için eğitim almış diş hekimleridir.
              Çocuk diş hekimliği, çocukların dişlerinin gelişim aşamalarını
              anlamak, önleyici tedbirler almak, tedavi yöntemleri uygulamak ve
              çocuklara diş sağlığı hakkında eğitim vermekle ilgilenir. <br />
              Çocuk diş hekimliği, çocukların diş hekimliği deneyimini olumlu ve
              rahatlatıcı hale getirmeyi amaçlar. Çocuklar diş hekimine
              gitmekten korkabilirler veya tedirgin olabilirler. Bu nedenle,
              çocuk diş hekimleri, çocuklara dostane ve sakin bir ortamda tedavi
              sunmak için çocuklarla iletişim kurma ve onları rahatlatma
              konusunda özel eğitim alır.
            </p>
            <ul>
              <li>Çocuk diş hekimliği, aşağıdaki temel alanları kapsar:</li>
              <li>
                Diş muayeneleri: Çocukların ağız ve diş sağlığını değerlendiren
                düzenli muayeneler yaparlar. Erken teşhis sayesinde çocuklarda
                diş çürükleri ve diğer sorunlar hızlı bir şekilde tespit
                edilebilir.
              </li>
              <li>
                Diş temizliği ve flor uygulaması: Diş taşı temizliği ve dişlerin
                florla güçlendirilmesi gibi önleyici işlemleri
                gerçekleştirirler. Bu sayede çocukların diş çürüğü riski
                azaltılır.
              </li>
              <li>
                Dolgu ve tedaviler: Çocuklarda oluşan diş çürüklerinin
                tedavisinde dolgu gibi işlemleri uygularlar. Ayrıca, diş
                travmaları ve diğer diş sorunları için tedavi seçenekleri
                sunarlar.
              </li>
              <li>
                Çocuklara diş sağlığı eğitimi: Çocuklara doğru diş fırçalama
                teknikleri, diş ipi kullanımı ve sağlıklı beslenme
                alışkanlıkları gibi diş sağlığı ile ilgili eğitim vererek,
                çocukların dişlerini sağlıklı tutmalarını teşvik ederler.
              </li>
              <li>
                Diş gelişimi ve ortodontik izleme: Çocukların diş gelişimini
                izleyerek, düzensiz diş dizilimleri veya çene yapısındaki
                problemleri tespit ederler. Gerekirse, ortodontik tedavi
                ihtiyacını belirler ve uzman bir ortodontiste yönlendirirler.
              </li>
            </ul>
            <p>
              Çocuk diş hekimleri, çocukların diş hekimliği deneyimini olumlu ve
              keyifli kılmak için oyuncaklar, resimli kitaplar ve sakin bir
              ortam gibi çocuk dostu teknikler kullanabilirler. Böylece,
              çocukların diş hekimine olan korkularını azaltmak ve gelecekteki
              diş sağlığını olumlu yönde etkilemek mümkün olur. <br />
              Erken yaşta çocuklara düzenli diş hekimliği kontrollerine başlamak
              ve sağlıklı diş alışkanlıkları kazandırmak, çocukların
              yetişkinlikte de iyi diş sağlığına sahip olmalarına yardımcı olur.
              Bu nedenle, çocuk diş hekimliği büyük bir öneme sahiptir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CocukDıs;
