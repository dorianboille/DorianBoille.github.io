// Fonction pour créer une carte de projet
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const image = document.createElement('img');
    image.src = project.images[0];
    image.alt = project.title;
    image.className = 'project-image';
    card.appendChild(image);

    const info = document.createElement('div');
    info.className = 'project-info';

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;
    info.appendChild(title);

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;
    info.appendChild(description);

    const stack = document.createElement('div');
    stack.className = 'project-stack';
    project.stack.forEach(tech => {
        const stackItem = document.createElement('span');
        stackItem.className = 'stack-item';
        stackItem.textContent = tech;
        stack.appendChild(stackItem);
    });
    info.appendChild(stack);

    const duration = document.createElement('div');
    duration.className = 'project-duration';
    duration.textContent = `Durée: ${project.duration}`;
    info.appendChild(duration);

    if (project.link) {
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'project-link';
        link.textContent = 'Voir le projet';
        link.target = '_blank';
        info.appendChild(link);
    }

    card.appendChild(info);
    return card;
}

// Fonction pour filtrer les projets
function filterProjects(projects, searchTerm) {
    return projects.filter(project => {
        const searchString = `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });
}

// Fonction pour afficher les projets
function displayProjects(projectsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    projectsArray.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Affichage initial des projets personnels
    displayProjects(projects.personal, 'personal-projects-grid');

    // Gestionnaire de recherche pour les projets personnels
    document.getElementById('personal-search').addEventListener('input', (e) => {
        const filtered = filterProjects(projects.personal, e.target.value);
        displayProjects(filtered, 'personal-projects-grid');
    });
});