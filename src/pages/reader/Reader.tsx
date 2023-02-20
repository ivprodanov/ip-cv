import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { TestTexts } from "./texts";

type TextType = {
  text: string;
  difficulty: number;
};

type TimeOutID = {
  current: | string | number | NodeJS.Timeout | undefined
}

export const Reader = () => {
  const [started, setStarted] = useState(false);
  const [diff, setDiff] = useState(0);
  const [text, setText] = useState<string>("");
  const [word, setWord] = useState("");
  let timeOutID: TimeOutID = useRef(null)

  const startGame = () => {
    setStarted(!started);
  };

  useEffect(() => {
    if (started) {
      readingFunction(text);
    } else {
      clearTimeout(timeOutID?.current);
      console.log('stopped', timeOutID?.current)
    }
  }, [started])

  const chooseDifficulty = (difficulty: number) => {
    let txt;
    if (difficulty !== 0) {
      txt = TestTexts.filter((text) => {
        if (text.difficulty == difficulty) return text.text;
      });

      setText(txt[0].text);
      setDiff(difficulty);
    }
  };

  const readingFunction = (text: string) => {
    let textArray = text.split(" ");
    let wordToShow;

    for (let i = 0; i < textArray.length; i++) {
      timeOutID.current = setTimeout(() => {
        console.log(textArray[i]);
        setWord(textArray[i]);
      }, i * 400 / diff);
    }
  };

  return (
    <div className="h-screen bg-gray-100 custom-bg">
      <div className="flex justify-center">
        <div className="text-7xl text-gray-700 mt-10 font-black font-sans drop-shadow-lg">
          READER
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-4xl text-gray-900 my-2 mt-20 font-black drop-shadow-lg">
          Choose difficulty
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => chooseDifficulty(1)}
          className="bg-cyan-500 rounded-sm text-3xl p-4 text-white hover:bg-cyan-300"
        >
          Easy
        </button>
        <button
          onClick={() => chooseDifficulty(2)}
          className="bg-blue-500 rounded-sm text-3xl p-4 mx-4 text-white hover:bg-blue-300"
        >
          Medium
        </button>
        <button
          onClick={() => chooseDifficulty(3)}
          className="bg-red-500 rounded-sm text-3xl p-4 text-white hover:bg-red-300"
        >
          Tough
        </button>
      </div>
      {diff !== 0 && <div className="flex justify-center">
        <div className="px-20 py-10 bg-stone-300 bg-opacity-75 rounded-lg w-1/4 mt-10">
          <div className="text-3xl text-black text-center">{word}</div>
        </div>
      </div>}
      {diff !== 0 && (
        <div className="flex justify-center">
          <button
            onClick={startGame}
            className="bg-green-700 rounded-sm text-5xl mt-16 py-4 px-10 text-white hover:bg-green-800"
          >
            {!started ? `START!` : `ENOUGH!`}
          </button>
        </div>
      )}
    </div>
  );
};
