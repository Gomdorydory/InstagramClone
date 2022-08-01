import React, { useRef, useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import New from "./pages/New";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const PaperPlane = <FontAwesomeIcon icon={faPaperPlane} />;
const Heart = <FontAwesomeIcon icon={faHeart} />;
const SquarePlus = <FontAwesomeIcon icon={faSquarePlus} />;

//dummydata
const userId = "Gomdory";
const userPicture = "사진";
const userContent = "내용";
const userComment = "1";
const dummydate = new Date();
const date =
  dummydate.getFullYear() +
  "년 " +
  dummydate.getMonth() +
  "월 " +
  dummydate.getDate() +
  "일";

//context
export const FeedStateContext = React.createContext();
export const FeedDispatchContext = React.createContext();

function App() {
  const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
      case "CREATE": {
        let newItem = action.data;
        newState = [newItem, ...state];
        console.log(newState);
        break;
      }
      case "REMOVE": {
        newState = state.filter((it) => it.id !== action.targetId);
        break;
      }
      case "EDIT": {
        newState = state.filter((it) =>
          it.id == action.data.id ? { ...action.data } : it
        );
        break;
      }
      default:
        return state;
    }
    return newState;
  };

  const dataId = useRef(0);

  const [data, dispatch] = useReducer(reducer, [
    {
      id: dataId,
      user: "username",
      pic: "사진",
      content: "dsjklf ajkl sdlaf jslakj fklsdaj flkajdksl jfakl fsdlak fjsdkl",
      date: "기본 날짜",
    },
  ]);

  const onCreate = ({ userId, userPicture, userContent, date }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        user: userId,
        pic: userPicture,
        content: userContent,
        date: date,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "Remove",
      targetId,
    });
  };

  return (
    <FeedStateContext.Provider value={data}>
      <FeedDispatchContext.Provider value={{ onCreate, onRemove }}>
        <div className="body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="new" element={<New />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </FeedDispatchContext.Provider>
    </FeedStateContext.Provider>
  );
}

export default App;
