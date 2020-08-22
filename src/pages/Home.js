import React, { useCallback, Suspense } from "react";
import { Particles, Content, Playground, GameOver } from "@components";
import { gameStateSelector, actions } from "@store/gameReducer";
import { useSelector, useDispatch } from "react-redux";

const Music = React.lazy(() => import("@components/Music"));

function Home() {
  const gameOver = useSelector(gameStateSelector);
  const dispatch = useDispatch();

  const handleGameStart = useCallback(() => {
    dispatch(actions.startGame());
  });

  const handleGameReset = useCallback(() => {
    dispatch(actions.resetGame());
  });

  const renderGameState = () => {
    switch (gameOver) {
      case 0:
        return <Content handleKeyDown={handleGameStart} />;
      case 1:
        return <Playground />;
      case 2:
        return <GameOver handleKeyDown={handleGameReset} />;
    }
  };

  return (
    <div>
      {renderGameState()}
      <Particles />
      <Suspense fallback={"loading music...."}>
        <Music />
      </Suspense>
    </div>
  );
}

export default Home;
