const NEW_LINE = "\n";

johnTheValiant();

export function johnTheValiant() {
  log(`${getIntroMessage()}${NEW_LINE}`);

  const text = getText();
  const formattedText = format(text);
  log(`${formattedText}${NEW_LINE}`);

  const num = getRandomInteger();
  log(isOddOrEven(num));

  if (isInRangeAndEven(num)) {
    log("You are lucky, here is Janos Vitez one more time, nicely.");
    log(formattedText);
  }

  log(`${NEW_LINE}${getGoodbyeMessage()}`);
}

function log(message: string) {
  console.log(message);
}

function getIntroMessage() {
  return `Hello there, I am your homework, make me better ;)`;
}

function getText() {
  return `"No, hogy még szebb legyen," felelt a kapitány,"  Lássunk, embereim, az áldomás után;
Papok pincéjéből van jó borunk elég,  Nézzük meg a kancsók mélységes fenekét!"`;
}

function format(paragraph: string) {
  return paragraph.replace(new RegExp("\\s{2}", "g"), NEW_LINE);
}

function getRandomInteger() {
  return Math.floor(Math.random() * 10);
}

function isOddOrEven(x: number) {
  return `The number is ${x % 2 ? "odd" : "even"} ${x}`;
}

function isInRangeAndEven(x: number) {
  return x < 8 && x > 1 && x % 2 === 0;
}

function getGoodbyeMessage() {
  return `Goodbye`;
}
