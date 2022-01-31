// require https://cdn.jsdelivr.net/npm/p5
// you can press your mouse to change it

let write
let alphabet = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    ' ': '/',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
}

let a = ['▚', 'A', '𓋇', '◩', '∬', '‰', '㊧', '➘', '³']
let b = ['▜', 'B', '𓇊', '◪', '∭', '‱', '㊨', '⇨', '㎭']
let e = 0, bg = [0, 0, 255], t = 30

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(bg)
    fill(255)
    textSize(t)

    if (mouseIsPressed) {
        t = random(5, 30)
        e = parseInt(random(10))
    }

    write = ("The number of millisecs elapsed since Jan 1, 1970 are" + Date.now())
        .split('')
        .map(function (e) {
            return alphabet[e.toLowerCase()] || '';
        })
        .join(' ')
        .replace(/ +/g, ' ')
        .replaceAll('-', a[e])
        .replaceAll('.', b[e]);

    text(write, 30, 30, 450)
}