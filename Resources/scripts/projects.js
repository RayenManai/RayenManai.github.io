const projects = [
  {
    img: "/Resources/home-page-pictures/votingsystem.png",
    name: `Election Information System 
    (BundestagswahlInformationssystem)`,
    description: `The Election Information System is a database-driven application
                    designed to enhance the storage, analysis, and presentation of
                    election data. This consists of two applications:
                    <strong>e-Stimme</strong>: supports electronic voting at polling
                    stations, Key features include secure storage and processing of
                    votes and protection against electoral fraud (multiple votes,
                    voting by unauthorized persons, SQL injection, etc.)
                    <strong>votealyze</strong>: offers an intuitive interface for
                    comparing Bundestag election results from 2017 and 2021. Key
                    features include calculation of parliamentary seat distribution
                    adhering to German electoral laws (Sainte-Laguë), comprehensive
                    result analysis and insights with visualizations and filtering
                    options. <br /><br /><strong style="color: bisque"
                      >Used Technologies: Relational Databases(PostgresSQL, SQL
                      queries), Python, React</strong`,
    link: "Subpages/election-project.html",
    github: "https://github.com/RayenManai/BundestagswahlInformationssystem",
  },
  {
    img: "/Resources/home-page-pictures/vereinfact-logo.png",
    name: "Platform for NGOs",
    description: `This project is a an extensible platform designed to streamline
                operations for organizations and communities, offering a modular
                architecture with extensible plugins and a centralized storage
                solution. In this MVP we implemented two plugins:
                <strong>ProtoGen</strong>, an AI-powered tool that automates
                meeting protocol generation by processing audio recordings into
                structured documents with speaker diarization and transcription
                capabilities, and a <strong>Chatbot</strong>, designed to
                provide quick and verifiable responses to user queries.
                Together, these plugins exemplify the platform’s ability to
                simplify complex tasks and boost productivity while remaining
                user-friendly and customizable.`,
    link: "Subpages/vereinfacht-project.html",
    github: "https://github.com/SoftwareEngineering-WS2025-ARMMS",
  },
  {
    img: "/Resources/home-page-pictures/MolSim.png",
    name: "Bachelor Practical course PSE Molecular Dynamics: Developing a Molecular Dynamics Simulation",
    description: `Particle Representation: Implementation of particle
                representations. <br />Force Calculation: Algorithms for
                computing inter-particle forces. <br />Output and Visualization:
                Output formats and tools for visualizing simulation results.
                <br />
                This course specializes in the integration of best practices in
                software engineering with the focus on optimizing scientific
                computations for conducting molecular dynamics simulations.
                <br />
                <br /><strong style="color: bisque"
                  >Used Technologies: C++, CMake, CI, GoogleTest, Doxygen,
                  spdlog, OpenMP</strong
                >`,
    github: "https://github.com/klaramozna/PSEMolDyn_GroupD",
  },
  {
    img: "/Resources/home-page-pictures/Ferienakademie2023.jpg",
    name: "Ferienakademie 2023: Computational Medical Imaging",
    description: ` I presented a 30-Min Talk about Backpropagation and training
                Neural Networks. <br />
                Projects: implementation of an autograd engine(micrograd) /
                regularized iterative reconstruction for X-ray CT. <br />
                The course focuses on advanced image processing tasks like
                tomographic reconstruction and the synergy between deep learning
                and classical variational methods in medical imaging.`,
    github:
      "https://github.com/RayenManai/Backpropagation-and-training-neural-networks",
  },
  {
    img: "/Resources/home-page-pictures/SheppLogan_Phantom.png",
    name: "Seminar X-ray Computed Tomography",
    description: `I presented a one-hour lesson where I gave an Introduction to
                X-ray computed tomography and the basic mathematics needed for
                it. This work is based on the first three chapters of the book
                Computed Tomography: Algorithms, Insight, and Just Enough Theory
                by Per Christian Hansen, Jakob Sauer Jorgensen, and William R.B.
                Lionheart.`,
    github: "https://github.com/RayenManai/Seminar-X-ray-CT.git",
  },
  {
    img: "/Resources/home-page-pictures/Ferienakademie2022.jpg",
    name: "Ferienakademie 2022: Modern Approaches to Optimization and Verification in Computer Science",
    description: `I presented a 30-minute talk on deductive verification. I
                explained how deductive verification ensures software
                correctness using formal proofs and logical reasoning. Sharing
                real examples, I highlighted its importance in enhancing
                software reliability and contributing to computer science
                optimization and verification.`,
    github: "https://github.com/RayenManai/Deductive-Verification-Talk-Slides",
  },
  {
    img: "/Resources/home-page-pictures/Git-Icon.png",
    name: "Introduction to VCS & Git",
    description: `
    I created this article after learning about Git and GitHub on
                Coursera. It's a simple guide that teaches the basics of version
                control. Using easy examples, it shows how Git tracks changes in
                projects. This helps people work together on code efficiently.
                `,
    link: "Subpages/vcs.html",
  },
];

let currentIndex = 0;
let itemsPerPage = getItemsPerPage();

// Function to get items per page based on screen size
function getItemsPerPage() {
  return window.innerWidth < 1100 ? 1 : 3;
}

function displayProjects() {
  const container = document.getElementById("projectContainer");
  container.innerHTML = "";

  const end = currentIndex + itemsPerPage;
  const visibleProjects = projects.slice(currentIndex, end);

  visibleProjects.forEach((project) => {
    let buttonsHTML = "";

    if (project.link) {
      buttonsHTML += `<a href="${project.link}" class="read-more">
          <i class="fa fa-info-circle"></i> Read More
        </a>`;
    }

    if (project.github) {
      buttonsHTML += `<a href="${project.github}" target="_blank" class="github-link" aria-label="GitHub">
          <i class="devicon-github-original"></i>
        </a>`;
    }

    container.innerHTML += `
      <div class="workcard">
        <img src="${project.img}" class="card__image" />
        <p class="card__name"><b>${project.name}</b></p>
        <div class="grid-container">
          <p>${project.description}</p>
        </div>
        <div class="button-container">
          ${buttonsHTML}
        </div>
      </div>`;
  });

  document.getElementById("prevBtn").disabled = currentIndex === 0;
  document.getElementById("nextBtn").disabled = end >= projects.length;
}

function nextProjects() {
  if (currentIndex + itemsPerPage < projects.length) {
    currentIndex += itemsPerPage;
    displayProjects();
  }
}

function prevProjects() {
  if (currentIndex - itemsPerPage >= 0) {
    currentIndex -= itemsPerPage;
    displayProjects();
  }
}

window.addEventListener("resize", () => {
  const newItemsPerPage = getItemsPerPage();
  if (newItemsPerPage !== itemsPerPage) {
    itemsPerPage = newItemsPerPage;
    currentIndex = 0; // Reset to first page on resize
    displayProjects();
  }
});

// Initial display
displayProjects();
