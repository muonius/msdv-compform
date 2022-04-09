const grammar = {
  start: [
    "$5line <br> $7line <br> $5line <br> <br> <br> $5line <br> $7line <br> $5line <br> <br> <br> $5line <br> $7line <br> $5line",
  ],
  "5line": [
    "$one $four",
    "$one $three $one",
    "$one $one $three",
    "$two $three",
    "$two $three",
  ],
  "7line": [
    "$one $one $5line",
    "$two $5line",
    "$5line $two",
    "$5line $one $one",
    "$four $two $one",
    "$one $5line $one",
    "$two $three $two",
    "$four $three",
    "$three $four",
  ],
  one: [
    "a",
    "the",
    "ponders",
    "his",
    "her",
    "their",
    "great",
    "profound",
    "consciousness",
    "time",
    "space",
    "wonder",
    "gets",
    "makes",
    "does",
    "did",
    "hears",
    "listens",
    "sees",
    "beauty",
    "truth",
    "goodness",
    "happiness",
    "love",
    "says",
  ],
  two: [
    "a man",
    "the man",
    "a woman",
    "the woman",
    "the girl",
    "the boy",
    "reason why",
    "never ends",
    "everyday is",
    "the world",
    "nature is",
    "the earth",
    "who listens",
    "who he",
    "who she",
  ],
  three: [
    "no one knows",
    "how life works",
    "we keep pondering",
    "just getting started",
    "never too late",
    "bit by bit",
    "the unsung heros",
    "the flying fish",
    "the little prince",
    "connecting the dots",
    "seizes every opportunity",
  ],
  four: [
    "the end starts now",
    "a circle closes itself",
    "the sun rises tomorrow",
    "like peeling an onion",
    "opportunity knocks but once",
  ],
};

const context = {};

const g = RiTa.grammar(grammar, context);

const title = document.createElement("div");
title.innerHTML = "<h1> A Poem </h1>";
document.body.append(title);

show(g.expand());

function show(...strings) {
  for (let s of strings) {
    // console.log(s);
    const div = document.createElement("div");
    div.innerHTML = s;
    document.body.append(div);
  }
}
