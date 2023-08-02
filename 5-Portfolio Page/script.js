const backendUrl = "https://portfolio-backend-te62.onrender.com";

const fetchProjects = async function () {
    try {
        const response = await fetch(backendUrl);
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.log(error);
    }
};

const displayProjects = function (projects) {
    const projectElement = document.querySelector('.project-grid');

    projects.forEach((project) => {
        const item = document.createElement("div");
        item.className = 'project-item'
        item.innerHTML =`<a href=${project.link} target="_blank">
                            <img src=${backendUrl + project.img} alt=${project.name}>
                            <p>${project.name}</p>
                        </a>`;

        projectElement.appendChild(item);
    });
};

document.addEventListener("DOMContentLoaded", fetchProjects);
