const grammar = {
  "<start>": ["<5-line> <br/> <7-line> <br/> <5-line>"],
  "<5-line>": [
    "<1> <4>",
    "<1> <3> <1>",
    "<1> <1> <3>",
    "<1> <2> <2>",
    "<1> <2> <1> <1>",
    "<1> <1> <2> <1>",
    "<2> <3>",
  ],
  "<7-line>": [
    "<1> <1> <5-line>",
    "<2> <5-line>",
    "<5-line> <2>",
    "<5-line> <1> <1>",
  ],
  "<1>": [
    "a",
    "the",
    "great",
    "profound",
    "meta",
    "time",
    "space",
    "wonder",
    "is",
    "are",
    "gets",
    "makes",
  ],
  "<2>": ["rainy day", "virtual reality", "delicious meal"],
  "<3>": ["no one knows", "how life works", "we keep pondering"],
  "<4>": [
    "the end starts now",
    "a circle closes itself",
    "the sun rises tomorrow",
  ],
};

const context = {};

const g = RiTa.grammar(grammar, context);
show(g.expand());

function show(...strings) {
  for (let s of strings) {
    console.log(s);
    const div = document.createElement("div");
    div.innerText = s;
    document.body.append(div);
  }
}
