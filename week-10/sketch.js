const storyStormy = {
  start: ["#[student: #heroFirst# #heroSecond#][celeb:#figure#]story#"],
  story:
    "It was a dark and stormy night. Stormy D. just got a #rate#-star Yelp review from the Obamas.#emoji1# She texted her 5th best friend #student# and 18th best friend #celeb# for #entertainment# at #place#. #emoji2# So you know how the story ended, #figure# had #accident1# but that didn't stop #student# from getting #accident2#, #celeb# bounced and left #money# cents in the #scene#. And everybody, even #heroFirst# and #heroFirst# watched it live on TikTok.",
  heroFirst: ["Yuyuan", "Sonya", "Lingyi", "Justin", "Billy", "Erika"],
  heroSecond: ["Brueckner", "Shin", "Bakse", "Ho", "Shao", "Kang"],
  place: ["#heroFirst#'s place", "District 51", "Factory 23", "Studio 54"],
  entertainment: ["homework", "drinks", "lobsters", "$1 pizzas"],
  accident1: ["COVID", "diarrhea", "enough", "a baby"],
  accident2: ["COVID", "a burger", "a Master's degree"],
  figure: [
    "Will Smith",
    "Yoko Ono",
    "Elon Musk",
    "Taylor Swift",
    "Ms Lauryn Hill",
    "Mike Tyson",
  ],
  money: ["13", "23", "73", "43"],
  scene: ["crime scene", "left-over pizza", "super bowl"],
  emoji1: ["🤭", "🤑", "🤳", "🤯", "😳", "🕵️‍♂️"],
  emoji2: ["🧏🏻‍♀️", "🧛🏽‍♀️", "🤦🏼", "🙇🏽‍♂️", "🖖🏾", "🧝🏿‍♀️"],
  rate: ["1", "2", "3", "2", "5"],
  adj: ["dark", "sleepy", "quiet"],
};

function main() {
  let grammar = tracery.createGrammar(storyStormy);
  let story = grammar.flatten("#start#");

  const storyDiv = document.createElement("div");
  storyDiv.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
  storyDiv.innerHTML = story;

  document.body.insertAdjacentElement("beforeend", storyDiv);
}

setTimeout(main, 10);
