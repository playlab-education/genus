import type { Question } from './types'

export const QUESTIONS: Question[] = [
  // ─── SHORT PATH ──────────────────────────────────────────────────────────────

  {
    id: 1,
    text: "You're starting something new — a unit, a project, an app. What do you do first?",
    type: 'multiple-choice',
    path: 'both',
    options: [
      {
        id: '1a',
        text: 'Sit with the feeling of it until something starts pulling at me',
        scores: { vine: 2, nightshade: 2, pioneer: 1 },
      },
      {
        id: '1b',
        text: 'Make a list of what I need to know and what I don\'t yet',
        scores: { epiphyte: 2, bonsai: 2, myrrh: 1 },
      },
      {
        id: '1c',
        text: 'Talk to someone whose opinion I trust',
        scores: { vine: 2, myrrh: 1, strangler: 1 },
      },
      {
        id: '1d',
        text: 'Find something similar and figure out what I\'d change',
        scores: { strangler: 2, epiphyte: 1, sundew: 1 },
      },
    ],
  },

  {
    id: 2,
    text: 'A lesson goes completely differently than you planned. You feel:',
    type: 'multiple-choice',
    path: 'both',
    options: [
      {
        id: '2a',
        text: 'Relieved — the unplanned version is usually better',
        scores: { vine: 2, pioneer: 2 },
      },
      {
        id: '2b',
        text: 'Curious — what is this moment trying to tell me?',
        scores: { sundew: 2, myrrh: 1 },
      },
      {
        id: '2c',
        text: 'Steadied — I find the through-line and redirect',
        scores: { bonsai: 2, epiphyte: 2 },
      },
      {
        id: '2d',
        text: 'Energized — this is when real learning happens',
        scores: { nightshade: 2, pioneer: 1, strangler: 1 },
      },
    ],
  },

  {
    id: 3,
    text: 'Finish this sentence: The thing I most want to make is...',
    type: 'multiple-choice',
    path: 'both',
    options: [
      {
        id: '3a',
        text: 'Something that works so well people forget I made it',
        scores: { epiphyte: 3, myrrh: 1 },
      },
      {
        id: '3b',
        text: 'Something that makes people see differently',
        scores: { nightshade: 3, sundew: 1 },
      },
      {
        id: '3c',
        text: 'Something people come back to, years later',
        scores: { myrrh: 3, vine: 1 },
      },
      {
        id: '3d',
        text: 'Something that opens a door I haven\'t opened yet',
        scores: { pioneer: 2, sundew: 2 },
      },
    ],
  },

  {
    id: 4,
    text: 'Which bothers you more?',
    type: 'forced-pair',
    path: 'both',
    options: [
      {
        id: '4a',
        text: 'A perfectly designed plan that never gets tried',
        scores: { pioneer: 2, vine: 1, nightshade: 1 },
      },
      {
        id: '4b',
        text: 'A messy attempt that didn\'t quite work',
        scores: { bonsai: 2, epiphyte: 1, myrrh: 1 },
      },
    ],
  },

  {
    id: 5,
    text: 'Honestly, when you think about AI:',
    type: 'multiple-choice',
    path: 'both',
    options: [
      {
        id: '5a',
        text: 'I want to push it and see where it breaks',
        scores: { nightshade: 1, sundew: 1 },
        aiScores: { 'skeptic-curious': 3 },
      },
      {
        id: '5b',
        text: 'I want to lose myself in it and see what we make together',
        scores: { vine: 1, pioneer: 1 },
        aiScores: { 'co-conspirator': 2, 'deep-diver': 1 },
      },
      {
        id: '5c',
        text: 'I want to set the rules and watch it work within them',
        scores: { bonsai: 1, epiphyte: 1 },
        aiScores: { 'calibrator': 3 },
      },
      {
        id: '5d',
        text: 'I see a collaborator I haven\'t quite figured out how to work with yet',
        scores: { strangler: 1, myrrh: 1 },
        aiScores: { 'co-conspirator': 2 },
      },
      {
        id: '5e',
        text: 'I\'m watching from a respectful distance — not yet',
        scores: {},
        aiScores: { 'distant-admirer': 3 },
      },
    ],
  },

  {
    id: 6,
    text: 'Your best teaching moment is when:',
    type: 'multiple-choice',
    path: 'both',
    options: [
      {
        id: '6a',
        text: 'A student makes a connection you didn\'t put there',
        scores: { vine: 2, epiphyte: 1 },
      },
      {
        id: '6b',
        text: 'A student pushes back and you\'re both right',
        scores: { nightshade: 2, strangler: 1 },
      },
      {
        id: '6c',
        text: 'The room goes somewhere nobody planned and everyone knows it',
        scores: { pioneer: 2, vine: 1 },
      },
      {
        id: '6d',
        text: 'You see someone understand something they thought they couldn\'t',
        scores: { myrrh: 2, epiphyte: 1 },
      },
    ],
  },

  // ─── LONG PATH ONLY ──────────────────────────────────────────────────────────

  {
    id: 7,
    text: 'Your classroom is most alive when:',
    type: 'multiple-choice',
    path: 'long',
    options: [
      {
        id: '7a',
        text: 'There\'s productive chaos — multiple things happening at once',
        scores: { vine: 2, pioneer: 1 },
      },
      {
        id: '7b',
        text: 'Everyone is deep in their own work, quietly',
        scores: { bonsai: 2, epiphyte: 1 },
      },
      {
        id: '7c',
        text: 'There\'s a debate nobody expected',
        scores: { nightshade: 2, strangler: 1 },
      },
      {
        id: '7d',
        text: 'Something someone made is being shared with the room',
        scores: { myrrh: 2, vine: 1 },
      },
    ],
  },

  {
    id: 8,
    text: 'When something you built doesn\'t work, you:',
    type: 'multiple-choice',
    path: 'long',
    options: [
      {
        id: '8a',
        text: 'Want to know exactly why — pull it apart',
        scores: { sundew: 2, bonsai: 1 },
      },
      {
        id: '8b',
        text: 'Let it go and start something different',
        scores: { pioneer: 2, vine: 1 },
      },
      {
        id: '8c',
        text: 'Find the one thing that did work and build from there',
        scores: { strangler: 2, epiphyte: 1 },
      },
      {
        id: '8d',
        text: 'Ask the people it didn\'t work for',
        scores: { myrrh: 2, vine: 1 },
      },
    ],
  },

  {
    id: 9,
    text: 'Pick the one that feels most like you. I make things in order to...',
    type: 'multiple-choice',
    path: 'long',
    options: [
      {
        id: '9a',
        text: 'Understand them',
        scores: { sundew: 2, bonsai: 1 },
      },
      {
        id: '9b',
        text: 'Share them',
        scores: { myrrh: 2, vine: 1 },
      },
      {
        id: '9c',
        text: 'Fix something',
        scores: { epiphyte: 2, strangler: 1 },
      },
      {
        id: '9d',
        text: 'Ask a question',
        scores: { nightshade: 2, pioneer: 1 },
      },
    ],
  },

  {
    id: 10,
    text: 'Your relationship to constraints:',
    type: 'multiple-choice',
    path: 'long',
    options: [
      {
        id: '10a',
        text: 'They\'re the best creative prompt I have',
        scores: { bonsai: 2, sundew: 1 },
      },
      {
        id: '10b',
        text: 'I work around them until I can work without them',
        scores: { pioneer: 2, epiphyte: 1 },
      },
      {
        id: '10c',
        text: 'I redesign them as part of the work',
        scores: { strangler: 2, nightshade: 1 },
      },
      {
        id: '10d',
        text: 'I share them openly so others can help me navigate them',
        scores: { vine: 2, myrrh: 1 },
      },
    ],
  },

  {
    id: 11,
    text: 'The educator you most admire is someone who:',
    type: 'multiple-choice',
    path: 'long',
    options: [
      {
        id: '11a',
        text: 'Changed how you see something',
        scores: { nightshade: 2, sundew: 1 },
      },
      {
        id: '11b',
        text: 'Believed in you before you believed in yourself',
        scores: { vine: 2, myrrh: 1 },
      },
      {
        id: '11c',
        text: 'Knew their subject so deeply it felt like magic',
        scores: { epiphyte: 2, bonsai: 1 },
      },
      {
        id: '11d',
        text: 'Made space for questions that didn\'t have answers',
        scores: { pioneer: 2, strangler: 1 },
      },
    ],
  },

  {
    id: 12,
    text: 'AI feels most useful to me when...',
    type: 'open-text',
    path: 'long',
    placeholder: 'Take your time with this one.',
  },
]

export const SHORT_PATH_IDS = QUESTIONS.filter(q => q.path === 'both').map(q => q.id)
export const LONG_PATH_IDS = QUESTIONS.map(q => q.id)

export function getQuestionsForPath(path: 'short' | 'long') {
  return path === 'short'
    ? QUESTIONS.filter(q => q.path === 'both')
    : QUESTIONS
}
