export type CharStatus = 'correct' | 'incorrect' | 'playing'

export interface GameData {
  charFade: number[]
  charFadeIndex: string // This is necessary so Redux knows the fade number(s) have been updated
  charGuessed?: string
  hearts: number[]
  heartsIndex: string // This is necessary so Redux knows the fade number(s) have been updated
  highscores: HighScore[]
  highscoresIndex: string // This is necessary so Redux knows the fade number(s) have been updated
  numGuesses: number
  status: 'lost' | 'playing' | 'won'
  score: number
  word: string
  wordGuessed: string[]
  wordGuessedIndex: string // This is necessary so Redux knows the guesses have been updated
  wordLength: number
}

interface HighScore {
  score: number
  username: string
}
