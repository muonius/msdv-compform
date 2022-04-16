const alcatraz =
  "GOOD CONDUCT means conducting yourself in a quiet and orderly manner and keeping your cell neat, clean and free from contraband. It means obeying the rules of the Institution and displaying a co-operative attitude. It also means obeying orders of Officials, Officers and other employees without delay or argument. GOOD WORK RECORD means the reputation you establish as a willing, capable workman, doing your best at whatever work you are told to do.YOUR GOOD CONDUCT RECORD AND YOUR GOOD WORK RECORD will be reviewed every time you are considered for work assignments, cell changes, and disciplinary action.STATUTORY GOOD TIME, MERITORIOUS GOOD TIME AND INDUSTRIAL GOOD TIME are types of reduction in sentence which can be earned only by inmates who establish and keep a good conduct record and a good work record.5. PRIVILEGES. You are entitled to food, clothing, shelter and medical attention. Anything else that you get is a privilege. You earn your privileges by conducting yourself properly. 'Good Standing' is a term applied to inmates who have a good conduct record and a good work record and who are not undergoing disciplinary restrictions.DISCIPLINARY ACTION may result in loss of some or all of your privileges and/or confinement in the Treatment Unit. TREATMENT UNIT is the segregation section of the Institution where privileges may be restricted to a minimum.PROSECUTION IN THE U.S. DISTRICT COURT in addition to Institutional disciplinary action may result if you commit any serious offense such as assault, escape, attempt to escape, rioting, destruction of government property, etc.FORFEITURE OR WITHHOLDING OF EARNED GOOD TIME, STATUTORY OR INDUSTRIAL, in addition to disciplinary action and/or prosecution in the District Court, may result if you become involved in any serious misconduct.RESTORATION OF FORFEITED OR WITHHELD GOOD TIME will not be recommended unless you can show at least one year of better than average good conduct and good work when you are called for your annual Classification Hearing.";
const declaration =
  "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.";

const title = document.createElement("h1");
title.innerHTML = 'Declaration of Independence "Alcatrazed"';
document.body.append(title);

const model = generateModel(alcatraz, declaration);

const output_text = generateText(model);
const bodyText = document.createElement("div");
bodyText.innerHTML = output_text;
document.body.append(bodyText);
// console.log(output_text);

// creates a markov chain model based on one or more input strings
function generateModel(...args) {
  const word = args.join(" ").toLowerCase().split(" ");
  let words = word;
  for (let i = 0; i < 5; i++) {
    words.concat(word);
  }
  const model = {};

  // loop through all the words except the last one.
  for (let i = 0; i < words.length - 1; i++) {
    const target_word = words[i];
    const next_word = words[i + 1];

    // if the model doesn't contain the target word, add it.
    if (!model[target_word]) {
      model[target_word] = [];
    }

    // add the next word to the possibilities for target_word
    model[target_word].push(next_word);
  }

  return model;
}

function generateText(model, first_word) {
  // if first_word isn't provided use a random word in the model object
  first_word = first_word || sample(Object.keys(model));

  // start with the word passed in
  let output_text = first_word;
  let current_word = first_word;
  for (let i = 0; i < 100; i++) {
    // choose the next word by sampling from options in the model
    current_word = sample(model[current_word]);

    // append word to output
    output_text += " ";
    output_text += current_word;

    // if we get to a word that ends with "." we are done.
    const last_character = current_word.substr(current_word.length - 1);
    if (last_character === ".") {
      break;
    }
  }
  return output_text[0].toUpperCase() + output_text.slice(1);
}

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
