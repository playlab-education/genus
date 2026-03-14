export type ArchetypeId =
  | 'vine'
  | 'epiphyte'
  | 'nightshade'
  | 'myrrh'
  | 'pioneer'
  | 'bonsai'
  | 'strangler'
  | 'sundew'

export type AIRelationshipId =
  | 'skeptic-curious'
  | 'co-conspirator'
  | 'calibrator'
  | 'deep-diver'
  | 'distant-admirer'

export type QuestionType = 'multiple-choice' | 'forced-pair' | 'open-text'
export type QuizPath = 'short' | 'long'

export interface AnswerOption {
  id: string
  text: string
  scores: Partial<Record<ArchetypeId, number>>
  aiScores?: Partial<Record<AIRelationshipId, number>>
}

export interface Question {
  id: number
  text: string
  type: QuestionType
  path: 'both' | 'long' // 'both' = appears in both paths, 'long' = long path only
  options?: AnswerOption[]
  placeholder?: string // for open-text questions
}

export interface Archetype {
  id: ArchetypeId
  name: string
  latinName: string
  color: string        // bold background hex
  textColor: string    // for legibility on that background
  fieldNote: string    // 2-3 line naturalist observation
  reading: string      // 1 paragraph builder/creative personality
  buildingTendency: string
  teachingPersonality: string
  researchTags: string[] // for admin/research use
}

export interface AIRelationship {
  id: AIRelationshipId
  name: string
  tagline: string      // the honest one-liner
  description: string
  researchTags: string[]
}

export interface QuizAnswers {
  [questionId: number]: string // option id or open text
}

export interface QuizResult {
  archetype: ArchetypeId
  aiRelationship: AIRelationshipId
  archetypeScores: Record<ArchetypeId, number>
  aiScores: Record<AIRelationshipId, number>
  answers: QuizAnswers
  openText?: string
  path: QuizPath
  completedAt: string // ISO string
}
