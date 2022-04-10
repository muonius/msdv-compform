const txt = "the theremin is theirs is their theremin.";
const order = 6;
let ngrams = {};

for (let i = 0; i < txt.length - order; i++) {
  let gram = txt.substring(i, i + order);
  if (!ngrams[gram]) {
    ngrams[gram] = [];
  } else {
    ngrams[gram].push(txt.charAt(i + order));
  }
}
console.log(ngrams);

function markovIt() {
  let currentGram = txt.substring(0, order);
  let result = currentGram;
  for (let i = 0; i < 10; i++) {
    let possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }
    let next = sample(possibilities);
    result += next;
    let len = result.length;
    currentGram = result.substring(len - order, len);
  }
  console.log(result);
}

markovIt();

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// function show(...strings) {
//     for (let s of strings) {
//       // console.log(s);

//       const div = document.createElement("div");
//       div.innerHTML = s;
//       document.body.append(div);
//     }
//   }
