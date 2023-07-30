import React from "react";
import { HomeCarusel } from "../../../components";
import { Col, Container, Row } from "react-bootstrap";

const KanalTedavı = () => {
  return (
    <div>
      <HomeCarusel />
      <Container>
        <Row className="mt-5 " style={{ textAlign: "center" }}>
          <Col xs={12}>
            <img
              width={350}
              src={require("../../../images/homefoto/ortodonti.jpg")}
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
            <h2 style={{ fontSize: "3rem" }}>Kanal Tedavisi</h2>
            <p>
              Kanal tedavisi (endodonti), dişlerin iç yapısındaki yumuşak doku
              olan pulpa bölgesindeki iltihap, enfeksiyon veya hasar gibi
              problemlerle başa çıkmak için yapılan bir tedavi yöntemidir.
              Pulpa, dişin kökünden başlayarak dişin taç kısmına kadar uzanan
              damarlar, sinirler ve bağ dokusunu içeren bir yapıdır. Bu
              bölgedeki iltihaplanma veya enfeksiyon, ağrı, şişme ve diş kaybı
              gibi ciddi sorunlara neden olabilir. <br />
              Kanal tedavisi, dişin pulpa odasındaki enfeksiyonu temizleyerek ve
              pulpayı çıkartarak yapılır. Tedavi, aşağıdaki durumlarda
              gerekebilir:
            </p>
            <ul>
              <li>
                Kiloza çürüğü: Diş çürüğü, bakterilerin dişin sert dış
                tabakasını (mine ve dentin) aşındırması sonucu oluşur. Eğer
                çürük tedavi edilmezse, pulpa enfeksiyon kapabilir ve
                iltihaplanabilir.
              </li>
              <li>
                Kırık diş: Travma, kaza veya yaralanma sonucu diş kırılabilir.
                Kırık diş, pulpayı enfeksiyon riskine maruz bırakabilir.
              </li>
              <li>
                Diş dolgusu veya kaplama: Eski dolgular veya kaplamalar zamanla
                sızdırabilir ve bakterilerin pulpa bölgesine ulaşmasına neden
                olabilir.
              </li>
              <li>
                Tekrarlayan işlemler: Daha önce yapılan bir diş tedavisi
                başarısız olursa, pulpadaki iltihaplanma yeniden ortaya
                çıkabilir.
              </li>
              <li>Kanal tedavisi genellikle iki aşamada gerçekleştirilir:</li>
              <li>Aşama 1: İltihaplı veya enfekte pulpanın temizlenmesi</li>
              <li>a. Lokal anestezi uygulanarak diş uyuşturulur.</li>
              <li>
                b. Dişin üzerinde bir izolasyon bezi yerleştirilir, böylece
                tedavi sırasında ağızda bakteri ve tükürük kontrol altında
                tutulabilir.
              </li>
              <li>
                c. Diş hekimi, dişin taç kısmından (dişin üst kısmı) pulpa
                odasına ulaşmak için bir delik açar.
              </li>
              <li>
                d. İltihaplı veya enfekte pulpa materyali, özel dosyalar
                kullanılarak temizlenir ve pulpa odası dezenfekte edilir.
              </li>
              <li>
                e. Pulpa odası, şekil verilmiş ve dezenfekte edilmiş kanal dolgu
                maddesiyle doldurulur.
              </li>
              <li>
                f. Tedavinin bu aşamasında geçici bir dolgu uygulanabilir.
              </li>
              <li>
                Aşama 2: Kök kanallarının doldurulması ve dişin onarılması
              </li>
              <li>
                a. Geçici dolgu çıkarılır (varsa) ve kök kanalları kalıcı olarak
                doldurulur.
              </li>
              <li>
                b. Kök kanalları genellikle kauçuk benzeri bir malzeme olan
                gutta-percha adı verilen esnek bir dolgu maddesi ile doldurulur.
              </li>
              <li>
                c. Dişin kaybını önlemek için, tedavi edilen diş genellikle
                dolgu, kaplama veya kuron ile güçlendirilir.
              </li>
            </ul>
            <p>
              Kanal tedavisi, çoğu durumda başarılı bir şekilde enfekte pulpayı
              kurtarabilir ve dişi uzun yıllar koruyabilir. Ancak, tedavi
              sonrası diş bakımının düzenli ve dikkatli bir şekilde yapılması
              önemlidir. Ayrıca, bazı durumlarda tedavi başarısız olabilir veya
              enfeksiyon tekrarlayabilir. Diş hekiminiz, diş sağlığınızı kontrol
              etmek için düzenli olarak muayene etmenizi önerir ve gerekli
              görülürse ek tedaviler önerebilir. Unutmayın ki, erken aşamada
              tedavi edilen diş problemleri genellikle daha başarılı sonuçlar
              verir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KanalTedavı;
