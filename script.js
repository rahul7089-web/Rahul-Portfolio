        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Animate skill bars on scroll
        const skillSection = document.getElementById('skills');
        const skillBars = document.querySelectorAll('.skill-bar-fill');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        bar.classList.add('filled');
                    });
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        observer.observe(skillSection);

        // Simple form submission (for demonstration, no backend)
        const contactForm = document.querySelector('#contact form');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // For now, we'll just show a success message.
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Display a simple alert (replace with a custom modal in a real app)
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');

            // Clear the form
            contactForm.reset();
        });