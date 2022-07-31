import React, { useRef, useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyHeader from "../component/MyHeader";
import Feed from "../component/feed";
import MyFooter from "../component/MyFooter";

import { FeedStateContext } from "../App";
import { FeedDispatchContext } from "../App";

const Home = () => {
  const FeedState = useContext(FeedStateContext);
  const FeedDispatch = useContext(FeedDispatchContext);

  console.log();

  return (
    <div className="body">
      <MyHeader />
      <Feed data={FeedState.data} />
      <MyFooter />
    </div>
  );
};

export default Home;
