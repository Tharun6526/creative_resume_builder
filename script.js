function generatePreview() {
  document.getElementById("namePreview").innerText = document.getElementById("fullName").value;
  document.getElementById("contactPreview").innerText = 
    `${document.getElementById("email").value} | ${document.getElementById("phone").value}\n` +
    `LinkedIn: ${document.getElementById("linkedin").value} | GitHub: ${document.getElementById("github").value}`;

  document.getElementById("summaryPreview").innerText = document.getElementById("summary").value;
  document.getElementById("educationPreview").innerText = document.getElementById("education").value;
  document.getElementById("experiencePreview").innerText = document.getElementById("experience").value;
  document.getElementById("projectsPreview").innerText = document.getElementById("projects").value;
  document.getElementById("certificationsPreview").innerText = document.getElementById("certifications").value;
  document.getElementById("awardsPreview").innerText = document.getElementById("awards").value;
  document.getElementById("activitiesPreview").innerText = document.getElementById("activities").value;
  document.getElementById("languagesPreview").innerText = document.getElementById("languages").value;
  document.getElementById("hobbiesPreview").innerText = document.getElementById("hobbies").value;

  const skills = document.getElementById("skills").value.split(",");
  document.getElementById("skillsPreview").innerHTML = skills
    .map(skill => `<li>${skill.trim()}</li>`)
    .join("");
}

function downloadPDF() {
  const element = document.getElementById("resumePreview");
  const name = document.getElementById("fullName").value.trim().replace(/\s+/g, "_") || "Creative_Resume";
  const opt = {
    margin: 0.5,
    filename: `${name}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}
