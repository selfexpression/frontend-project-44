import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greetingUser = () => {
  console.log(`Hello, ${userName}!`);
};

const getRandomNum = () => Math.ceil(Math.random() * 100);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum();
    const evenNum = num % 2 === 0;

    const que = `Question: ${num}`;
    console.log(que);

    const answerUser = readlineSync.question('Your answer: ');

    const checking1 = (answerUser === 'yes') && (evenNum);
    const checking2 = (answerUser === 'no') && (!evenNum);
    const correctAnswer = (answerUser === 'yes' ? 'no' : 'yes');
    const errorMessage = `${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`;

    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      break;
    }
  }

  return `Congratulations, ${userName}`;
};

export { getRandomNum, evenGame, greetingUser };
