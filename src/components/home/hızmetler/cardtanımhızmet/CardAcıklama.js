import React from "react";
import "./CardAcıklama.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";
import { constants } from "../../../../constaınts";
const CardAcıklama = () => {
  const id = useSelector((state) => state.id);
  const { CardAcıklama } = constants;
  console.log(id);
  const navigate = useNavigate();
  return (
    <div className="cardacıklama">
      <div className="leftcardacıklama">
        <h3>{CardAcıklama[id.id - 1].name}</h3>
        <p>{CardAcıklama[id.id - 1].text}</p>
        <Button onClick={() => navigate(`${CardAcıklama[id.id - 1].router}`)}>
          Detaylı Bilgi İçin{" "}
        </Button>
      </div>
      <div className="rightcardacıklama">
        <img
          width={200}
          src={require(`../../../../images/homefoto/hh${id.id}.jpg`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default CardAcıklama;
