# AWS Practice Exam 20 - Interactive Exam Interface

A modern, responsive web-based exam interface for AWS Cloud Practitioner practice questions.

## Features

- **50 AWS Cloud Practitioner Questions**: Comprehensive practice exam covering all major AWS topics
- **Interactive Interface**: Clean, modern design with smooth animations
- **Progress Tracking**: Visual progress bar and question counter
- **Multiple Choice Support**: Handles both single and multiple choice questions
- **Instant Scoring**: Immediate results with pass/fail determination
- **Detailed Review**: Review all questions with correct answers and explanations
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Time Limit**: Take your time to answer questions thoughtfully

## Scoring System

- **Total Questions**: 50
- **Points per Question**: 20
- **Total Points**: 1000
- **Passing Score**: 70% (700 points)
- **Pass/Fail**: Immediate feedback upon submission

## How to Use

1. **Open the Exam**: Open `index.html` in any modern web browser
2. **Read Instructions**: Review the exam information and instructions on the welcome screen
3. **Start Exam**: Click "Start Exam" to begin
4. **Answer Questions**:
   - Navigate through questions using "Previous" and "Next" buttons
   - Select answers by clicking on the option boxes
   - Some questions allow multiple answers (clearly indicated)
5. **Submit Exam**: Click "Submit Exam" on the final question
6. **View Results**: See your score, percentage, and pass/fail status
7. **Review Answers**: Click "Review Answers" to see all questions with correct answers
8. **Retake**: Click "Retake Exam" to start over

## File Structure

```
AWS_Exam/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and questions
└── README.md           # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Local Storage**: No data is sent to external servers
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Keyboard navigation and screen reader friendly

## Question Topics Covered

The exam covers all major AWS Cloud Practitioner topics including:

- AWS Global Infrastructure
- Security and Compliance
- Technology (Compute, Storage, Database, Networking)
- Billing and Pricing
- Cloud Concepts
- Well-Architected Framework
- Shared Responsibility Model

## Customization

To modify the exam:

1. **Add/Remove Questions**: Edit the `examQuestions` array in `script.js`
2. **Change Scoring**: Modify the points per question and passing percentage in `script.js`
3. **Update Styling**: Modify `styles.css` for different colors, fonts, or layout
4. **Add Features**: Extend `script.js` with additional functionality like timers or randomization

## Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start practicing for your AWS Cloud Practitioner exam!

Good luck with your AWS certification journey!
