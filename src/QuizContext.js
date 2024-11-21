// QuizContext.js
import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [savedQuestionIndex, setSavedQuestionIndex] = useState(0);

  return (
    <QuizContext.Provider value={{ savedQuestionIndex, setSavedQuestionIndex }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the QuizContext
export const useQuizContext = () => useContext(QuizContext);
