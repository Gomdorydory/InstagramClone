import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { FeedDispatchContext } from "../App";

import Buttons from "../component/buttons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import MyFooter from "../component/MyFooter";

const House = <FontAwesomeIcon icon={faHouse} />;

const New = () => {
  return (
    <div>
      <div>새글 작성</div>
      <textarea />
      <Buttons text="완료" />
      <MyFooter />
    </div>
  );
};

export default New;
