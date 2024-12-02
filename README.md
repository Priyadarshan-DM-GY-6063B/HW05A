# Time-Based Interactive Clock

This project is an interactive, time-based clock created using p5.js. The clock tracks time using three subdivisions: hours, minutes, and seconds, visually represented through pulsing circles. The clock adapts based on the time of day, transitioning between day and night modes with a smooth gradient background. The project allows for mouse interactions to toggle between day and night modes, offering a dynamic and engaging visual experience.

## Design Process

The goal of this project was to create a timekeeping mechanism that goes beyond a traditional clock by incorporating an interactive visual experience. The clock uses the following time subdivisions:

- **Hour**: Represented by a pulsing red circle.
- **Minute**: Represented by a pulsing green circle.
- **Second**: Represented by a pulsing blue circle.

Each of these time subdivisions is visualized as a circle that changes size dynamically based on the time, creating a smooth, pulsing effect. The size of each circle is modulated over time using sine functions, which provide a continuous, rhythmic visual representation of the passage of time.

## Time Divisions

For this project, I implemented the following three subdivisions:

1. **Hour**: The current hour in a 24-hour format.
2. **Minute**: The current minute within the hour.
3. **Second**: The current second within the minute.

These subdivisions are dynamically represented as circles that pulse and change size in response to the time. The size of each circle is proportional to the passage of time, with smooth animations created using sine-based functions to simulate pulsing.

## Thoughtfulness and Concept

The clock is designed to be both functional and visually engaging, using time-based visual effects to make the passage of time more dynamic. Additionally, the project includes a unique interactivity element where the user can click the screen to toggle between day and night modes. This allows the user to personalize the experience and changes the visual appearance of the clock, from the colors of the background to the transitions between light and dark modes.

The clock also features a smooth gradient background that changes based on the time of day:
- **Morning (6 AM - 12 PM)**: Soft yellow-orange gradient.
- **Afternoon (12 PM - 6 PM)**: Light blue and yellow gradient.
- **Evening (6 PM - 9 PM)**: Warm red and dark gradient.
- **Night (9 PM - 6 AM)**: Dark blue to dark gray gradient.

## Implementation

- **Time Functions**: The `hour()`, `minute()`, and `second()` functions from p5.js are used to retrieve the current time.
- **Pulsing Circles**: The circles representing the hour, minute, and second pulse dynamically, with their sizes modulated by the sine function over time.
- **Gradient Background**: The background color changes smoothly throughout the day, transitioning between different gradients based on the current time.
- **Mouse Interaction**: The user can click anywhere on the canvas to toggle between day and night modes, altering the clock’s visual appearance.
- **Digital Time Display**: The current time is also displayed digitally in the center of the canvas, showing the exact hour, minute, and second


