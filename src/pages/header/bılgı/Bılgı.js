import React from "react";
import "./Bılgı.scss";
import { HomeCarusel } from "../../../components";
import { Accordion } from "react-bootstrap";
const Bılgı = () => {
  return (
    <div>
      <HomeCarusel />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Diş beyazlatma işlemi acı verir mi?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş beyazlatma işlemi genellikle acısızdır. Tedavi sırasında
            bazı hassasiyet hissi yaşanabilir, ancak bu geçici olur ve
            genellikle hassas diş macunlarıyla rahatlatılabilir.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Dolgu veya kaplama işlemi ne kadar sürer?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Dolgu veya kaplama işlemi, dişin durumuna bağlı olarak
            değişebilir. Genellikle 30 dakika ile 1 saat arasında sürebilir.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Diş çekimi sonrasında nelere dikkat etmeliyim?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş çekimi sonrasında yaranın enfeksiyon kapmaması için yara
            bölgesine dokunmamaya ve diş hekiminizin önerdiği ağız bakım
            talimatlarını uygulamaya dikkat etmelisiniz.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Diş implantı kimlere uygulanabilir?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş implantı, çene kemiği yeterli olan ve genel sağlık durumu
            uygun olan pek çok kişiye uygulanabilir. Diş hekiminizle görüşerek
            uygunluk değerlendirmesi yapılmalıdır.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Düzenli diş temizliği neden önemlidir?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Düzenli diş temizliği, diş plağını ve tartar birikimini
            engelleyerek diş ve diş eti hastalıklarının önlenmesine yardımcı
            olur, ağız sağlığını korur ve dişlerin daha beyaz ve parlak
            kalmasına katkı sağlar.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Diş eti kanaması normal midir?</Accordion.Header>
          <Accordion.Body>
            Cevap: Diş eti kanaması, genellikle diş eti hastalıklarının bir
            işareti olabilir. Diş eti kanaması düzenli diş fırçalama ve diş ipi
            kullanımıyla geçmezse, bir diş hekimine danışmak önemlidir.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Hangi durumlarda diş koruyucu ağızlık kullanılmalıdır?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş koruyucu ağızlık, spor ve diş gıcırdatma gibi durumlarda
            dişlerin korunması için kullanılabilir. Ağız koruyucu, dişleri
            darbe, çarpma veya gıcırdatma gibi travmalardan korumaya yardımcı
            olur.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Diş implantı cerrahisi acı verir mi?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş implantı cerrahisi genellikle lokal anestezi altında
            yapılır ve ağrı hissedilmez. Operasyondan sonra hafif bir
            rahatsızlık olabilir, ancak genellikle ağrı kesicilerle
            yönetilebilir.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            Hangi durumlarda diş çekimi gerekebilir?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş çürümesi, çene kemiğinin uygun olmaması, diş eti
            hastalıkları veya diş travmaları gibi durumlarda diş çekimi
            gerekebilir.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            Diş beyazlatma işlemi kimlere uygulanabilir?
          </Accordion.Header>
          <Accordion.Body>
            Cevap: Diş beyazlatma işlemi, dişleri doğal rengine döndürmek veya
            beyazlatmak isteyen pek çok kişiye uygulanabilir. Ancak, hamileler
            ve emziren anneler gibi belirli gruplar için uygun olmayabilir.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Bılgı;
