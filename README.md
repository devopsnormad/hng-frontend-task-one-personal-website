# My Tech Goals - Personal Website

## Overview
This is a simple single-page website is the first task (Task One) of my HNG Internship, this website outlines my tech goals for the next 2 years. The website is created using HTML, CSS, and JavaScript, and is designed to be visually appealing and mobile-friendly. 

## Features
- **Responsive Design**: The website is fully responsive and works well on desktop, tablet, and mobile devices.
- **Current Time and Day**: Displays the current time in UTC and the current day of the week.
- **Slack Profile Information**: Displays my Slack display name, email, and profile picture.
- **Links**: Includes links to hng.tech/learn, keyword.dog, and scrapeanyweb.site.
- **Goals Section**: A detailed outline of my tech goals for the next two years.

## Requirements
- Only HTML, CSS, and JavaScript were used.
- Each required element has a `data-testid` attribute for easy identification and testing.
- All images have natural dimensions specified in the image files.

## Data Test IDs
The following elements have unique `data-testid` attributes for testing purposes:
- **Slack Display Name**: `data-testid="slackDisplayName"`
- **Current Time in UTC**: `data-testid="currentTimeUTC"`
- **Current Day**: `data-testid="currentDay"`
- **Slack Email**: `data-testid="slackEmail"`
- **Slack Profile Picture**: `data-testid="slackProfilePicture"`
- **Link to hng.tech/learn**: `data-testid="hngLink"`
- **Link to keyword.dog**: `data-testid="keywordLink"`
- **Link to scrapeanyweb.site**: `data-testid="scrapeanywebLink"`

## File Structure
hng-frontend-task-one-personal-website/
├── index.html
├── styles.css
├── scripts.js
├── images/
│ └── profile-pic.jpeg
├── README.md
