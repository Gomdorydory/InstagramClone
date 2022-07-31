import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { FeedStateContext } from "../App";
import { FeedDispatchContext } from "../App";

import Buttons from "./buttons";
import "./feed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
const Heart = <FontAwesomeIcon icon={faHeart} />;
const Comment = <FontAwesomeIcon icon={faComment} />;
const PaperPlane = <FontAwesomeIcon icon={faPaperPlane} />;

const Feed = () => {
  const FeedState = useContext(FeedStateContext);
  const FeedDispatch = useContext(FeedDispatchContext);

  const feedList = FeedState.map((it) => (
    <div className="feed">
      <div className="FeedHeader">
        <div className="profilePicture"></div>
        <div className="userId">{it.user}</div>
        <div className="empty"></div>
        <div className="more">...</div>
      </div>

      <div className="FeedPicture">{it.pic}</div>

      <div className="FeedReact">
        <Buttons text={Heart} />
        <Buttons text={Comment} />
        <Buttons text={PaperPlane} />
      </div>

      <div className="Feedcontent">
        <span className="userIdInContent">{it.user}</span>
        <span className="Feedcontent"> {it.content} </span>
      </div>

      <div className="Feedfooter">
        <div className="comment"> 댓글 {it.userComment}개 보기</div>
        <div className="date">{it.date}</div>
      </div>
    </div>
  ));
  return <div>{feedList}</div>;
};

export default Feed;
