fetch('components/projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title} Thumbnail" class="project-thumbnail">
                <p class="project-caption">${project.caption}</p>
                <div class="project-content">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank" class="btn">GitHub Repository</a>
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn">Live Project</a>` : ''}
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });

        // Add fade-in animation for projects
        const projectElements = document.querySelectorAll('.project');
        projectElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 200); // Stagger the animation
        });
    })
    .catch(error => console.error('Error loading projects:', error));
