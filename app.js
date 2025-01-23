document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const searchInput = document.getElementById('searchInput');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = 'personal';

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'project-image-container';

        let currentImageIndex = 0;
        const img = document.createElement('img');
        img.className = 'project-image';
        img.src = project.images[currentImageIndex];
        img.alt = project.title;

        if (project.images.length > 1) {
            const imageNav = document.createElement('div');
            imageNav.className = 'image-nav';
            
            project.images.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `image-dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    currentImageIndex = index;
                    img.src = project.images[index];
                    imageNav.querySelectorAll('.image-dot').forEach((d, i) => {
                        d.className = `image-dot ${i === index ? 'active' : ''}`;
                    });
                });
                imageNav.appendChild(dot);
            });
            
            imageContainer.appendChild(imageNav);
        }

        imageContainer.appendChild(img);
        card.appendChild(imageContainer);

        const content = document.createElement('div');
        content.className = 'project-content';
        content.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-year">${project.year}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-stack">
                ${project.stack.map(tech => `<span class="stack-item">${tech}</span>`).join('')}
            </div>
            <div class="project-footer">
                <span>Durée: ${project.duration}</span>
                ${project.link ? `
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                        Voir le projet
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                ` : ''}
            </div>
        `;

        return card;
    }

    function createEducationCard(edu) {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <div class="education-header">
                <div>
                    <h3 class="education-title">${edu.title}</h3>
                    ${edu.specialization ? `<p class="education-specialization">${edu.specialization}</p>` : ''}
                </div>
                <div class="education-period">
                    <p>${edu.period}</p>
                    <p>${edu.duration}</p>
                </div>
            </div>
            <p class="education-description">${edu.description}</p>
        `;
        return card;
    }

    function filterProjects(query) {
        return projects.filter(project => {
            const searchString = `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase();
            return project.type === currentSection && searchString.includes(query.toLowerCase());
        });
    }

    function updateContent(query = '') {
        content.innerHTML = '';
        
        if (currentSection === 'education') {
            education.forEach(edu => {
                content.appendChild(createEducationCard(edu));
            });
        } else {
            const filteredProjects = filterProjects(query);
            filteredProjects.forEach(project => {
                content.appendChild(createProjectCard(project));
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentSection = link.dataset.section;
            searchInput.value = '';
            searchInput.style.display = currentSection === 'education' ? 'none' : 'block';
            updateContent();
        });
    });

    searchInput.addEventListener('input', (e) => {
        updateContent(e.target.value);
    });

    updateContent();
});