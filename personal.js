// Fonction pour créer un carrousel d'images
function createImageCarousel(images) {
    const carousel = document.createElement('div');
    carousel.className = 'image-carousel';

    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'carousel-images';
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Project image';
        imagesContainer.appendChild(img);
    });

    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-button prev';
    prevButton.innerHTML = '❮';

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.innerHTML = '❯';

    const dots = document.createElement('div');
    dots.className = 'carousel-dots';
    
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    carousel.appendChild(imagesContainer);
    if (images.length > 1) {
        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);
        carousel.appendChild(dots);
    }

    let currentSlide = 0;

    function updateDots() {
        const allDots = dots.querySelectorAll('.carousel-dot');
        allDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        imagesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        goToSlide(currentSlide);
    }

    if (images.length > 1) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    return carousel;
}

// Fonction pour créer une carte de projet
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const carousel = createImageCarousel(project.images);
    card.appendChild(carousel);

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