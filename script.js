// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const content = dropdown.querySelector('.dropdown-content');
        
        // Show dropdown on hover
        dropdown.addEventListener('mouseenter', function() {
            // Close all other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                }
            });
            
            // Show current dropdown
            content.style.display = 'block';
        });
        
        // Hide dropdown when mouse leaves
        dropdown.addEventListener('mouseleave', function() {
            content.style.display = 'none';
        });
    });
    
    // Close dropdowns when pressing Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
