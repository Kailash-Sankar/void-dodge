import React, { useCallback } from "react";
import { Particles, Content, Playground, GameOver } from "@components";
import { gameStateSelector, actions } from "@store/gameReducer";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const gameOver = useSelector(gameStateSelector);
  const dispatch = useDispatch();

  const handleGameStart = useCallback(() => {
    dispatch(actions.startGame());
  });

  const handleGameReset = useCallback(() => {
    dispatch(actions.resetGame());
  });

  return (
    <div>
      {gameOver === 0 && <Content handleKeyDown={handleGameStart} />}
      {gameOver === 1 && <Playground />}
      {gameOver === 2 && <GameOver handleKeyDown={handleGameReset} />}
      <Particles />
    </div>
  );
}

export default Home;
