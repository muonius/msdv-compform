

setQuick(img, x, y, c)

function setQuick(img, x, y, c) {
    let i = (y * img.width + x) * 4;
    img.pixels[i] = c[0];
    img.pixels[i + 1] = c[1];
    img.pixels[i + 2] = c[2];
    img.pixels[i + 3] = c[3];
}