import { level } from '@/data'
import { EXAM_QUESTION, EXAM_TIME } from '@/constants'
export const levels: Record<level, string> = {
  A1: 'beginner',
  A2: 'advanced',
  B1: 'confirmed',
  B2: 'expert',
}

export const modes: Record<string, string> = {
  exam: `${EXAM_TIME / 60} minutes, ${EXAM_QUESTION} questions: results available once the exam is completed`,
  training: 'infinite questions with correction',
}
