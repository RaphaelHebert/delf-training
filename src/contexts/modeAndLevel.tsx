import { useLocation } from 'react-router-dom'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { allQuestions, allQuestionsType, levelName } from '@/data'

import { shuffle, shuffleAnswers, shuffleTextQuestions } from '@/utils'

export type mode = 'exam' | 'general-questions' | 'text-comprehension'

export const modes: mode[] = ['exam', 'general-questions', 'text-comprehension']

export type level = {
  name: levelName
  questions: allQuestionsType
}

type ModeAndLevelValue = {
  level: level
  mode: mode
}

type ContextProps = {
  modeAndLevel: ModeAndLevelValue
  setMode: (mode: mode) => void
  setLevel: (level: levelName) => void
  retry: () => void
}

type ProviderProps = {
  children: React.ReactNode
  value: ModeAndLevelValue
}

const ModeAndLevelContext = createContext<ContextProps | undefined>(undefined)

export const useModeAndLevel = () => {
  const context = useContext(ModeAndLevelContext)

  if (!context) {
    throw new Error(
      'useModeAndLevel must be used within a ModeAndLevelProvider'
    )
  }

  return context
}

// The provider component
export const ModeAndLevelProvider: React.FC<ProviderProps> = ({
  children,
  value,
}) => {
  const { pathname } = useLocation()
  const path = decodeURI(pathname.slice(1)).toLocaleLowerCase().trim() as mode
  const URImode = modes.includes(path) ? path : 'general-questions'
  const [modeAndLevel, setModeAndLevel] = useState<ModeAndLevelValue>({
    level: { name: 'A1', questions: allQuestions.A1 },
    mode: URImode,
  })

  const setLevel = (name: levelName) => {
    setModeAndLevel((prev) => ({
      ...prev,
      level: {
        name: name,
        questions: {
          qcm: shuffle(shuffleAnswers(allQuestions[name].qcm)),
          text: shuffleTextQuestions(allQuestions[name].text),
        },
      },
    }))
  }

  const setMode = (newMode: mode) => {
    setModeAndLevel(({ level: { name, questions } }) => ({
      level: {
        name,
        questions: {
          qcm: shuffle(shuffleAnswers(questions.qcm)),
          text: shuffleTextQuestions(questions.text),
        },
      },
      mode: newMode,
    }))
  }

  // reshuffle arrays and rerender elements
  const retry = () => {
    setModeAndLevel((prev) => ({
      ...prev,
      level: {
        ...prev.level,
        questions: {
          qcm: shuffle(shuffleAnswers([...prev.level.questions.qcm])),
          text: shuffleTextQuestions([...prev.level.questions.text]),
        },
      },
    }))
  }

  // Sync the passed `value` prop with state
  useEffect(() => {
    setModeAndLevel((prev) => ({
      level: {
        name: value.level.name || prev.level.name,
        questions: {
          qcm: shuffle(shuffleAnswers(allQuestions[value.level.name].qcm)),
          text: shuffleTextQuestions(allQuestions[value.level.name].text),
        },
      },
      mode: value.mode || prev.mode,
    }))
  }, [value])

  return (
    <ModeAndLevelContext.Provider
      value={{ modeAndLevel, setMode, setLevel, retry }}
    >
      {children}
    </ModeAndLevelContext.Provider>
  )
}
