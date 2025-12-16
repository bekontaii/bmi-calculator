# BMI Calculator (Node.js)

## Description
This project is a simple BMI (Body Mass Index) calculator built with Node.js and Express.
The user enters weight and height, and the application calculates BMI and shows the result
with a health category.

## Technologies Used
- Node.js
- Express.js
- HTML
- CSS

## How It Works
1. The user opens the main page with a BMI form.
2. The user enters weight (kg) and height (cm).
3. The form sends data to the server using a POST request.
4. The server calculates the BMI value.
5. The result page displays the BMI and the category.

## BMI Formula
BMI = weight (kg) / height² (m)

## BMI Categories
- Underweight: BMI < 18.5
- Normal weight: 18.5 – 24.9
- Overweight: 25 – 29.9
- Obese: BMI ≥ 30

## Project Structure
```bash
bmi-calculator/
- app.js
- package.json
- public/
    - style.css
- views/
    - index.html
    - result.html
```

## How to Run the Project
1. Open the terminal in the project folder.
2. Install dependencies:
   npm install
3. Start the server:
   node app.js
4. Open the browser and go to:
   http://localhost:3000

## Input Validation
- Weight and height must be positive numbers.
- If the input is invalid, an error message is shown.

## Author
Uzbekbayev Bekarys
