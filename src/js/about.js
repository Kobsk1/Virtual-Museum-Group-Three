document.addEventListener('DOMContentLoaded', () => {
    // Fade in animation for team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.1}s`;
    });

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImage');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const closeButton = document.querySelector('.close-button');

    // Open modal when clicking on team member
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const img = member.querySelector('img');
            const name = member.querySelector('.member-name').textContent;
            const role = member.querySelector('.member-role').textContent;
            const contribution = member.querySelector('.member-contribution').textContent;

            modalImg.src = img.src;
            modalName.textContent = name;
            modalRole.textContent = role;
            document.getElementById('modalContribution').textContent = contribution;
            
            // Reset image position and show modal
            modalImg.style.opacity = '0';
            modal.classList.add('show');
            
            // Ensure image is loaded before showing
            modalImg.onload = () => {
                modalImg.style.opacity = '1';
                modalImg.style.transition = 'opacity 0.3s ease';
            };
            
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when clicking close button
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Enable scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });
});