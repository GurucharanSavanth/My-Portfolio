document.addEventListener("DOMContentLoaded", () => {
    // Shrinking Navbar on Scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
    });
	

    // Dynamic Content for Skills
    const skills = [
        { title: "Python", description: "Expert in Python programming and scripting." },
        { title: "Machine Learning", description: "Proficient in developing advanced ML models using TensorFlow and Keras, with a focus on creating scalable solutions that deliver measurable results." },
        { title: "Deep Learning", description: "Experience in CNNs, RNNs, and neural networks." },
        { title: "Data Science", description: "Skilled in data analysis and visualization using Pandas and Matplotlib." },
        { title: "Java", description: "Knowledge of Java programming with a focus on object-oriented principles." },
        { title: "C", description: "Solid foundation in C programming ." },
        { title: "SQL", description: "Comfortable with database management and writing SQL queries." },
        { title: "TensorFlow & Keras", description: "Advanced skills in deep learning frameworks for AI projects." },
        { title: "Git", description: "Version control expert, managing codebases in collaborative environments." }
    ];

    const skillsGrid = document.getElementById("skills-grid");
    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.className = "card";
        skillCard.innerHTML = `<h3>${skill.title}</h3><p>${skill.description}</p>`;
        skillsGrid.appendChild(skillCard);
    });

    // Dynamic Content for Projects
    const projects = [
        {
            title: "Landmark Prediction using CNN",
            description: "Led the development of a highly accurate landmark recognition system utilizing Convolutional Neural Networks (CNN), resulting in improved image classification efficiency.",
            image: "https://via.placeholder.com/800x600?text=Landmark+Prediction+using+CNN"
        },
        {
            title: "Campus Placement Analyzer",
            description: "Designed a predictive model using Logistic Regression, K-Nearest Neighbors, and SVM.",
            image: "https://via.placeholder.com/800x600?text=Campus+Placement+Analyzer"
        },
        {
            title: "Image-to-Image Diffusion Model",
            description: "Engineered a model to modify reference images based on textual descriptions.",
            image: "https://via.placeholder.com/800x600?text=Image-to-Image+Diffusion+Model"
        },
        {
            title: "E-commerce Price Scraping Tool",
            description: "Developed a tool for scraping e-commerce websites to analyze product pricing.",
            image: "https://via.placeholder.com/800x600?text=E-commerce+Price+Scraping+Tool"
        }
    ];

    const projectsGrid = document.getElementById("projects-grid");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "card";
        projectCard.innerHTML = `<img src="${project.image}" alt="${project.title}">
                                  <h3>${project.title}</h3>
                                  <p>${project.description}</p>`;
        projectsGrid.appendChild(projectCard);
    });

    // Dynamic Content for Certifications
    const certifications = [
        { title: "Salesforce: Journey to Employment (J2E)", date: "Jun 2024", image: "https://via.placeholder.com/200x200?text=Salesforce+J2E" },
        { title: "HackerRank: Problem Solving (Basic)", date: "Feb 2024", image: "https://via.placeholder.com/200x200?text=HackerRank+Problem+Solving", description: "Validated my problem-solving capabilities and proficiency in algorithmic challenges, reflecting a strong foundation in logical reasoning and coding efficiency." },
	{ title: "REVA University: AI & ML", date: "Aug 2023", image: "https://via.placeholder.com/200x200?text=REVA+University" },
        { title: "LanguifyAI: Artificial Intelligence with Python", date: "Aug 2023", image: "https://via.placeholder.com/200x200?text=Languify+AI" },
        { title: "Coincent.ai: Artificial Intelligence with Python (Internship)", date: "Aug 2023", image: "https://via.placeholder.com/200x200?text=Coincent+AI" },
        { title: "Great Learning: Python Pandas", date: "Feb 2023", image: "https://via.placeholder.com/200x200?text=Python+Pandas" },
        { title: "Great Learning: NumPy Tutorial (Basic)", date: "Oct 2022", image: "https://via.placeholder.com/200x200?text=NumPy+Tutorial" },
        { title: "nxtGIO Technologies LLP: Internship on Android Development (JAVA)", date: "May 2022", image: "https://via.placeholder.com/200x200?text=Android+Development" },
        { title: "Technofly Solutions: Artificial Intelligence (Internship)", date: "Nov 2021", image: "https://via.placeholder.com/200x200?text=Technofly+AI" }
    ];

    const certificationsGrid = document.getElementById("certifications-grid");
    certifications.forEach(cert => {
        const certCard = document.createElement("div");
        certCard.className = "card";
        certCard.innerHTML = `<img src="${cert.image}" alt="${cert.title}">
                              <h3>${cert.title}</h3><p>${cert.date}</p>`;
        certificationsGrid.appendChild(certCard);
    });

    // Smooth Page Transitions and Section Visibility
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(section);
    });

    // Page Transition Effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1200,
    once: true,
});

// Create a 3D animation using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('hero-canvas'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Trigger animations using Anime.js
anime({
    targets: '.profile-picture',
    scale: [0.8, 1],
    duration: 1500,
    easing: 'easeInOutExpo',
    delay: 500
});

anime({
    targets: '.cta-button',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1500
});

// Intersection Observer for section animations
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
