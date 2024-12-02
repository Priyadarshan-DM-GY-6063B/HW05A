let centerX, centerY;
let hourRadius = 100;
let minuteRadius = 70;
let secondRadius = 40;
let isDayTime = true; // Flag for Day or Night Mode
let timeGradientStart, timeGradientEnd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  noFill();
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(36);
  updateBackground();  // Set initial background based on current time
}

function draw() {
  // Get the current hour of the day
  let currentHour = hour();

  // Draw the time and update the background based on time and isDayTime state
  updateBackground(currentHour);

  // Calculate time divisions
  let hr = hour();
  let min = minute();
  let sec = second();

  // Smoothly transition circle sizes using sine functions
  let hourPulse = map(sin(millis() / 1000), -1, 1, 0, 1);
  let minutePulse = map(sin(millis() / 1500), -1, 1, 0, 1);
  let secondPulse = map(sin(millis() / 500), -1, 1, 0, 1);

  // Draw the pulsing circles (Time representations)
  drawPulsingCircle(centerX, centerY, hourRadius * (1 + hourPulse), [255, 99, 71]); // Tomato Red for hours
  drawPulsingCircle(centerX, centerY, minuteRadius * (1 + minutePulse), [60, 179, 113]); // Medium Sea Green for minutes
  drawPulsingCircle(centerX, centerY, secondRadius * (1 + secondPulse), [70, 130, 180]); // Steel Blue for seconds

  // Display digital time in the center
  let timeStr = nf(hr, 2) + ":" + nf(min, 2) + ":" + nf(sec, 2);
  fill(255);
  text(timeStr, centerX, centerY);
}

function drawPulsingCircle(x, y, radius, color) {
  stroke(color);
  ellipse(x, y, radius * 2, radius * 2);  // Draw a circle
}

// Function to update background based on time of day and isDayTime flag
function updateBackground(currentHour) {
  let startColor, endColor;

  if (isDayTime) {
    // Time-based background colors
    if (currentHour >= 6 && currentHour < 12) {
      // Morning (6 AM - 12 PM): Soft yellow-orange gradient
      startColor = color(255, 223, 186); // Morning Yellow-Orange
      endColor = color(255, 183, 77); // Afternoon Orange
    } else if (currentHour >= 12 && currentHour < 18) {
      // Afternoon (12 PM - 6 PM): Light blue and yellow gradient
      startColor = color(173, 216, 230); // Light blue
      endColor = color(255, 223, 77); // Light Yellow
    } else if (currentHour >= 18 && currentHour < 21) {
      // Evening (6 PM - 9 PM): Warm red and dark gradient
      startColor = color(255, 99, 71); // Warm Red
      endColor = color(139, 0, 0); // Dark Red
    } else {
      // After 11 PM: White background
      if (currentHour >= 23 || currentHour < 6) {
        background(255); // White background after 11 PM
        return;
      }
      
      // Night (9 PM - 6 AM): Dark blue to dark gray gradient (only before 11 PM)
      startColor = color(0, 0, 50); // Dark Blue
      endColor = color(30, 30, 80); // Darker Blue
    }

    timeGradientStart = lerpColor(timeGradientStart || startColor, startColor, 0.01);
    timeGradientEnd = lerpColor(timeGradientEnd || endColor, endColor, 0.01);
    background(lerpColor(timeGradientStart, timeGradientEnd, 0.5));
  } else {
    // If isDayTime is false, Night Mode (fixed dark background)
    let nightColor = color(0, 0, 50); // Dark Blue
    let darkerNightColor = color(30, 30, 80); // Darker Blue
    background(lerpColor(nightColor, darkerNightColor, 0.5)); // Smooth transition between two night colors
  }
}

// Toggle between day and night mode on mouse click
function mousePressed() {
  isDayTime = !isDayTime; // Toggle day/night mode
  updateBackground(hour()); // Update the background immediately after toggling
}
