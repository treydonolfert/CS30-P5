// Generative Art - HSB and Custom Palettes
// Treydon Olfert
// March 26, 2024


let rectWidth = 50, rectHeight = 10;
let colors = ["#111625", "#341931", "#571B3C", "#7A1E48", "#9D2053"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawCustom(width*0.7);
}

function drawCustom(x) {
  colorMode(RGB);
  let index = 0;
  for (let y = 0; y < height; y += rectHeight) {
    //cycle through custom palette
    fill(colors[index % 5]);

    //random selection from palette
    fill(colors[int(random(colors.length))]);
    rect(x,y,rectWidth,rectHeight);
    index++;  
  }
}


function drawHSB(x) {
  colorMode(HSB);
  for (let y = 0; y < height; y += rectHeight) {
    let hue = map(y,0,height,0,360);
    fill(hue % 360,360,360);
    rect(x,y,rectWidth,rectHeight);
  }
}


function drawRGB(x) {
  colorMode(RGB);
  for (let y = 0; y < height; y += rectHeight) {
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}
