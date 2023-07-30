import React from "react";
import "./CardAcıklama.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { constants } from "../../../../constaınts";
import { nameState } from "../../../../store/headername/headername";
const CardAcıklama = () => {
  const id = useSelector((state) => state.id);
  const { CardAcıklama } = constants;

  const dispatch = useDispatch();
  return (
    <div className="cardacıklama">
      <div className="leftcardacıklama">
        <h3>{CardAcıklama[id.id - 1].name}</h3>
        <p>{CardAcıklama[id.id - 1].text}</p>
        <Button
          as={Link}
          to={`${CardAcıklama[id.id - 1].router}`}
          onClick={() => dispatch(nameState(CardAcıklama[id.id - 1].name))}
        >
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
