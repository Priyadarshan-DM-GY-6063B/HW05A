let centerX, centerY;
let hourRadius = 100;
let minuteRadius = 70;
let secondRadius = 40;
let hourColor, minuteColor, secondColor;
let isDayTime = true; // Day or Night Mode
let colors = {
  hour: [255, 99, 71],  // Tomato Red for hours
  minute: [60, 179, 113],  // Medium Sea Green for minutes
  second: [70, 130, 180]  // Steel Blue for seconds
};
let timeGradientStart, timeGradientEnd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  noFill();
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(36);
}

function draw() {
  // Update background and mode based on isDayTime
  updateBackground();

  // Calculate time divisions
  let hr = hour();
  let min = minute();
  let sec = second();

  // Smoothly transition circle sizes using sine functions
  let hourPulse = map(sin(millis() / 1000), -1, 1, 0, 1);
  let minutePulse = map(sin(millis() / 1500), -1, 1, 0, 1);
  let secondPulse = map(sin(millis() / 500), -1, 1, 0, 1);

  // Draw the pulsing circles (Time representations)
  drawPulsingCircle(centerX, centerY, hourRadius * (1 + hourPulse), colors.hour);
  drawPulsingCircle(centerX, centerY, minuteRadius * (1 + minutePulse), colors.minute);
  drawPulsingCircle(centerX, centerY, secondRadius * (1 + secondPulse), colors.second);

  // Display digital time in the center
  let timeStr = nf(hr, 2) + ":" + nf(min, 2) + ":" + nf(sec, 2);
  fill(255);
  text(timeStr, centerX, centerY);
}

function drawPulsingCircle(x, y, radius, color) {
  stroke(color);
  ellipse(x, y, radius * 2, radius * 2);  // Draw a circle
}

function updateBackground() {
  if (isDayTime) {
    // Daytime Mode (Light Background)
    let startColor = color(255, 223, 186); // Morning Yellow-Orange
    let endColor = color(255, 183, 77); // Afternoon Orange
    timeGradientStart = lerpColor(timeGradientStart || startColor, startColor, 0.01);
    timeGradientEnd = lerpColor(timeGradientEnd || endColor, endColor, 0.01);
    background(lerpColor(timeGradientStart, timeGradientEnd, 0.5));
  } else {
    // Nighttime Mode (Dark Background)
    let startColor = color(0, 0, 50); // Dark Blue for night
    let endColor = color(30, 30, 80); // Darker Blue for night
    timeGradientStart = lerpColor(timeGradientStart || startColor, startColor, 0.01);
    timeGradientEnd = lerpColor(timeGradientEnd || endColor, endColor, 0.01);
    background(lerpColor(timeGradientStart, timeGradientEnd, 0.5));
  }
}

function mousePressed() {
  // Toggle day and night mode on click
  isDayTime = !isDayTime;
}
