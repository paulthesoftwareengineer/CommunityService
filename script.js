// Sample data for community service projects
const projects = [
    { name: 'Project 1', category: 'education', description: 'Description of Project 1' },
    { name: 'Project 2', category: 'environment', description: 'Description of Project 2' },
    { name: 'Project 3', category: 'health', description: 'Description of Project 3' },
    // Add more projects as needed
  ];
  
  // Function to display projects based on selected category
  function displayProjects(category) {
    const projectListElement = document.getElementById('projectList');
    let html = '';
  
    projects.forEach(project => {
      if (category === 'all' || category === project.category) {
        html += `
          <div class="card my-3">
            <div class="card-body">
              <h5 class="card-title">${project.name}</h5>
              <p class="card-text">${project.description}</p>
              <p class="card-text"><strong>Category:</strong> ${project.category}</p>
            </div>
          </div>
        `;
      }
    });
  
    projectListElement.innerHTML = html;
  }
  
  // Add event listener to the category filter
  document.getElementById('categorySelect').addEventListener('change', function() {
    const selectedCategory = this.value;
    displayProjects(selectedCategory);
  });
  
  // Display all projects initially
  displayProjects('all');
  