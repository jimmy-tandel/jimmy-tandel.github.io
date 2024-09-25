function calculateGrade() {
  // Get values from input fields
  const homeworkAvg = parseInt(document.getElementById("homeworkAvg").value);
  const midExam = parseInt(document.getElementById("midExam").value);
  const finalExam = parseInt(document.getElementById("finalExam").value);
  const participation = parseInt(
    document.getElementById("participation").value
  );

  const resultArea = document.getElementById("resultArea");
  resultArea.innerHTML = ""; // Clear previous result

  // Validate inputs: all fields must be numbers and between 0 and 100
  if (
    isNaN(homeworkAvg) ||
    isNaN(midExam) ||
    isNaN(finalExam) ||
    isNaN(participation) ||
    homeworkAvg < 0 ||
    homeworkAvg > 100 ||
    midExam < 0 ||
    midExam > 100 ||
    finalExam < 0 ||
    finalExam > 100 ||
    participation < 0 ||
    participation > 100
  ) {
    resultArea.innerHTML =
      "Error: Please enter valid numbers between 0 and 100 for all fields.";
    resultArea.style.color = "red";
    return;
  }

  // Calculate final average
  const finalAverage = Math.round(
    0.5 * homeworkAvg + 0.2 * midExam + 0.2 * finalExam + 0.1 * participation
  );

  // Determine letter grade
  let letterGrade;
  if (finalAverage >= 90) {
    letterGrade = "A";
  } else if (finalAverage >= 80) {
    letterGrade = "B";
  } else if (finalAverage >= 70) {
    letterGrade = "C";
  } else if (finalAverage >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  // Display result
  resultArea.innerHTML = `Final Average: ${finalAverage}%<br>Letter Grade: ${letterGrade}`;
  resultArea.style.color = "#2563eb";

  if (letterGrade === "D" || letterGrade === "F") {
    resultArea.innerHTML +=
      "<br><span style='color:red;'>Student must retake the course.</span>";
  }
}
