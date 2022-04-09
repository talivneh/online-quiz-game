import React, { useEffect, useState } from "react";
import "./App.css";
//types
import { Difficulty, fetchQuizQuestions, QuestionState } from "./API";
//components
import QuestionCard from "./components/QuestionCard";
import NextQuestBtn from "./components/NextQuestBtn";
import Loader from "./components/Loader";
import StartBtn from "./components/StartBtn";
import Header from "./components/Header";
import FinishModal from "./components/FinishModal";
//styles
import { StyledApp, StyledBtnWrapper, StyledWrapper } from "./App.style";
import GameSettings from "./components/GameSettings";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type GameSettingsObject = {
  name: string;
  time: number;
  difficulty: Difficulty[];
};

export type HelpType = { time: boolean; hint: boolean };

export type Hint = {
  hide: boolean;
  answers: String[];
};

const initialGameSettings = {
  name: "",
  difficulty: [Difficulty.EASY],
  time: 30,
};

const App = () => {
  const [gameSettings, setGameSettings] =
    useState<GameSettingsObject>(initialGameSettings);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questNum, setQuestNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [timer, setTimer] = useState(gameSettings.time);
  const [active, setActive] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [help, setHelp] = useState<HelpType>({ time: false, hint: false });
  const [hideAnswers, setHideAnswers] = useState<Hint>({
    hide: false,
    answers: [],
  });

  useEffect(() => {
    if (!gameOver && timer > 0 && active) {
      const timerInterval = setTimeout(() => {
        setTimer((timeLeft) => timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerInterval);
    }
    if (timer === 0) {
      setTimeIsUp(true);
    }
  }, [timer, gameOver, active]);

  useEffect(() => {
    if (help.time) setTimer(timer + 10);
  }, [help.time]);

  useEffect(() => {
    if (help.hint) {
      const random = Math.floor(
        Math.random() * questions[questNum].incorrect_answers.length
      );
      const randomAnswers = questions[questNum].incorrect_answers.filter(
        (answer, index) => index !== random
      );
      setHideAnswers({ hide: true, answers: randomAnswers });
    }
  }, [help.hint]);

  useEffect(() => {
    if (timeIsUp) {
      checkAnswer("");
    }
  }, [timeIsUp]);

  useEffect(() => {
    if (gameOver && active) setShowFinishModal(true);
  }, [gameOver, active]);

  const calculateScore = () => {
    //calculate the score by question difficulty, percentage of time took to answer
    //and weather the player used help od not
    let helpFee = 1;
    if (help.time) helpFee++;
    if (help.hint) helpFee++;

    let numByDiff = 1;
    if (questions[questNum].difficulty === Difficulty.MEDIUM) {
      numByDiff = 2;
    }
    if (questions[questNum].difficulty === Difficulty.HARD) {
      numByDiff = 3;
    }
    return (
      ((gameSettings.time - timer / gameSettings.time) * numByDiff) / helpFee
    );
  };

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setTimeIsUp(false);
    setQuestions([]);
    //todo: consider try-catch
    const newQuestions = await fetchQuizQuestions(gameSettings.difficulty);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestNum(0);
    setLoading(false);
    setActive(true);
    setTimer(gameSettings.time);
  };

  const startOver = () => {
    setShowFinishModal(false);
    setGameSettings(initialGameSettings);
  };

  const handleAnswerBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    checkAnswer(answer);
  };

  const checkAnswer = (answer: string) => {
    setActive(false);
    const correct = questions[questNum].correct_answer === answer;
    if (correct) setScore((prev) => prev + calculateScore());
    setUserAnswers((prev) => [...prev, createNewAnswerObject(answer, correct)]);
  };

  const createNewAnswerObject = (answer: string, correct: boolean) => {
    return {
      question: questions[questNum].question,
      answer,
      correct,
      correctAnswer: questions[questNum].correct_answer,
    };
  };

  const handleNextQuestionBtnClick = () => {
    setActive(true);
    setTimer(gameSettings.time);
    setTimeIsUp(false);
    setHideAnswers({
      hide: false,
      answers: [],
    });
    setHelp({ time: false, hint: false });
    const nextQuestion = questNum + 1;
    if (nextQuestion === questions.length) {
      setGameOver(true);
    } else {
      setQuestNum(nextQuestion);
    }
  };

  const handleGameSettingsChange = (
    label: string,
    value: number | string | Difficulty[]
  ) => {
    const newSettings = { ...gameSettings, [label]: value };
    setGameSettings(newSettings);
  };

  const renderGameSettings = () => {
    if (gameOver && !showFinishModal) {
      return (
        <GameSettings
          gameSettings={gameSettings}
          changeGameSettings={handleGameSettingsChange}
        />
      );
    }
  };

  const renderStartButton = () => {
    if (gameOver && !showFinishModal) {
      return (
        <StartBtn
          handleClick={startQuiz}
          disabled={gameSettings.name.length < 2}
        />
      );
    }
  };

  const renderLoader = () => {
    if (loading) {
      return <Loader />;
    }
  };

  const renderQuestionCard = () => {
    if (!loading && !gameOver) {
      return (
        <QuestionCard
          questionNumber={questNum + 1}
          totalQuestions={questions.length}
          question={questions[questNum]}
          answers={questions[questNum].answers}
          userAnswer={userAnswers ? userAnswers[questNum] : undefined}
          callback={handleAnswerBtnClick}
          help={help}
          setHelp={setHelp}
          hideAnswers={hideAnswers}
        />
      );
    }
  };

  const renderNextQuestBtn = () => {
    if (
      (!loading &&
        userAnswers.length === questNum + 1 &&
        !active &&
        !gameOver) ||
      timeIsUp
    ) {
      const btnText = questNum + 1 === questions.length ? "Finish" : "Next";
      return (
        <NextQuestBtn
          handleClick={handleNextQuestionBtnClick}
          btnText={btnText}
        />
      );
    }
  };

  const renderQuestWrapper = () => {
    if (!gameOver) {
      return (
        <>
          {renderQuestionCard()}
          <StyledBtnWrapper>{renderNextQuestBtn()}</StyledBtnWrapper>
        </>
      );
    }
  };

  return (
    <StyledApp>
      <StyledWrapper>
        <Header
          userAnswered={!!userAnswers[questNum]}
          gameOver={gameOver}
          questions={questions}
          score={score}
          loading={loading}
          timer={timer}
          timeIsUp={timeIsUp}
        />
        {renderGameSettings()}
        {renderStartButton()}
        {renderLoader()}
        {renderQuestWrapper()}
        {
          <FinishModal
            score={score}
            handleClose={startOver}
            showModal={showFinishModal}
            name={gameSettings.name}
          />
        }
      </StyledWrapper>
    </StyledApp>
  );
};

export default App;
