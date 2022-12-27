import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import GameBoard from "./GameBoard.jsx";

const App = () => {

  // const []

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/gameboard" element={<GameBoard />} />
      </Routes>
    </>
  );
};

export default App;