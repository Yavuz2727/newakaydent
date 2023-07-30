import React from "react";
import "./dahaıyısı.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const DahaIyısı = () => {
  const navigate = useNavigate();
  return (
    <div className="dahaıyı">
      <div className="leftdahaıyı">
        <h3>
          Sizlere daha nasıl iyi hizmet etmek gerektğinin farkında olarak..
        </h3>
        <p>
          En yetekli Doktorlarımızla sizlere teknolojik gelişmeler odağında daha
          iyi hizmet etmek gerekliliği ile siz değerli hastalarımıza dünden bu
          zamana kadar hizmet vermekteyiz
        </p>
        <Button onClick={() => navigate("hakkımızda")}>Biz Kimiz </Button>
      </div>
      <div className="rightdahaıyı">
        <img
          width={150}
          src={require("../../../images/homefoto/hh4.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default DahaIyısı;
