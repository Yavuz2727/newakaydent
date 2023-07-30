import React from "react";
import "./PerıOdental.scss";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";
const PerıOdental = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={500}
              src={require("../../../images/homefoto/perodontalhastalık.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Periodontal Hastalıklar</h2>
            <p>
              Periodontal hastalıklar, diş etlerini ve çevre dokularını
              etkileyen yaygın enfeksiyonlar ve iltihaplanmalardır. Bu
              hastalıklar, dişleri destekleyen kemik ve diş eti dokusunun
              zamanla hasar görmesine neden olabilir. Periodontal hastalıklar,
              diş kaybına ve diş eti çekilmesine yol açabilir ve ciddi
              durumlarda ağız sağlığı ve genel sağlık üzerinde olumsuz etkilere
              neden olabilir.
            </p>
            <ul>
              <li>Periodontal hastalıklar iki ana tipe ayrılabilir:</li>
              <li>
                Gingivitis: Diş eti iltihabı olarak da bilinen gingivitis, diş
                etlerinin bakteriyel plak birikimi nedeniyle iltihaplanmasıdır.
                Plak, dişlerin yüzeylerinde biriken yapışkan bakteri
                tabakasıdır. Diş fırçalama ve diş ipi kullanımı ile
                temizlenmediğinde, plak zamanla sertleşerek diş taşını (tartar)
                oluşturur. Diş taşı, plak birikimini artırır ve diş etlerinin
                iltihaplanmasına neden olur. Gingivitis, diş etlerinin
                kızarıklığı, şişmesi ve kanaması gibi belirtilerle kendini
                gösterebilir. Erken teşhis edilirse, gingivitis genellikle geri
                döndürülebilir ve ciddi periodontal hastalıkların gelişimini
                önlemeye yardımcı olur.
              </li>
              <li>
                Periodontitis: Gingivitis tedavi edilmez veya kontrol altına
                alınmazsa, iltihap diş etlerinden diş köklerine doğru
                ilerleyebilir ve periodontitis adı verilen daha ciddi bir duruma
                dönüşebilir. Periodontitis, diş etlerinin dişlerden ayrılmasına
                ve diş kökleri ile çevre dokular arasında boşluklar (cepler)
                oluşmasına neden olur. Bu cepler, bakteri ve artıkların
                biriktiği bölgelerdir ve zamanla çevre dokuların zayıflamasına
                ve kemik kaybına yol açar. Tedavi edilmediğinde, periodontitis
                dişlerin gevşemesine ve hatta diş kaybına neden olabilir.
              </li>
              <li>
                Periodontal hastalıkların nedenleri arasında aşağıdakiler
                bulunur:
              </li>
              <li>
                Yetersiz ağız hijyeni: Plak birikimi, diş etlerinin
                iltihaplanmasına yol açar.
              </li>
              <li>
                Sigara içme: Sigara kullanımı periodontal hastalık riskini
                artırır ve iyileşmeyi zorlaştırabilir.
              </li>
              <li>
                Diş taşı: Plakların zamanla sertleşerek diş taşı haline gelmesi,
                diş eti iltihabını şiddetlendirebilir.
              </li>
              <li>
                Genetik yatkınlık: Bazı kişilerde periodontal hastalıkların
                gelişme riski genetik faktörlere bağlı olarak artabilir.
              </li>
              <li>
                Diyabet: Diyabet hastalarında periodontal hastalıkların görülme
                sıklığı daha yüksek olabilir.
              </li>
              <li>
                Stres: Kronik stres, ağız sağlığını olumsuz etkileyerek
                periodontal hastalık riskini artırabilir.
              </li>
              <li>
                Hormonal değişiklikler: Gebelik, menopoz gibi hormonal
                değişiklikler, diş etlerini etkileyerek periodontal hastalıklara
                yatkınlığı artırabilir.
              </li>
            </ul>
            <p>
              Periodontal hastalıkların önlenmesi ve tedavisi için düzenli diş
              hekimi kontrolleri, düzgün diş fırçalama ve diş ipi kullanımı,
              sağlıklı beslenme alışkanlıkları ve sigara kullanmamak gibi önemli
              adımlar atılmalıdır. Erken teşhis ve tedavi, periodontal
              hastalıkların ilerlemesini durdurabilir ve dişleri ve diş etlerini
              sağlıklı bir şekilde korumaya yardımcı olabilir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PerıOdental;
