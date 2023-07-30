import React from "react";
import "./DahaIyısıBottom.scss";
const DahaIyısıBottom = () => {
  return (
    <div className="dahaıyıbottom">
      <div className="leftdahaıyıbottom">
        <h3>
          Sizlere daha nasıl iyi hizmet etmek gerektğinin farkında olarak..
        </h3>
        <p>
          En yetekli Doktorlarımızla sizlere teknolojik gelişmeler odağında daha
          iyi hizmet etmek gerekliliği ile siz değerli hastalarımıza dünden bu
          zamana kadar hizmet vermekteyiz
        </p>
      </div>
      <div className="rightdahaıyıbottom">
        <img
          width={200}
          src={require("../../../images/homefoto/homevector/v2.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default DahaIyısıBottom;
