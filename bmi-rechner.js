const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const weight = document.getElementById("weight-input").value;
  const height = document.getElementById("height-input").value;
  const finalbmi = (weight / (height * height)) * 10000;
  document.getElementById("bmi-output").value = finalbmi.toFixed(1);
  if (finalbmi <= 18.5) {
    document.getElementById("bmi-output").className = "underweight";
  } else if (finalbmi > 18.5 && finalbmi <= 25) {
    document.getElementById("bmi-output").className = "healthy";
  } else if (finalbmi > 25 && finalbmi <= 30) {
    document.getElementById("bmi-output").className = "overweight";
  } else if (finalbmi > 30 && finalbmi <= 35) {
    document.getElementById("bmi-output").className = "obese";
  } else if (finalbmi >= 36) {
    document.getElementById("bmi-output").className = "extremelyobese";
  }
});
