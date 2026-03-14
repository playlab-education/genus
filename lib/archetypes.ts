import type { Archetype, AIRelationship } from './types'

export const ARCHETYPES: Record<string, Archetype> = {
  vine: {
    id: 'vine',
    name: 'The Sprawling Vine',
    latinName: 'Vitis expansiva',
    color: '#2D6A4F',
    textColor: '#F0FFF4',
    fieldNote:
      'Grows in all directions at once, finding support wherever it can. Thrives in dense, interconnected environments. Does not self-limit. Given time and contact, covers everything.',
    reading:
      'You build connections before you build anything else. Your classroom is a living system — ideas finding each other, students finding each other, unexpected things growing into unexpected places. You start many things, knowing some will take root and some won\'t, and you\'ve made peace with that. What you create tends to become infrastructure for other people\'s work. The measure of a good thing, for you, isn\'t how finished it looks — it\'s how much it enables.',
    buildingTendency:
      'Starts multiple things simultaneously. Comfortable with open-endedness. Output often becomes the foundation for others.',
    teachingPersonality:
      'Creates dense, interconnected environments. Loves when things grow into each other unexpectedly. Measures success by connection.',
    researchTags: ['intuitive', 'connection-driven', 'nurturer', 'conditions-setter', 'high-tolerance-for-ambiguity'],
  },

  epiphyte: {
    id: 'epiphyte',
    name: 'The Epiphyte',
    latinName: 'Tillandsia libertas',
    color: '#C9B458',
    textColor: '#1A1A0E',
    fieldNote:
      'Grows without soil. Draws what it needs from the air and from passing rain. Attaches to structures without depending on them. Requires nothing from the ground.',
    reading:
      'You build things that work so well people forget you made them. Invisible infrastructure is your craft. You think about what a person needs and then design the conditions for them to find it themselves — then you step back completely. You are systematic about this: you map what you know, identify what you don\'t, and fill the gaps before you start. The finished thing should not need you in the room. If it does, it isn\'t done.',
    buildingTendency:
      'Systematic planner. Builds self-sufficient tools that require no maintenance or explanation.',
    teachingPersonality:
      'Gives students everything they need, then releases completely. Success means the teacher is no longer necessary.',
    researchTags: ['systematic', 'problem-solver', 'guide', 'conditions-setter', 'low-ego-about-credit'],
  },

  nightshade: {
    id: 'nightshade',
    name: 'The Nightshade',
    latinName: 'Solanum ambiguum',
    color: '#1B1B3A',
    textColor: '#E8D5F5',
    fieldNote:
      'Beautiful and slightly dangerous. Not for every garden. Produces something — fruit, seed, alkaloid — that demands attention. Has been used both to harm and to heal. Requires a knowing hand.',
    reading:
      'You build things that make people think thoughts they weren\'t planning to think. You are drawn to the question underneath the question — the discomfort that produces real learning. Your best work isn\'t immediately comfortable. It challenges an assumption, reframes a problem, or names something that was present but unnamed. You know that productive friction is different from pointless friction, and you\'ve learned to tell the difference. Not everyone will appreciate what you make. That\'s a signal you\'re doing it right.',
    buildingTendency:
      'Builds to provoke, reframe, or challenge. Output is often a question dressed as an answer.',
    teachingPersonality:
      'The productive provocateur. Asks the question that makes the room shift. Comfortable with discomfort.',
    researchTags: ['intuitive', 'expression-driven', 'provocateur', 'discomfort-as-tool', 'high-creative-confidence'],
  },

  myrrh: {
    id: 'myrrh',
    name: 'The Myrrh Tree',
    latinName: 'Commiphora profunda',
    color: '#8B4513',
    textColor: '#FFF8F0',
    fieldNote:
      'Produces resin slowly, over years, through small wounds in the bark. What it creates is precious, lasting, and faintly medicinal. It does not rush. The most valuable output requires time to form.',
    reading:
      'You build things meant to be passed forward. Your work accumulates — each year you know more than the last, and what you make reflects that depth. Students come back to you, sometimes years later, because something you made or said is still doing work in them. You think in decades. You are the person in the room who remembers what was tried before and why it didn\'t hold. What you create is often more modest in appearance than it is in impact. The resin takes time.',
    buildingTendency:
      'Builds for longevity. Creates things meant to survive their context. Often the synthesizer of accumulated knowledge.',
    teachingPersonality:
      'Depth over breadth. Long memory. Students return. The educator who shapes someone quietly and permanently.',
    researchTags: ['systematic', 'legacy-driven', 'nurturer', 'conditions-setter', 'long-time-horizon'],
  },

  pioneer: {
    id: 'pioneer',
    name: 'The Pioneer Moss',
    latinName: 'Bryophyta prima',
    color: '#4A7C59',
    textColor: '#F0FFF4',
    fieldNote:
      'The first organism to colonize bare rock. Makes no demands on existing soil. Creates the conditions — the slow accumulation of organic matter, the held moisture — that make everything else possible. Goes where nothing has grown before.',
    reading:
      'You go first so others don\'t have to go alone. You build in contexts where the infrastructure doesn\'t exist yet — where you have to make the path as you walk it. A plan that never gets tried bothers you more than a messy attempt that doesn\'t work, because at least the attempt tells you something. You are drawn to the edge of what\'s possible, not because you need to be first, but because you need to know what\'s there. What you make often becomes the ground that other builders stand on.',
    buildingTendency:
      'Builds where nothing exists yet. High tolerance for failure. Makes infrastructure for future builders.',
    teachingPersonality:
      'The guide into new territory. Goes first. Comfortable with not-knowing as long as movement is happening.',
    researchTags: ['intuitive', 'discovery-driven', 'guide', 'discomfort-as-fuel', 'high-risk-tolerance'],
  },

  bonsai: {
    id: 'bonsai',
    name: 'The Bonsai',
    latinName: 'Pinus forma',
    color: '#D4A843',
    textColor: '#1A1200',
    fieldNote:
      'A tree shaped by sustained, deliberate attention over years. Every branch is a decision. The constraint is not a limitation — it is the medium. Small and complete. A full world in a small vessel.',
    reading:
      'You build with intention at every scale. Scope creep is genuinely upsetting to you — not because you can\'t handle complexity, but because you understand that constraint is generative and diffusion is not. Your best work is tightly scoped and precisely crafted. You take longer than other people think is necessary, and then the thing you make works in ways other people\'s things don\'t. You are the person who asks "what is this actually for?" before anyone else does. The answer shapes everything.',
    buildingTendency:
      'Tightly scoped. Precisely crafted. High investment in design before execution. Dislikes sprawl.',
    teachingPersonality:
      'Designs with intense intentionality. The constraint is the point. Mastery is visible in what was left out.',
    researchTags: ['systematic', 'expression-driven', 'guide', 'close-adjuster', 'perfectionist-tendency'],
  },

  strangler: {
    id: 'strangler',
    name: 'The Strangler Fig',
    latinName: 'Ficus transformans',
    color: '#5C3D2E',
    textColor: '#FFF5EE',
    fieldNote:
      'Begins as a seed dropped into an existing tree. Grows roots downward and branches upward, gradually enveloping the host. Over decades, transforms the structure entirely from within. What remains is something new built around the shape of what was.',
    reading:
      'You work within systems while quietly changing them. You rarely start from nothing — you find what exists, identify the shape of its constraints, and build something new around that shape. Where others see a broken institution, you see a structure to work with. Your patience with imperfect conditions is not resignation — it is strategy. What you build looks like an improvement on something familiar until, eventually, it becomes something else entirely.',
    buildingTendency:
      'Augments, reframes, and transforms what exists. Rarely starts from zero. Builds around institutional constraints.',
    teachingPersonality:
      'Operates within systems while reshaping them. Long game. Transforms from inside.',
    researchTags: ['adaptive', 'systems-thinker', 'provocateur', 'close-adjuster', 'institutional-savvy'],
  },

  sundew: {
    id: 'sundew',
    name: 'The Sundew',
    latinName: 'Drosera curiosa',
    color: '#C94040',
    textColor: '#FFF0F0',
    fieldNote:
      'Carnivorous. Grows in nutrient-poor environments by becoming very good at attracting and processing what passes through. Each glistening trap is both invitation and mechanism. Highly specialized. Thrives precisely where other plants cannot.',
    reading:
      'You make things in order to understand them. The finished artifact is almost secondary to what building it revealed. You are drawn to nutrient-poor environments — the constrained budget, the impossible deadline, the unsolved problem — because limitation forces the kind of focused attention that produces real insight. You notice things other people walk past. Your best work often looks deceptively simple from the outside, with complexity visible only to someone who tries to understand how it was done.',
    buildingTendency:
      'Builds to discover. Turns constraints into features. Work appears simple; process is intricate.',
    teachingPersonality:
      'Creates conditions that attract surprising inputs. Processes them carefully. Finds the generative question.',
    researchTags: ['systematic', 'discovery-driven', 'curious', 'close-adjuster', 'constraint-as-generator'],
  },
}

