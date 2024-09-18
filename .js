// Modal functionality
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const projectDetails = {
        project1: {
            title: "Project 1",
            description: "This is a detailed description of Project 1. It explains the technology, features, and functionality."
        },
        project2: {
            title: "Project 2",
            description: "This is a detailed description of Project 2. It includes the objectives and results of the project."
        }
    };

    modalTitle.innerText = projectDetails[projectId].title;
    modalDescription.innerText = projectDetails[projectId].description;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};