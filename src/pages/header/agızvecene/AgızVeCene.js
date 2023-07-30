import React from "react";
import "./AgızVeCene.scss";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const AgızVeCene = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={350}
              src={require("../../../images/homefoto/hh1.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Ağız ve Çene Cerrahisi</h2>
            <p>
              Ağız ve çene cerrahisi, ağız, çene, yüz ve boyun bölgesindeki
              çeşitli hastalık, yaralanma ve deformitelerin tanı ve tedavisiyle
              ilgilenen bir cerrahi uzmanlık dalıdır. Bu alanda çalışan
              hekimlere "ağız ve çene cerrahı" veya "oral ve maksillofasiyal
              cerrah" denir. Ağız ve çene cerrahisi, diş hekimliği ile tıp
              alanlarının kesişiminde yer alır ve geniş bir yelpazede cerrahi
              işlemleri kapsar.
            </p>
            <ul>
              <li>
                Ağız ve çene cerrahisi alanında yapılan işlemler şunları içerir:
              </li>
              <li>
                Diş çekimi: İlerlemiş çürük, diş eti hastalıkları veya dişlerin
                düzensiz yapıları nedeniyle çekilmesi gereken dişlerin cerrahi
                olarak çekilmesi işlemi.
              </li>
              <li>
                Diş implantları: Kaybedilmiş dişlerin yerine titanyum veya
                benzeri malzemeden yapılmış implantlarla protez diş takılmasını
                sağlayan bir cerrahi yöntem.
              </li>
              <li>
                Çene kistleri ve tümörleri: Çenelerdeki kistik oluşumlar veya
                tümörlerin teşhis ve tedavisi ağız ve çene cerrahisinin uzmanlık
                alanındadır.
              </li>
              <li>
                Yüz ve çene travmaları: Kazalar veya yüz bölgesine yönelik
                darbeler sonucu oluşan çene kırıklarının ve yüz travmalarının
                tedavi edilmesi.
              </li>
              <li>
                Yüz kemiklerinin düzeltilmesi: Doğuştan gelen yüz kemiklerinin
                şekil bozukluklarının düzeltilmesi veya estetik nedenlerle
                yüzdeki kemik yapıların yeniden şekillendirilmesi işlemleri.
              </li>
              <li>
                Ağız içi tümörler ve patolojileri: Ağız, dudak, dil, diş eti
                gibi iç bölgedeki tümörlerin ve patolojilerin teşhis ve
                tedavisi.
              </li>
              <li>
                Horlama ve uyku apnesi tedavisi: Uyku sırasında solunum
                problemlerine neden olan ve uyku kalitesini düşüren sorunların
                cerrahi olarak tedavisi.
              </li>
              <li>
                Ağız ve çene cerrahisi, genellikle lokal anestezi altında
                yapılırken, karmaşık vakalarda genel anestezi altında
                gerçekleştirilebilir. Bu alandaki cerrahi işlemler teknolojinin
                ilerlemesiyle daha da gelişmiş ve güvenli hale gelmiştir.
                Ayrıca, estetik ve rekonstrüktif cerrahi tekniklerin gelişmesi,
                hastaların yüz ve çene bölgesindeki sorunların tedavisinde daha
                olumlu sonuçlar almasını sağlamıştır.
              </li>
            </ul>
            <p>
              Ağız ve çene cerrahisi, hastaların sağlığını, işlevselliğini ve
              estetik görünümünü iyileştirmek için multidisipliner bir yaklaşım
              kullanarak hastalara kişiye özel tedavi seçenekleri sunmaya
              çalışır. Her hastanın durumu ve ihtiyaçları farklı
              olabileceğinden, ağız ve çene cerrahları tedavi süreçlerini
              bireysel olarak planlar ve uygular.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AgızVeCene;
