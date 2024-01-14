import React, { createContext, useCallback, useEffect, useState } from 'react';
import { SELECTED_THEME_MODE } from 'constants/localStorageKeys';
import { THEME_MODE } from 'theme';

export type CurrencyListContextValue = {
  toggleColorMode: () => void;
  colorMode: THEME_MODE;
  //   quizTheme: string;
  //   setQuizTheme: React.Dispatch<React.SetStateAction<string>>;
  //   topics: ITopicWithSummary[];
  //   setTopics: React.Dispatch<React.SetStateAction<ITopicWithSummary[] | []>>;
  //   generatedQuiz: IGeneratedQuiz[] | [];
  //   setGeneratedQuiz: React.Dispatch<React.SetStateAction<IGeneratedQuiz[] | []>>;
};

interface Props {
  children: React.ReactNode;
}

export const CurrencyListAppContext = createContext<CurrencyListContextValue | undefined>(
  undefined
);

export const CurrencyListAppContextProvider: React.FC<Props> = ({ children }) => {
  const savedColorMode = localStorage.getItem(SELECTED_THEME_MODE) || THEME_MODE.LIGHT;
  // @ts-ignore-error
  const [colorMode, setColorMode] = useState<THEME_MODE>(savedColorMode);
  //   const [quizTheme, setQuizTheme] = useState<string>('');
  //   const [topics, setTopics] = useState<ITopicWithSummary[]>([]);
  //   const [generatedQuiz, setGeneratedQuiz] = useState<IGeneratedQuiz[] | []>([]);

  const toggleColorMode = useCallback(() => {
    setColorMode((prevMode) =>
      prevMode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(SELECTED_THEME_MODE, colorMode);
  }, [colorMode]);

  return (
    <CurrencyListAppContext.Provider
      value={{
        toggleColorMode,
        colorMode
      }}>
      {children}
    </CurrencyListAppContext.Provider>
  );
};
