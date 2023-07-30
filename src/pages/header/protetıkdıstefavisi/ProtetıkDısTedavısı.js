import React from "react";
import "./ProtetıkDısTedavısı.scss";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const ProtetıkDısTedavısı = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={350}
              src={require("../../../images/homefoto/proteknıkdısted.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Proteknik Diş Tedavisi</h2>
            <p>
              Proteknik diş tedavisi, diş eksikliğinin ya da ağızda bulunan
              dişlerin sağlıksız ve estetik olarak uygun olmayan durumlarına
              çözüm bulmak amacıyla yapılan protezlerin hazırlanması ve
              uygulanmasını içeren bir diş hekimliği dalıdır. Protezler, diş
              kaybı yaşayan veya dişlerinde hasar olan kişilere doğal görünümlü,
              işlevsel ve estetik dişler sağlamak için kullanılır.
            </p>
            <ul>
              <li>
                Proteknik diş tedavisi, farklı ihtiyaçlara göre çeşitli
                protezlerin kullanılmasını içerir:
              </li>
              <li>
                Dental Protezler (Sabit Protezler): Eksik dişlerin yerine kalıcı
                olarak yerleştirilen ve ağızda sabit olarak bulunan
                protezlerdir. Bu protezler, diş kaybı olan bireylerin çiğneme
                fonksiyonlarını düzelten ve estetik açıdan memnuniyet sağlayan
                seçeneklerdir. Dental protezler arasında kronlar (kaplamalar),
                köprüler ve implant destekli protezler yer alır.
              </li>
              <li>
                Kronlar (kaplamalar): Hasar görmüş veya çürümüş dişlerin üzerine
                takılan, dişin orijinal şekline döndürülmesini sağlayan ve
                dayanıklılık kazandıran protezlerdir.
              </li>
              <li>
                Köprüler: Bir veya daha fazla diş eksikliği olan durumlarda
                komşu dişlere tutunarak eksik olan diş veya dişlerin yerine
                sabit olarak konulan protezlerdir.
              </li>
              <li>
                İmplant Destekli Protezler: Çene kemiğine yerleştirilen diş
                implantları üzerine sabitlenen protezlerdir. İmplantlar, diş
                eksikliğini kalıcı olarak çözmek ve estetik sonuçlar elde etmek
                için kullanılır.
              </li>
              <li>
                Hareketli Protezler (Dönebilen Protezler): Dişlerin yerine
                geçici olarak yerleştirilen ve ihtiyaç duyulan durumlarda
                çıkarılabilen protezlerdir. Hareketli protezler, eksik dişlerin
                yerine geçmek ve ağızın fonksiyonlarını düzeltmek için
                kullanılır.
              </li>
              <li>
                Total Protez (Tam Protez): Tamamen dişsiz olan ağızları olan
                bireylerde diş fonksiyonlarını ve estetik görünümü sağlamak için
                üst ve alt çeneye yerleştirilen tam protezlerdir.
              </li>
              <li>
                Parsiyel Protez (Kısmi Protez): Diş eksikliği olan ancak diğer
                doğal dişleri koruyabilmek için kullanılan protezlerdir.
                Hareketli protez, eksik dişlerin yerine geçerken diğer dişlere
                tutunarak sabitlenir.
              </li>
            </ul>
            <p>
              Proteknik diş tedavisi, kişiye özel olarak hazırlanan protezlerin
              uygunluğu ve doğal görünümü için dikkatli bir süreci içerir.
              Protezlerin doğru şekilde hazırlanması, kişinin ağız yapısına
              uygunluğu ve doğal renk ve şekilde oluşturulması, proteknik diş
              tedavisinin başarısını etkileyen önemli faktörlerdir. Protezler,
              kişinin diş fonksiyonlarını düzeltirken, estetik bir gülümseme
              elde etmesini de sağlar. Bu nedenle, proteknik diş tedavisi, diş
              eksikliği veya diş sorunları olan bireyler için önemli bir
              çözümdür. Diş hekiminizle görüşerek size en uygun protez tedavisi
              hakkında bilgi alabilir ve tedavi sürecini başlatabilirsiniz.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProtetıkDısTedavısı;
