import React from "react";
import "./HomeCarusel.scss";
import { useSelector } from "react-redux";
const HomeCarusel = () => {
  const { name } = useSelector((state) => state.name);

  return (
    <div className="homecarusel">
      <div className="top-carusel">
        <img src={require("../../../images/logo/header.png")} />
        <h2 className="topcaruseltext">{name} </h2>
        <span className="heademintext">
          Gülümseten Sonuçlar <br /> Bizim Motivasyonumuzdur.
        </span>
      </div>
    </div>
  );
};

export default HomeCarusel;
