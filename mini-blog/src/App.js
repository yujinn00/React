import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>유진의 미니 블로그</MainTitleText>

      <Routes>
        <Route index element={<MainPage></MainPage>}></Route>
        <Route path="post-write" element={<PostWritePage></PostWritePage>}></Route>
        <Route path="post/:postId" element={<PostViewPage></PostViewPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
