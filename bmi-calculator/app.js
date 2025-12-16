const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const VIEWS_DIR = path.join(__dirname, "views");


app.get("/", (req, res) => {
  const indexPath = path.join(VIEWS_DIR, "index.html");
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  } else {
    return res.status(500).send("index.html не найден в папке views");
  }
});


app.get("/result.html", (req, res) => {
  const resultPath = path.join(VIEWS_DIR, "result.html");
  if (fs.existsSync(resultPath)) {
    return res.sendFile(resultPath);
  } else {
    return res.status(500).send("result.html не найден в папке views");
  }
});


app.post("/calculate-bmi", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  if (!weight || !height || weight <= 0 || height <= 0) {
    return res.redirect("/result.html?error=Invalid+input");
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let category = "";
  let color = "";

  if (bmi < 18.5) { category = "Underweight"; color = "blue"; }
  else if (bmi < 24.9) { category = "Normal"; color = "green"; }
  else if (bmi < 29.9) { category = "Overweight"; color = "yellow"; }
  else { category = "Obese"; color = "red"; }

  const redirectUrl = `/result.html?bmi=${encodeURIComponent(bmi.toFixed(2))}&category=${encodeURIComponent(category)}&color=${encodeURIComponent(color)}`;
  res.redirect(redirectUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
