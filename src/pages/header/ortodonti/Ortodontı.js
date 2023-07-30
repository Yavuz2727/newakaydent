import React from "react";
import "./Ortodontı.scss";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const Ortodontı = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row
          className="mt-5 "
          style={{
            textAlign: "center",
            textShadow: "2px 4px 3px black",
            lineHeight: "30px",
          }}
        >
          <Col xs={12}>
            <img
              width={500}
              src={require("../../../images/homefoto/kanaaltedavı.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Ortodonti</h2>
            <p>
              Ortodonti, dişlerin ve çene yapısının düzeltilmesi ve
              düzenlenmesiyle ilgilenen diş hekimliği dalıdır. Bu uzmanlık
              alanı, dişlerin düzgün hizalanması, çene ilişkilerinin
              düzeltilmesi ve estetik görünümün iyileştirilmesi için çeşitli
              tedavi yöntemleri ve apareyler kullanır. Ortodonti, düzensiz
              dişlerin tedavisi (diş kapanışı) ve çene yapısındaki
              anormalliklerin düzeltilmesi amacıyla çocuklardan yetişkinlere
              kadar her yaştaki bireye uygulanabilir.
            </p>
            <ul>
              <li>Ortodontik tedaviler genellikle şu durumları içerir:</li>
              <li>
                Braket Tedavisi: Metal, seramik veya şeffaf materyallerden
                yapılan braketler, dişlerin yüzeylerine yapıştırılır. Tel ve
                lastik halkalarla birlikte kullanılarak dişleri hareket
                ettirirler. Bu tedavi yöntemi, dişlerin düzgün hizalanmasını ve
                kapanışın iyileştirilmesini sağlar.
              </li>
              <li>
                Şeffaf Plak Tedavisi (Invisalign): Plastikten yapılan şeffaf
                plaklar, dişlere takılır ve belli bir süre kullanılır. Plaklar,
                belirli aralıklarla değiştirilerek dişlerin hareketini sağlar.
                Görünür olmayan bu plaklar, estetik kaygıları olan bireyler için
                popüler bir seçenektir.
              </li>
              <li>
                Fonksiyonel Apareyler: Bazı durumlarda çene yapısındaki
                anormallikleri düzeltmek için fonksiyonel apareyler kullanılır.
                Bunlar, alt çene pozisyonunu düzeltmek, alt ve üst çeneyi uyumlu
                hale getirmek ve çene gelişimini desteklemek amacıyla
                kullanılır.
              </li>
              <li>
                Ortodontik Cerrahi: Çene yapısındaki büyük anormallikleri
                düzeltmek için bazı durumlarda cerrahi müdahale gerekebilir.
                Ortodontik cerrahi, çenelerdeki konumların değiştirilmesini
                içerir.
              </li>
              <li>Ortodontik tedavilerin faydaları şunlardır:</li>
              <li>
                Düzgün hizalanmış dişler, dişlerin temizliğini kolaylaştırır ve
                diş çürüklerini önlemeye yardımcı olur.
              </li>
              <li>
                Doğru çene ilişkileri, çiğneme ve konuşma fonksiyonlarını
                iyileştirir.
              </li>
              <li>
                Estetik olarak düzgün dişler ve düzeltilmiş çene yapısı,
                gülümseme estetiğini artırır ve kişinin özgüvenini yükseltir.
              </li>
            </ul>
            <p>
              Ortodontik tedavi planlaması, bireyin diş yapısını ve çene
              ilişkilerini değerlendiren uzman bir ortodontist tarafından
              yapılır. Tedavi süresi ve yöntemleri kişinin bireysel
              ihtiyaçlarına göre değişebilir. Ortodonti, diş hekimliğinde önemli
              bir alan olup, düzgün bir diş yapısı ve sağlıklı çene yapısı için
              kritik bir rol oynar. verir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ortodontı;
