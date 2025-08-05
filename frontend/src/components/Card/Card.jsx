import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { callAPI } from "../../../utils";

function Card() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchLine] = useState("");
  const [showPunchline, setShowPunchLine] = useState(false);

  useEffect(() => {
    callAPI().then((data) => {
      setSetup(data.setup);
      setPunchLine(data.punchline);
    });
  }, []);

  const handleClick = () => {
    if (!showPunchline) {
      setShowPunchLine(true);
    } else {
      callAPI().then((data) => {
        setSetup(data.setup);
        setPunchLine(data.punchline);
        setShowPunchLine(false);
      });
    }
  };

  return (
    <div className="bg-white/10 border border-white/30 rounded-2xl shadow-lg p-8 max-w-xl w-full text-center text-white backdrop-blur-sm">
      <p className="text-2xl md:text-3xl mb-6">{setup}</p>

      {showPunchline && (
        <p className="text-2xl md:text-3xl font-bold mb-6">{punchline}</p>
      )}

      <Button handleClick={handleClick}>
        {showPunchline ? "Next Joke" : "Reveal Punchline"}
      </Button>
    </div>
  );
}

export default Card;
