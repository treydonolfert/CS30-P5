// Ninety Parallel Sinusoids Recreation
// Treydon Olfert
// March 27, 2024
// Using points to draw ninety parallel sinusoids with linearly increasing period


//global variable - amplitude of sine wave
let amplitude = 20;

function setup() {
  createCanvas(windowWidth, windowHeight); //should work with most canvas sizes
  strokeWeight(2);
  for (let i = 0; i < 90; i++) {
    let frequency = 1;
    for (let x = 20; x < width - 20; x++) {
      let mappedX = map(x, 20, width - 20, 0, 1.5 * PI); //mapping x to an interval that is just a small portion of the actual sine function
      let y = map(i,0,89,50,height-50) + amplitude * sin(frequency * mappedX); //i gets mapped so that each parallel sine wave is evenly distributed and then y = mapped i + sine function
      point(x, y);
      frequency += 0.01;
    }
  }
}