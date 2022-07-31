import React, { useRef, useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./header.css";
import Buttons from "./buttons";

import { FeedStateContext } from "../App";
import { FeedDispatchContext } from "../App";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const PaperPlane = <FontAwesomeIcon icon={faPaperPlane} />;
const Heart = <FontAwesomeIcon icon={faHeart} />;
const SquarePlus = <FontAwesomeIcon icon={faSquarePlus} />;

const MyHeader = () => {
  const FeedDispatch = useContext(FeedDispatchContext);

  return (
    <div>
      <div className="Header">
        <div className="headtext">InReactgram</div>
        <Link to={"/new"}>
          <Buttons text={SquarePlus} />
        </Link>
        <Link to={"/heart"}>
          <Buttons text={Heart} />
        </Link>
        <Link to={"/message"}>
          <Buttons text={PaperPlane} />
        </Link>
      </div>
      <div className="hiddenHeader"></div>
    </div>
  );
};

export default MyHeader;
