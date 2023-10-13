// Define project data
const projects = [
 {
  title: "Urban Traveller",
  description: "##",
  screenshot: "/images/readme.png",
  liveLink: "https://urbantraveller.netlify.app/",
  githubLink:
   "https://github.com/Noroff-FEU-Assignments/project-exam-1-EVeskje.git",
 },
 {
  title: "Square Eyes",
  description: "##",
  screenshot: "/images/readme 3.png",
  liveLink: "https://cross-course-project-veskje.netlify.app/",
  githubLink:
   "https://github.com/Noroff-FEU-Assignments/cross-course-project-EVeskje.git",
 },
 {
  title: "Community Science Museum",
  description: "##",
  screenshot: "/images/readme 2.png",
  liveLink: "https://envmuseum1.netlify.app/",
  githubLink: "https://github.com/EVeskje/Museum-Project-1.git",
 },
 {
  title: "Funny Fiesta",
  description: "##",
  screenshot: "/images/readme 5.png",
  liveLink: "https://funnyfiestatime.netlify.app/",
  githubLink:
   "https://github.com/EVeskje/eirik-nordstrand-veskje-js1-resit.git",
 },
];

// Function to update project cards
function updateProjectCards() {
 projects.forEach((project, index) => {
  const card = document.getElementById(`project${index + 1}`);
  card.querySelector(".project-title").textContent = project.title;
  card.querySelector(".project-description").textContent = project.description;
  card.querySelector(".project-screenshot").src = project.screenshot;
  card.querySelector(".live-link").href = project.liveLink;
  card.querySelector(".github-link").href = project.githubLink;
 });
}

// Call the updateProjectCards function
updateProjectCards();
