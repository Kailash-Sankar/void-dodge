import React, { useCallback } from "react";
import { Particles, Content, Playground, GameOver } from "@components";
import { gameOverSelector, actions } from "@store/gameReducer";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const gameOver = useSelector(gameOverSelector);
  const dispatch = useDispatch();

  const handleGameStart = useCallback(() => {
    dispatch(actions.setGameOver(1));
  });

  const handleGameReset = useCallback(() => {
    dispatch(actions.setGameOver(0));
    dispatch(actions.resetGame(0));
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
