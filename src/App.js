import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { BoardWrite } from "./page/BoardWrite";
import { HomeLayout } from "./layout/HomeLayout";
import { BoardList } from "./page/BoardList";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<BoardList />} /> // localhost:3000
      <Route path="write" element={<BoardWrite />} /> // localhost:3000/write
    </Route>,
  ),
);
//path는 경로
//element는 path 경로를 가게되면 해당 컴포넌트를 호출함
// router index의 경우 상위 경로를 따라간 다는 의미

function App(props) {
  return <div></div>;
}

export default App;
