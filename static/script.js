document.addEventListener("DOMContentLoaded", () => {
    console.log("Home page loaded!");
  });
  
// Function to dynamically add activity cards to the Activities Section
function loadActivities() {
    const activitiesContent = document.querySelector('.activities-content');
    
    const activities = [
      {
        title: 'AI Workshops',
        description: 'Participate in hands-on workshops covering various AI topics, from machine learning algorithms to deep learning frameworks.',
        image: 'https://via.placeholder.com/552x484'
      },
      {
        title: 'Hackathons',
        description: 'Test your skills in challenging hackathons and collaborate with peers to solve real-world AI problems.',
        image: 'https://via.placeholder.com/552x484'
      },
      {
        title: 'Community Projects',
        description: 'Contribute to open-source projects and community initiatives that make a difference.',
        image: 'https://via.placeholder.com/552x484'
      }
    ];
  
    activities.forEach(activity => {
      const activityCard = document.createElement('div');
      activityCard.classList.add('activity-card');
      
      activityCard.innerHTML = `
        <img src="${activity.image}" alt="${activity.title}">
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
      `;
      
      activitiesContent.appendChild(activityCard);
    });
  }
  
  // Event listener for the "Join Us" button
  document.getElementById('joinUsBtn').addEventListener('click', () => {
    alert("Thank you for joining AI Nexus!");
    document.getElementById('joinUsBtn').innerText = 'You Joined!';
    document.getElementById('joinUsBtn').disabled = true; // Disable the button after click
  });
  
  // Load activities when the page loads
  window.onload = function() {
    loadActivities();
  };
  