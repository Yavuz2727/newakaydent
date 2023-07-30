import React from "react";
import "./header.scss";
import { FiPhoneCall } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nameState } from "../../store/headername/headername";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header-sticky">
      <div className="top-header">
        <div className="logo">
          <Link to="/">
            <img src={require("../../images/logo/logotrans.png")} alt="logo" />
          </Link>
        </div>
        <div className="vasat">
          <h4>Gülümseten Sonuçlar</h4>
          <h3> Bizim Motivasyonumuzdur.</h3>
        </div>
        <div className="right-header">
          <a href="tel:+905551112233">
            <span className="span">
              {" "}
              <FiPhoneCall className="phone-ıcon" />
              <span className="ıletısım">
                <span>İletişim</span>
                <span>+90 (544) 833 27 27</span>
              </span>
            </span>
          </a>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary px-3 navbar">
        <Container fluid>
          <div className="logominwidht">
            <Link to="/">
              <img
                src={require("../../images/logo/logotrans.png")}
                alt="logo"
              />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => dispatch(nameState("Hakkımızda"))}
                href="Anasayfa"
              >
                Anasayfa
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Hakkımızda"
                onClick={() => dispatch(nameState("Hakkımızda"))}
                href="#action2"
              >
                Hakkımızda
              </Nav.Link>
              <NavDropdown title="Hizmetler" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  as={Link}
                  onClick={() => dispatch(nameState("Kanal Tedavisi"))}
                  to="/KanalTedavı"
                  href="#action3"
                >
                  Kanal Tedavisi
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/DısImplant"
                  onClick={() => dispatch(nameState("Diş İmplantları"))}
                  href="#action4"
                >
                  Diş İmplantları
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/OnleyıcıDısHekımlıgı"
                  href="#action4"
                  onClick={() => dispatch(nameState("Önleyici Diş Hekimliği"))}
                >
                  Önleyici Diş Hekimliği
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Ortodontı"
                  onClick={() => dispatch(nameState("Ortodonti"))}
                  href="#action4"
                >
                  Ortodonti
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/PerıOdental"
                  onClick={() =>
                    dispatch(nameState(" Periodontal Hastalıklar"))
                  }
                  href="#action5"
                >
                  Periodontal Hastalıklar
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/ProtetıkDısTedavısı"
                  onClick={() => dispatch(nameState("Proteknik Diş Tedavisi"))}
                  href="#action5"
                >
                  Proteknik Diş Tedavisi
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/AgızVeCene"
                  onClick={() => dispatch(nameState("Ağız ve Çene Cerrahisi"))}
                  href="#action5"
                >
                  Ağız ve Çene Cerrahisi
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/CocukDıs"
                  onClick={() => dispatch(nameState("Çocuk Diş Hekimliği"))}
                  href="#action5"
                >
                  Çocuk Diş Hekimliği
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/Bılgı"
                onClick={() => dispatch(nameState("Bilgi"))}
                href="#"
              >
                Bilgi
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Galerı"
                onClick={() => dispatch(nameState("Galeri"))}
                href="#"
              >
                Galeri
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Iletısım"
                onClick={() => dispatch(nameState("İletişim"))}
                href="#"
              >
                İletişim
              </Nav.Link>
            </Nav>
            <div className="sosyal-taglar">
              {" "}
              <a href="https://www.facebook.com/ak.aydent27" target="blank">
                <BsFacebook />
              </a>
              <a href="https://twitter.com/" target="blank">
                <BsTwitter />
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <BsInstagram />
              </a>
              <a href="tel:+905448332727">
                <BsWhatsapp />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
