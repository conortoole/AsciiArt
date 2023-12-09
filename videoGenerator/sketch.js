const density = " @$%8743210?!abc*:+=-,._      ";
const frames = ["img/f0.jpg", "img/f1.jpg", "img/f2.jpg", "img/f3.jpg", "img/f4.jpg", "img/f5.jpg", "img/f6.jpg", "img/f7.jpg", "img/f8.jpg", "img/f9.jpg"];
let video;
let asciiDiv;

function setup() {
  noCanvas();
  //video = createCapture(VIDEO);
  video = createVideo(['img/wave.mp4']);
  //video.size(84,48);
  video.loop();
  asciiDiv = createDiv();
}

// function vidLoad() {
//   video.loop();
//   video.volume(0);
// }

// function draw() {

//   video.loadPixels();
//   let asciiImage = "";

//   for (let j = 0; j < video.height; j++) { //double for loop iterates thorugh all pixels in image
//     for (let i = 0; i < video.width; i++) {

//       const pixelIndex = (i + j * video.width) * 4; 
//       const r = video.pixels[pixelIndex + 0]; //gets value at red
//       const g = video.pixels[pixelIndex + 1];
//       const b = video.pixels[pixelIndex + 2];
      
//       const avg = (r + g + b)/3; //taking the average of red green and blue gets you the estimated brighness value
//       const len = density.length;
//       const charIndex = floor(map(avg, 0, 255, 0, len));
//       const c = density.charAt(charIndex); 

//       if (c == ' ') asciiImage += '&nbsp;';
//       else asciiImage += c;      
//       //asciiImage += '<img src="' + c + '">';
//     }
    
//     asciiImage += '<br/>';
//     asciiDiv.html(asciiImage);
    
//   }
// }