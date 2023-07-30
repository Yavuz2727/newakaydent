import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div>
        {" "}
        <div className="footer">
          <div className="leftfooter">
            <div className="logo">
              <img
                src={require("../../images/logo/logotrans.png")}
                alt="logo"
              />
              <div className="logowrite">
                <h4>AK & AY </h4>
                <h5>HEKİM</h5>
              </div>
            </div>
            <div>
              <p className="paragraf">
                AK & AY Hekim kliniklerinde, yetenekli hekimlerimiz ve teknoloji
                ile uyumlu konseptimiz ile her zaman daha güzel sonuçlar almak
                için çaba harcayan kaliteden ödün vermeyen bir vizyona sahip bir
                kliniktir.
              </p>
            </div>
          </div>
          <div className="rightfooter">
            <ul>
              <li>
                <Link to="/" className="link">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/Hakkımızda" className="link">
                  Hakkımızda
                </Link>
              </li>

              <li>
                <Link to="/Bılgı" className="link">
                  Bilgi
                </Link>
              </li>
              <li>
                <Link to="/Iletısım" className="link">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "#003057",
          fontSize: "15px",
          fontWeight: "bold",
          padding: "10px 0",
          margin: 0,
        }}
      >
        Tüm Haklar AK & AY Dent Hekim Klinikleri için saklıdır © 2023 - Gizlilik
        Politikası
      </p>
    </>
  );
};

export default Footer;
