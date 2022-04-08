export const shuffleAnswers = (answersArray: any[]) =>
  answersArray.sort(() => Math.random() - 0.5);
