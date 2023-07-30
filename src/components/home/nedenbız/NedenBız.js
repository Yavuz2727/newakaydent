import React from "react";
import "./NedenBız.scss";
import { RxAvatar } from "react-icons/rx";
import { PiArmchairDuotone } from "react-icons/pi";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const NedenBız = () => {
  return (
    <div className="nedenbız">
      <div className="nedenbızalt">
        {" "}
        <img
          className="nedenbızımg"
          src={require("../../../images/homefoto/homevector/v1.jpg")}
          alt=""
        />
      </div>
      <div className="nedenbızsec">
        <h2>Neden Bizi Seçmelisiniz...</h2>
        <ul>
          <li>
            <RxAvatar
              style={{
                color: "#00B7AA",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            />
            &nbsp;&nbsp; Doktorlar ve Donanımlı Klinik;
            <p>
              İşinde Uzman doktorlarımızla ve donanımlı Kliniğimiz ile sizlere
              daha mutlu gülümseten sonuçlar alıyoruz.
            </p>
          </li>
          <li>
            <BsEmojiSmile
              style={{
                color: "#00B7AA",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            />
            &nbsp;&nbsp; Samimi ve Güler Yüzlü Karşılama;
            <p>
              Samimi ve gülümseten karşılama ile sizlere daha rahat bir ortam
              sunuyoruz.
            </p>
          </li>
          <li>
            {" "}
            <PiArmchairDuotone
              style={{
                color: "#00B7AA",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            />
            &nbsp;&nbsp; Konforlu Bekleme Salonu;
            <p>
              Bekleme salonumuzda sizlerin sıkılmadan beklemenizi sağlıyoruz.
            </p>
          </li>
          <li>
            <CiLocationOn
              style={{
                color: "#00B7AA",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            />
            &nbsp;&nbsp; Seçkin Konum;
            <p>
              Her taraftan ulaşılabilecek konuma sahip olarak rahat gelmenize
              olanak sağlıyoruz.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NedenBız;
