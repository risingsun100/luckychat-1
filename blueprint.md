# Fortune-Telling Website Blueprint

## Overview
This project aims to create a simple, API-less fortune-telling website inspired by "LuckyChat." Users will input their name and birthdate, and the website will generate a random fortune based on these inputs. The design will be modern, visually appealing, and responsive.

## Features
- User input form (name/profile, birthdate, gender, lunar/solar preference).
- Random fortune generation (client-side, no external APIs).
- Dynamic display of fortunes.
- Modern and responsive UI/UX.
- Utilizes Web Components for modularity.

## Implementation Plan

### 1. Create blueprint.md (Completed)
- This file outlines the project.

### 2. Design and Implement `index.html` (Completed)
- Set up the basic HTML structure.
- Include a title and a descriptive heading.
- Create a form with input fields for name/profile and birthdate.
- Add a button to generate the fortune.
- Create a dedicated section for displaying the generated fortune.
- Link `style.css` and `main.js`.

### 3. Implement `style.css` (Completed)
- Define global styles (font, colors, box-sizing).
- Style the body and main container for a clean layout.
- Style the input form elements for a modern look.
- Style the fortune display area.
- Ensure responsiveness using media queries.

### 4. Write `main.js` (Completed)
- Create a Web Component for displaying the fortune (e.g., `<fortune-display>`).
    - The component will take attributes like `name` and `fortune-text`.
    - It will have its own encapsulated styles.
- Add an event listener to the fortune generation button.
- On button click:
    - Capture user input (name/profile, birthdate).
    - Generate a random fortune using a predefined list of fortunes.
    - Dynamically update the `<fortune-display>` Web Component with the user's name and the generated fortune.
    - Implement basic input validation.

## Current Requested Change: Update Name Input to Name/Profile

### Plan and Steps:
1.  **Update `blueprint.md`**: Update the requirements to reflect "이름이나 프로필" (Done).
2.  **Modify `index.html`**:
    *   Change the label from "👤 이름" to "👤 이름/프로필".
    *   Change the placeholder from "이름을 입력하세요" to "이름이나 프로필을 입력하세요".