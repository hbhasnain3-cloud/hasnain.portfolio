// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Animate skill bars on scroll
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (isElementInViewport(bar)) {
                    bar.style.width = width + '%';
                }
            });
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', animateSkillBars);
        window.addEventListener('load', animateSkillBars);

        // Project data
        const projects = {
            1: {
                title: "E-commerce Website",
                description: "A fully responsive e-commerce website with product filtering, shopping cart functionality, and secure checkout process. This project demonstrates my ability to create complex web applications with user authentication and payment integration.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
                liveDemo: "#",
                sourceCode: "#"
            },
            2: {
                title: "Portfolio Website",
                description: "A clean and modern portfolio website for a photographer with an elegant image gallery, contact form, and responsive design. The website showcases the photographer's work in an aesthetically pleasing manner.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Lightbox"],
                liveDemo: "#",
                sourceCode: "#"
            },
            3: {
                title: "Blog Platform",
                description: "A responsive blog platform with categories, tags, comment functionality, and an admin panel for content management. This project features a clean UI and intuitive user experience for both readers and administrators.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
                liveDemo: "#",
                sourceCode: "#"
            }
        };

        // Project modal functionality
        document.querySelectorAll('.view-project').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projects[projectId];
                
                document.getElementById('projectTitle').textContent = project.title;
                document.getElementById('projectDescription').textContent = project.description;
                document.querySelector('.project-modal-img').src = project.image;
                
                const techContainer = document.getElementById('projectTech');
                techContainer.innerHTML = '';
                project.technologies.forEach(tech => {
                    const techTag = document.createElement('span');
                    techTag.className = 'tech-tag';
                    techTag.textContent = tech;
                    techContainer.appendChild(techTag);
                });
                
                document.getElementById('liveDemo').href = project.liveDemo;
                document.getElementById('sourceCode').href = project.sourceCode;
                
                const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
                projectModal.show();
            });
        });

        // Contact form validation and submission
        (function() {
            'use strict';
            window.addEventListener('load', function() {
                // Fetch the form we want to apply custom validation styles to
                var form = document.getElementById('contactForm');
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        event.preventDefault();
                        alert('Thank you for your message! I will get back to you soon.');
                        form.reset();
                        form.classList.remove('was-validated');
                    }
                    form.classList.add('was-validated');
                }, false);
            }, false);
        })();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });