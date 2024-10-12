import { question } from '@/data'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { allQuestions } from '@/data'
import shuffle from '@/utils/shuffle-array'

export type levelName = 'A1' | 'A2' | 'B1' | 'B2'
export type mode = 'exam' | 'training'

export type level = {
  name: levelName
  questions: question[]
}

type ModeAndLevelValue = {
  level: level
  mode: mode
}

type ContextProps = {
  modeAndLevel: ModeAndLevelValue
  setMode: (mode: mode) => void
  setLevel: (level: levelName) => void
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
  const [modeAndLevel, setModeAndLevel] = useState<ModeAndLevelValue>({
    level: { name: 'A1', questions: allQuestions.A1 },
    mode: 'exam',
  })

  const setLevel = (name: levelName) => {
    setModeAndLevel((prev) => ({
      ...prev,
      level: {
        name: name || prev.level.name,
        questions: shuffle(allQuestions[name]),
      },
    }))
  }

  const setMode = (mode: mode) => {
    setModeAndLevel((prev) => ({
      ...prev,
      mode,
    }))
  }

  // Sync the passed `value` prop with state
  useEffect(() => {
    setModeAndLevel((prev) => ({
      level: {
        name: value.level.name || prev.level.name,
        questions: shuffle(allQuestions[value.level.name]),
      },
      mode: value.mode || prev.mode,
    }))
  }, [value])

  return (
    <ModeAndLevelContext.Provider value={{ modeAndLevel, setMode, setLevel }}>
      {children}
    </ModeAndLevelContext.Provider>
  )
}
