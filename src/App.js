import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Router, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import Home from "./pages/Home";
import Page from "./pages/page/Page";
import ChapterList from "./pages/detail/chapter_list/ChapterList";
import Comic from "./pages/detail/Comic";
import Chapter from "./pages/detail/chapter/Chapter";

function App() {
  return (
    <Routes>
      <Route path={""} element={<Home></Home>}>
          <Route path={""} element={<Main></Main>}></Route>
          <Route path={"truyen-moi-cap-nhat"} element={<Page></Page>}></Route>
          <Route path={"ten-truyen"} element={<Comic></Comic>}>
              <Route path={""} element={<ChapterList></ChapterList>}></Route>
              <Route path={"chuong/1"} element={<Chapter></Chapter>}></Route>
          </Route>

      </Route>
        <Route></Route>
    </Routes>
  );
}

export default App;
