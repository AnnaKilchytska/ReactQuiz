import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemainig }) {
  const mins = Math.floor(secondsRemainig / 60);
  const seconds = Math.floor(secondsRemainig % 60);

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && 0}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
}
