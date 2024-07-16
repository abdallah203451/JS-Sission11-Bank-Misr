let score = prompt("Enter your exam score:");

if (!score) {
  document.write("Enter a value");
} else {
  score = Number(score);

  if (score > 100 || score < 0) {
    document.write("Invalid Score");
  } else if (isNaN(score)) {
    document.write("Not a Number");
  } else if (score == 100) {
    document.write("Perfect Score");
  } else if (score >= 85 && score < 100) {
    document.write("You got an A");
  } else if (score >= 75 && score < 85) {
    document.write("You got a B");
  } else if (score >= 65 && score < 75) {
    document.write("You got a C");
  } else if (score >= 50 && score < 65) {
    document.write("You got a D");
  } else if (score >= 0 && score < 50) {
    document.write("You got an F");
  }
}
