// Define project data
const projects = [
 {
  title: "Urban Traveller",
  description:
   "Join Urban Traveller and explore the world's cities. From iconic landmarks to hidden treasures, experience the diversity of urban life. Discover new tastes, cultures, and stories in every city. Ready to wander? Designed and built with Figma, HTML, CSS, JS and content fetched from a Wordpress REST API.",
  screenshot: "/images/readme.png",
  liveLink: "https://urbantraveller.netlify.app/",
  githubLink:
   "https://github.com/Noroff-FEU-Assignments/project-exam-1-EVeskje.git",
 },
 {
  title: "Square Eyes",
  description:
   "Indulge in endless visual delights at Square Eyes. With a diverse range of movies, shows, and documentaries, there's something for everyone. Grab your snacks, cozy up, and let the screen come alive with captivating stories, one episode at a time. Designed and built with Figma, HTML, CSS, JS and content fetched from a API.",
  screenshot: "/images/readme 3.png",
  liveLink: "https://cross-course-project-veskje.netlify.app/",
  githubLink:
   "https://github.com/Noroff-FEU-Assignments/cross-course-project-EVeskje.git",
 },
 {
  title: "Community Science Museum",
  description:
   "Uncover the world of science at our Community Science Museum. Engaging exhibits and interactive experiences await, inspiring curiosity and a passion for learning. Explore nature, technology, and innovation in a space dedicated to discovery and fun. Designed and built with Figma, HTML & CSS",
  screenshot: "/images/readme 2.png",
  liveLink: "https://envmuseum1.netlify.app/",
  githubLink: "https://github.com/EVeskje/Museum-Project-1.git",
 },
 {
  title: "Funny Fiesta",
  description:
   "Prepare for non-stop laughter at Funny Fiesta! This uproarious celebration features stand-up comedy, whimsical performances, and zany games. Join the merriment and leave with a heart full of laughter and a lasting smile. Designed and built with Figma, HTML, CSS & JavaScript",
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