export const AI_RELATIONSHIPS: Record<string, AIRelationship> = {
  'skeptic-curious': {
    id: 'skeptic-curious',
    name: 'The Skeptic-Curious',
    tagline: 'I want to push it and see where it breaks.',
    description:
      'You use AI, but on your own terms. You approach it with productive suspicion — testing its edges, noting where it fails, maintaining your own judgment as the authority. This isn\'t hostility; it\'s rigor. You find AI most useful when it surprises you, and least useful when it tells you what you already think.',
    researchTags: ['critical-user', 'evidence-based-adoption', 'high-agency', 'tests-limits'],
  },

  'co-conspirator': {
    id: 'co-conspirator',
    name: 'The Co-Conspirator',
    tagline: 'I want to make something with it I couldn\'t make alone.',
    description:
      'You think in duos. AI is most interesting to you when it is a genuine collaborator — when it brings something to the work that changes the work. You are drawn to the unexpected output, the direction you wouldn\'t have taken alone. You don\'t want a tool; you want a partner with its own ideas.',
    researchTags: ['collaborative-mindset', 'creative-adopter', 'output-oriented', 'open-to-surprise'],
  },

  'calibrator': {
    id: 'calibrator',
    name: 'The Calibrator',
    tagline: 'I want to set the rules and watch it work within them.',
    description:
      'You value AI for precision and faithfulness. You want to design the constraints and have AI execute within them — reliably, consistently, without veering. Unpredictability is a bug, not a feature. You are the builder who will invest deeply in system prompt design because you understand that the quality of the instruction determines the quality of the output.',
    researchTags: ['control-oriented', 'systematic-user', 'reliability-focused', 'builder-type'],
  },

  'deep-diver': {
    id: 'deep-diver',
    name: 'The Deep Diver',
    tagline: 'I want to disappear into it and see where it takes me.',
    description:
      'You are less interested in the output than in the process of getting there. AI is a medium for exploration — you follow threads, you go deep, you see where a conversation leads before you decide if it was useful. The journey is the research. You are most frustrated when AI is shallow or brings you back to the surface too quickly.',
    researchTags: ['process-oriented', 'exploratory-user', 'depth-seeker', 'non-linear-thinker'],
  },

  'distant-admirer': {
    id: 'distant-admirer',
    name: 'The Distant Admirer',
    tagline: 'I can see what it could be. I\'m not there yet.',
    description:
      'You watch AI with genuine interest and genuine hesitation. You see the potential — you\'re not dismissing it — but something hasn\'t clicked yet. Maybe it\'s trust. Maybe it\'s not yet finding the right use case. Maybe it\'s a value question you\'re still working through. You\'re not against it. You\'re waiting for the thing that makes you certain it\'s worth your full attention.',
    researchTags: ['cautious-observer', 'potential-adopter', 'trust-gap', 'needs-the-right-entry-point'],
  },
}
