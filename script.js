// Sample data for racing teams
const racingTeams = [
  { name: 'Team A', category: 'formula1', description: 'Description of Team A' },
  { name: 'Team B', category: 'nascar', description: 'Description of Team B' },
  { name: 'Team C', category: 'motogp', description: 'Description of Team C' },
  // Add more racing teams as needed
];

// Function to display racing teams based on selected category
function displayRacingTeams(category) {
  const teamListElement = document.getElementById('teamList');
  let html = '';

  racingTeams.forEach(team => {
    if (category === 'all' || category === team.category) {
      html += `
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">${team.name}</h5>
            <p class="card-text">${team.description}</p>
            <p class="card-text"><strong>Category:</strong> ${team.category}</p>
          </div>
        </div>
      `;
    }
  });

  teamListElement.innerHTML = html;
}

// Add event listener to the race category filter
document.getElementById('categorySelect').addEventListener('change', function() {
  const selectedCategory = this.value;
  displayRacingTeams(selectedCategory);
});

// Display all racing teams initially
displayRacingTeams('all');
