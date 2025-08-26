# Task 03: Stopwatch / Timer App

## 🎯 Objective
Create a stopwatch/timer app with start, pause, and reset functionality.

## 📋 Requirements
- [ ] Start timer functionality
- [ ] Pause timer functionality  
- [ ] Reset timer functionality
- [ ] Display time in HH:MM:SS format
- [ ] Use `setInterval` for timing
- [ ] Proper cleanup in `useEffect`

## 🛠️ Technical Skills to Practice
- `useState` for managing timer state
- `useEffect` for cleanup and side effects
- `setInterval` and `clearInterval`
- Time formatting and calculations
- Component lifecycle management

## 🎨 UI Components Needed
- Timer display (large, centered)
- Start button
- Pause button  
- Reset button
- Button container with proper spacing

## 💡 Implementation Tips
1. Store timer state (running, time elapsed)
2. Use `setInterval` to update time every 1000ms
3. Clean up interval in `useEffect` return function
4. Format time using helper function
5. Handle button states (disable when appropriate)

## 🚀 Bonus Features
- Lap time functionality
- Countdown timer mode
- Save lap times to local storage
- Custom time input for countdown
