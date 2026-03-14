import type { ArchetypeId, AIRelationshipId, QuizAnswers, QuizResult, QuizPath } from './types'
import { QUESTIONS } from './questions'

const ARCHETYPE_IDS: ArchetypeId[] = [
  'vine', 'epiphyte', 'nightshade', 'myrrh',
  'pioneer', 'bonsai', 'strangler', 'sundew',
]

const AI_RELATIONSHIP_IDS: AIRelationshipId[] = [
  'skeptic-curious', 'co-conspirator', 'calibrator',
  'deep-diver', 'distant-admirer',
]

function emptyArchetypeScores(): Record<ArchetypeId, number> {
  return Object.fromEntries(ARCHETYPE_IDS.map(id => [id, 0])) as Record<ArchetypeId, number>
}

function emptyAIScores(): Record<AIRelationshipId, number> {
  return Object.fromEntries(AI_RELATIONSHIP_IDS.map(id => [id, 0])) as Record<AIRelationshipId, number>
}

export function calculateResult(answers: QuizAnswers, path: QuizPath): QuizResult {
  const archetypeScores = emptyArchetypeScores()
  const aiScores = emptyAIScores()
  let openText: string | undefined

  for (const question of QUESTIONS) {
    const answer = answers[question.id]
    if (!answer) continue

    if (question.type === 'open-text') {
      openText = answer
      continue
    }

    const option = question.options?.find(o => o.id === answer)
    if (!option) continue

    // Accumulate archetype scores
    for (const [archetypeId, points] of Object.entries(option.scores)) {
      archetypeScores[archetypeId as ArchetypeId] += points ?? 0
    }

    // Accumulate AI relationship scores
    if (option.aiScores) {
      for (const [aiId, points] of Object.entries(option.aiScores)) {
        aiScores[aiId as AIRelationshipId] += points ?? 0
      }
    }
  }

  const archetype = topKey(archetypeScores, resolveArchetypeTie(answers)) as ArchetypeId
  const aiRelationship = topKey(aiScores) as AIRelationshipId

  return {
    archetype,
    aiRelationship,
    archetypeScores,
    aiScores,
    answers,
    openText,
    path,
    completedAt: new Date().toISOString(),
  }
}

// Returns the key with the highest value. Uses tiebreaker if provided.
function topKey(
  scores: Record<string, number>,
  tiebreaker?: (a: string, b: string) => number
): string {
  const sorted = Object.entries(scores).sort(([aKey, aVal], [bKey, bVal]) => {
    if (bVal !== aVal) return bVal - aVal
    return tiebreaker ? tiebreaker(aKey, bKey) : 0
  })
  return sorted[0][0]
}

// Q4 is the forced pair and the sharpest single separator —
// use it to break ties between archetypes.
function resolveArchetypeTie(answers: QuizAnswers) {
  return (a: string, b: string): number => {
    const q4 = answers[4]
    // 4a favors action-oriented types: pioneer, vine, nightshade
    // 4b favors craft-oriented types: bonsai, epiphyte, myrrh
    const actionTypes = ['pioneer', 'vine', 'nightshade', 'strangler']
    const craftTypes = ['bonsai', 'epiphyte', 'myrrh', 'sundew']

    if (q4 === '4a') {
      if (actionTypes.includes(a) && !actionTypes.includes(b)) return -1
      if (!actionTypes.includes(a) && actionTypes.includes(b)) return 1
    }
    if (q4 === '4b') {
      if (craftTypes.includes(a) && !craftTypes.includes(b)) return -1
      if (!craftTypes.includes(a) && craftTypes.includes(b)) return 1
    }
    return 0
  }
}
