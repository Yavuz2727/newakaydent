import React from "react";
import "./OnleyıcıDısHekımlıgı.scss";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const OnleyıcıDısHekımlıgı = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={500}
              src={require("../../../images/homefoto/önleyıcıdıshek.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Önleyici Diş Hekimliği</h2>
            <p>
              Diş önleyici hekimliği (preventif diş hekimliği), diş ve diş eti
              hastalıklarının önlenmesi ve ağız sağlığının korunması için alınan
              önleyici tedbirleri içeren diş hekimliği dalıdır. Bu alan,
              dişlerin sağlıklı kalmasını sağlamak ve çeşitli ağız
              problemlerinin oluşmasını önlemek amacıyla düzenli kontroller,
              temizlikler ve tedbirlerle ilgilenir. <br />
              Diş önleyici hekimliğinin temel amacı, ağızda plak ve bakteri
              birikimini minimum düzeye indirerek çürüklerin ve diş eti
              hastalıklarının oluşumunu engellemektir. Bu, uzun vadede ağız
              sağlığını korurken diş tedavilerine ve cerrahi müdahalelere
              ihtiyacı azaltmaya yardımcı olur.
            </p>
            <ul>
              <li>
                Diş önleyici hekimliğinin kapsamında şu tedbirler ve uygulamalar
                yer alır:
              </li>
              <li>
                Periyodik Diş Kontrolleri: Düzenli olarak yapılması gereken diş
                muayeneleri, erken dönemde diş çürükleri, diş eti hastalıkları
                ve diğer ağız problemleri tespit edilerek tedavi sürecinin
                başlamasını sağlar.
              </li>
              <li>
                Diş Temizliği (Diş Taşı Temizliği): Diş yüzeylerinde biriken
                plak ve diş taşı, diş fırçalama ve diş ipi kullanımı ile tam
                olarak temizlenemez. Diş hekimi veya diş hijyeni uzmanı
                tarafından düzenli olarak yapılan diş temizliği, diş eti
                sağlığını korur ve diş çürüklerini önler.
              </li>
              <li>
                Flor Uygulamaları: Flor, diş minesini güçlendirerek çürük
                oluşumunu azaltan önemli bir mineraldir. Diş hekimi, flor vernik
                veya florlu jellerle dişlere flor uygulayarak çürük riskini
                azaltabilir.
              </li>
              <li>
                Diş Dolguları ve Restorasyonlar: Erken dönemde tespit edilen
                çürüklerin düzenli dolgu veya restorasyonlarla tedavisi, dişin
                yapısal bütünlüğünü koruyarak daha büyük problemlerin önüne
                geçer.
              </li>
              <li>
                Diş Fırçalama ve Diş İpi Kullanımı Öğretimi: Doğru diş fırçalama
                ve diş ipi kullanımı, plak birikimini azaltır ve ağız sağlığını
                korur. Diş hekimleri, hastalara doğru fırçalama ve diş ipi
                kullanımı tekniklerini öğretir.
              </li>
              <li>
                Beslenme Danışmanlığı: Sağlıklı beslenme alışkanlıkları, diş
                çürüklerinin oluşumunu etkileyen önemli bir faktördür. Diş
                hekimleri, hastalara sağlıklı beslenme ve ağız dostu besinler
                konusunda danışmanlık yapar.
              </li>
              <li>
                Koruyucu Ağızlık ve Gece Plakları: Spor yaparken ve diş
                gıcırdatma (bruksizm) gibi alışkanlıklarda koruyucu ağızlık
                kullanımı, diş hasarını önler. Gece plakları da bruksizm
                kaynaklı problemlerin önüne geçer.
              </li>
            </ul>
            <p>
              Diş önleyici hekimliği, bireylerin ağız sağlığını korumak ve diş
              hastalıklarını önlemek için düzenli bir diş hekimi ziyaretine önem
              vermesini gerektirir. Erken tanı ve tedavi, dişlerin sağlıklı
              kalmasını ve uzun ömürlü olmasını sağlar, ağız sağlığı ve genel
              sağlık arasındaki ilişkiyi olumlu yönde etkiler. verir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OnleyıcıDısHekımlıgı;
