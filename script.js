
/**
 * Sanitizes input strings by escaping HTML entities to prevent
 * Cross-Site Scripting (XSS) vulnerabilities.
 * 
 * @param {string} value - The raw string input from the data object.
 * @returns {string} - The sanitized string safe for HTML insertion.
 */
function escapeHTML(value) {
    if (value === undefined || value === null) {
        return "";
    }
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function populateStaticContent() {
    
    /* ------------------------------------------------------------------------
       NAVBAR & HERO
       ------------------------------------------------------------------------ */
    const initial = PORTFOLIO_DATA.personal.name ? PORTFOLIO_DATA.personal.name.charAt(0).toUpperCase() : "S";
    const navInitialElement = document.getElementById("nav-initial");
    if (navInitialElement) {
        navInitialElement.textContent = initial;
    }
    
    
    const heroHeadlineElement = document.getElementById("hero-headline");
    if (heroHeadlineElement) {

        heroHeadlineElement.innerHTML = PORTFOLIO_DATA.personal.headline.replace(/\n/g, '<br>');
    }

    const heroEyebrow = document.getElementById("hero-eyebrow-text");
    if (heroEyebrow) heroEyebrow.textContent = PORTFOLIO_DATA.hero.eyebrow;

    const heroMainTitle = document.getElementById("hero-main-title");
    if (heroMainTitle) heroMainTitle.innerHTML = PORTFOLIO_DATA.hero.title;

    const heroSubtitle = document.getElementById("hero-subtitle");
    if (heroSubtitle) heroSubtitle.textContent = PORTFOLIO_DATA.hero.subtitle;

    const btnExplore = document.getElementById("hero-btn-explore");
    if (btnExplore) btnExplore.textContent = PORTFOLIO_DATA.hero.btnExplore;

    const btnResume = document.getElementById("hero-btn-resume");
    if (btnResume) {
        btnResume.textContent = PORTFOLIO_DATA.hero.btnResume;
        btnResume.style.display = "none"; // Hides the text container
    }

    const btnContact = document.getElementById("hero-btn-contact");
    if (btnContact) btnContact.textContent = PORTFOLIO_DATA.hero.btnContact;
    
    const resumeBtnElement = document.getElementById("hero-resume-btn");
    if (resumeBtnElement) {
        resumeBtnElement.href = PORTFOLIO_DATA.personal.resume || "#";
        resumeBtnElement.style.display = "none"; // Hides the actual button element
    }
    

    const profileImg = document.getElementById("profile-image");
    const profilePlaceholder = document.getElementById("profile-placeholder");
    
    if (PORTFOLIO_DATA.personal.profileImage) {
        profileImg.src = PORTFOLIO_DATA.personal.profileImage;
        profileImg.alt = PORTFOLIO_DATA.personal.name;
    } else {
        profileImg.style.display = "none";
        if (profilePlaceholder) {
            profilePlaceholder.style.display = "flex";
        }
    }

    /* ------------------------------------------------------------------------
       DYNAMIC SECTION HEADERS
       ------------------------------------------------------------------------ */
    const sec = PORTFOLIO_DATA.sections;
    
    if (document.getElementById("about-num")) document.getElementById("about-num").textContent = sec.about.number;
    if (document.getElementById("about-title")) document.getElementById("about-title").innerHTML = sec.about.title;
    if (document.getElementById("about-desc")) document.getElementById("about-desc").textContent = sec.about.description;

    if (document.getElementById("skills-num")) document.getElementById("skills-num").textContent = sec.skills.number;
    if (document.getElementById("skills-title")) document.getElementById("skills-title").innerHTML = sec.skills.title;
    if (document.getElementById("skills-desc")) document.getElementById("skills-desc").textContent = sec.skills.description;

    if (document.getElementById("projects-num")) document.getElementById("projects-num").textContent = sec.projects.number;
    if (document.getElementById("projects-title")) document.getElementById("projects-title").innerHTML = sec.projects.title;
    if (document.getElementById("projects-desc")) document.getElementById("projects-desc").textContent = sec.projects.description;

    if (document.getElementById("journey-num")) document.getElementById("journey-num").textContent = sec.journey.number;
    if (document.getElementById("journey-title")) document.getElementById("journey-title").innerHTML = sec.journey.title;
    if (document.getElementById("journey-desc")) document.getElementById("journey-desc").textContent = sec.journey.description;

    if (document.getElementById("certs-num")) document.getElementById("certs-num").textContent = sec.certificates.number;
    if (document.getElementById("certs-title")) document.getElementById("certs-title").innerHTML = sec.certificates.title;
    if (document.getElementById("certs-desc")) document.getElementById("certs-desc").textContent = sec.certificates.description;

    if (document.getElementById("contact-title")) document.getElementById("contact-title").innerHTML = sec.contact.title;
    if (document.getElementById("contact-desc")) document.getElementById("contact-desc").textContent = sec.contact.description;


    /* ------------------------------------------------------------------------
       ABOUT SECTION CONTENT
       ------------------------------------------------------------------------ */
    const quoteText = document.getElementById("about-quote-text");
    if (quoteText) quoteText.textContent = `"${PORTFOLIO_DATA.about.quote}"`;
    
    const quoteLabel = document.getElementById("about-quote-label");
    if (quoteLabel) quoteLabel.textContent = PORTFOLIO_DATA.about.quoteLabel;

    const desc1 = document.getElementById("about-text-1");
    if (desc1) desc1.textContent = PORTFOLIO_DATA.about.description1;
    
    const desc2 = document.getElementById("about-text-2");
    if (desc2) desc2.textContent = PORTFOLIO_DATA.about.description2;

    const langContainer = document.getElementById("language-list");
    if (langContainer && PORTFOLIO_DATA.languages) {
        let langHTML = "";
        PORTFOLIO_DATA.languages.forEach(lang => {
            langHTML += `<li><strong>${escapeHTML(lang.language)}:</strong> ${escapeHTML(lang.proficiency)}</li>`;
        });
        langContainer.innerHTML = langHTML;
    }

    /* ------------------------------------------------------------------------
       INFINITE SKILLS SLIDESHOW
       ------------------------------------------------------------------------ */
    if (PORTFOLIO_DATA.skills && PORTFOLIO_DATA.skills.length > 0) {
        let skillsHtml = "";
        PORTFOLIO_DATA.skills.forEach(skill => {
            skillsHtml += `<span class="skill-pill">${escapeHTML(skill)}</span>`;
        });
        
        const cloud1 = document.getElementById("skill-cloud-1");
        const cloud2 = document.getElementById("skill-cloud-2");
        
        if (cloud1) cloud1.innerHTML = skillsHtml;
        if (cloud2) cloud2.innerHTML = skillsHtml;
    }

    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
}


/**
 * Renders the project cards into the DOM.
 */
function renderProjects() {
    const container = document.getElementById("project-container");
    if (!container) return;

    const projects = PORTFOLIO_DATA.projects.filter(p => p.enabled !== false);
    
    if (projects.length === 0) {
        container.innerHTML = `
            <div class="empty-portfolio">
                <div class="empty-portfolio-symbol">∞</div>
                <h3>The work is just beginning.</h3>
                <p>Projects will appear here as they are added to the portfolio.</p>
            </div>
        `;
        return;
    }

    let projectHTML = "";

    projects.forEach((project, index) => {
        let imageElement = "";
        if (project.image) {
            imageElement = `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" loading="lazy">`;
        } else {
            imageElement = `<div class="project-visual-placeholder">DS</div>`;
        }
        
        let tagsElement = "";
        if (Array.isArray(project.tags)) {
            project.tags.forEach(tag => {
                tagsElement += `<span class="project-tag">${escapeHTML(tag)}</span>`;
            });
        }
        
        const filesToCount = [project.dataset, project.notebook, project.report];
        let validFileCount = 0;
        filesToCount.forEach(file => {
            if (file && file.trim() !== "") validFileCount++;
        });
        
        let fileText = "Portfolio entry";
        if (validFileCount > 0) {
            fileText = `${validFileCount} file${validFileCount === 1 ? "" : "s"}`;
        }

        const paddedIndex = String(index + 1).padStart(2, "0");
        const statusText = project.status || "Project";

        projectHTML += `
            <article class="project-card reveal" data-project-index="${index}" tabindex="0" role="button">
                <div class="project-top">
                    <span class="project-index">Project ${paddedIndex}</span>
                    <span class="project-status">${escapeHTML(statusText)}</span>
                </div>
                
                <div class="project-visual">
                    ${imageElement}
                </div>
                
                <div class="project-body">
                    <h3 class="project-title">${escapeHTML(project.title)}</h3>
                    <p class="project-description">${escapeHTML(project.shortDescription)}</p>
                    <div class="project-tags">
                        ${tagsElement}
                    </div>
                </div>
                
                <div class="project-bottom">
                    <span class="project-link" data-open-project="${index}">
                        Explore project <span>→</span>
                    </span>
                    <span class="project-files">${fileText}</span>
                </div>
            </article>
        `;
    });

    container.innerHTML = projectHTML;

    // Project Interactions
    const cards = container.querySelectorAll(".project-card");
    cards.forEach(card => {
        const index = card.dataset.projectIndex;
        
        card.addEventListener("click", () => {
            openProjectModal(Number(index));
        });
        
        card.addEventListener("keydown", (event) => { 
            if (event.key === "Enter" || event.key === " ") { 
                event.preventDefault(); 
                openProjectModal(Number(index)); 
            } 
        });
        
        // Tilt Effect
        card.addEventListener("mousemove", function(event) {
            if (window.innerWidth <= 700) return; 
            const rect = this.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = (x / rect.width - 0.5) * 5;
            const rotateX = (y / rect.height - 0.5) * -5;
            this.style.transform = `translateY(-8px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener("mouseleave", function() { 
            this.style.transform = ""; 
        });
    });
}



function renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    const entries = PORTFOLIO_DATA.experience.filter(e => e.enabled !== false);
    
    let htmlContent = "";
    
    entries.forEach((entry, index) => {
        
        let statusHTML = "";
        if (entry.status) {

            const isCompleted = entry.status.toLowerCase().includes("complete") ? "completed" : "";
            statusHTML = `<span class="timeline-status ${isCompleted}">${escapeHTML(entry.status)}</span>`;
        }

        let certificateHTML = "";
        if (entry.hasCertificate === true && entry.certificateFile) {
            
            let isPDF = false;
            if (entry.certificateType === "pdf") {
                isPDF = true;
            } else if (entry.certificateFile.toLowerCase().endsWith(".pdf")) {
                isPDF = true;
            }

            let thumbnailContent = "";
            if (isPDF) {
                thumbnailContent = `<span class="pdf-icon">PDF</span>`;
            } else {
                thumbnailContent = `<img src="${escapeHTML(entry.certificateFile)}" alt="Certificate Preview" loading="lazy">`;
            }

            certificateHTML = `
                <div class="timeline-cert-preview" 
                     data-cert-file="${escapeHTML(entry.certificateFile)}" 
                     data-cert-title="${escapeHTML(entry.certificateTitle || entry.title)}"
                     data-cert-type="${isPDF ? "pdf" : "image"}"
                     role="button" 
                     tabindex="0"
                     aria-label="View Certificate">
                    ${thumbnailContent}
                </div>
            `;
        }
        
        htmlContent += `
            <article class="timeline-item reveal">
                <div class="timeline-date">${escapeHTML(entry.date)}</div>
                
                <div class="timeline-content">
                    <h3 class="timeline-title">${escapeHTML(entry.title)}</h3>
                    <div class="timeline-subtitle">${escapeHTML(entry.organization)}</div>
                    <p class="timeline-description">${escapeHTML(entry.description)}</p>
                    
                    <div class="timeline-meta-row">
                        ${statusHTML}
                        ${certificateHTML}
                    </div>
                </div>
            </article>
        `;
    });
    
    container.innerHTML = htmlContent;


    const journeyCerts = container.querySelectorAll(".timeline-cert-preview");
    journeyCerts.forEach(preview => {
        
        preview.addEventListener("click", function() {
            const file = this.dataset.certFile;
            const title = this.dataset.certTitle;
            const type = this.dataset.certType;
            openCustomCertificate(file, title, type);
        });

        preview.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                const file = this.dataset.certFile;
                const title = this.dataset.certTitle;
                const type = this.dataset.certType;
                openCustomCertificate(file, title, type);
            }
        });

    });
}


/**
 * Renders the primary Certificates grid.
 */
function renderCertificates() {
    const container = document.getElementById("certificate-container");
    if (!container) return;

    const certs = PORTFOLIO_DATA.certificates.filter(c => c.enabled !== false);
    
    if (certs.length === 0) {
        container.innerHTML = `
            <div class="empty-portfolio" style="grid-column:1/-1;">
                <div class="empty-portfolio-symbol">✦</div>
                <h3>Certificates will live here.</h3>
                <p>Add certificate files to the media folder and create their entries.</p>
            </div>
        `;
        return;
    }

    let certHTML = "";

    certs.forEach((cert, index) => {
        let isPDF = false;
        if (cert.type === "pdf") {
            isPDF = true;
        } else if (cert.file && cert.file.toLowerCase().endsWith(".pdf")) {
            isPDF = true;
        }

        let previewHTML = "";
        if (isPDF) {
            previewHTML = `<div class="certificate-pdf-icon">PDF</div>`;
        } else {
            previewHTML = `<img src="${escapeHTML(cert.file)}" alt="${escapeHTML(cert.title)}" loading="lazy">`;
        }

        let metaText = escapeHTML(cert.issuer || "");
        if (cert.date) {
            metaText += ` · ${escapeHTML(cert.date)}`;
        }

        certHTML += `
            <article class="certificate-card reveal tilt-enabled" data-certificate-index="${index}" tabindex="0" role="button">
                <div class="certificate-preview">
                    ${previewHTML}
                </div>
                <div class="certificate-info">
                    <h3 class="certificate-title">${escapeHTML(cert.title)}</h3>
                    <div class="certificate-meta">${metaText}</div>
                </div>
            </article>
        `;
    });

    container.innerHTML = certHTML;

    const cards = container.querySelectorAll(".certificate-card");
    cards.forEach(card => {
        card.addEventListener("click", function() { 
            openCertificate(Number(this.dataset.certificateIndex)); 
        });
        card.addEventListener("keydown", function(event) { 
            if(event.key === "Enter" || event.key === " "){ 
                event.preventDefault(); 
                openCertificate(Number(this.dataset.certificateIndex)); 
            } 
        });
    });
}



function renderSocialLinks() {
    const container = document.getElementById("social-links");
    if (!container) return;

    const links = PORTFOLIO_DATA.links;
    let linksHTML = "";

    Object.keys(links).forEach(key => {
        const linkData = links[key];
        
        if (linkData && linkData.enabled && linkData.url) {
            const target = key === 'email' ? '_self' : '_blank';
            
            linksHTML += `
                <a href="${escapeHTML(linkData.url)}" target="${target}" rel="noopener noreferrer" class="social-link magnetic">
                    <span class="social-link-icon">
                        <i class="${escapeHTML(linkData.icon)}"></i>
                    </span>
                    ${escapeHTML(linkData.label)}
                </a>
            `;
        }
    });

    container.innerHTML = linksHTML;
}


/**
 * ============================================================================
 * MODAL MANAGEMENT
 * ============================================================================
 */

const projectModal = document.getElementById("project-modal");
const certificateModal = document.getElementById("certificate-modal");
const certificateViewer = document.getElementById("certificate-viewer");

/**
 * Opens the project detail modal.
 * @param {number} index - Index of the project.
 */
function openProjectModal(index) {
    const projects = PORTFOLIO_DATA.projects.filter(p => p.enabled !== false);
    const project = projects[index];
    if (!project) return;

    const numDisplay = String(index + 1).padStart(2, "0");
    document.getElementById("modal-project-number").textContent = `Project ${numDisplay}`;
    document.getElementById("modal-project-title").textContent = project.title || "Project";
    document.getElementById("modal-project-description").textContent = project.fullDescription || project.shortDescription || "";
    
    const tagsContainer = document.getElementById("modal-project-tags");
    if (Array.isArray(project.tags)) {
        let tagHTML = "";
        project.tags.forEach(tag => {
            tagHTML += `<span class="project-tag">${escapeHTML(tag)}</span>`;
        });
        tagsContainer.innerHTML = tagHTML;
    } else {
        tagsContainer.innerHTML = "";
    }

    const actionsContainer = document.getElementById("modal-project-actions");
    let actionHTML = "";
    
    if (project.github) {
        actionHTML += `
            <a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer" class="button primary">
                <span class="button-text">GitHub</span>
                <span class="button-arrow">↗</span>
            </a>
        `;
    }
    if (project.live) {
        actionHTML += `
            <a href="${escapeHTML(project.live)}" target="_blank" rel="noopener noreferrer" class="button">
                <span class="button-text">Live project</span>
                <span class="button-arrow">↗</span>
            </a>
        `;
    }
    if (project.dataset) {
        actionHTML += `
            <a href="${escapeHTML(project.dataset)}" download class="button">
                <span class="button-text">Dataset</span>
                <span class="button-arrow">↓</span>
            </a>
        `;
    }
    if (project.notebook) {
        actionHTML += `
            <a href="${escapeHTML(project.notebook)}" download class="button">
                <span class="button-text">Notebook</span>
                <span class="button-arrow">↓</span>
            </a>
        `;
    }
    if (project.report) {
        actionHTML += `
            <a href="${escapeHTML(project.report)}" target="_blank" rel="noopener noreferrer" class="button">
                <span class="button-text">Report</span>
                <span class="button-arrow">↗</span>
            </a>
        `;
    }
    actionsContainer.innerHTML = actionHTML;


    const gridContainer = document.getElementById("modal-data-grid");
    if (Array.isArray(project.information)) {
        let gridHTML = "";
        project.information.forEach(item => {
            gridHTML += `
                <div class="modal-data-card">
                    <div class="modal-data-label">${escapeHTML(item.label)}</div>
                    <div class="modal-data-value">${escapeHTML(item.value)}</div>
                </div>
            `;
        });
        gridContainer.innerHTML = gridHTML;
    } else {
        gridContainer.innerHTML = "";
    }

    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
}

/**
 * Opens a certificate from the Certificates array.
 * @param {number} index - Index of the certificate.
 */
function openCertificate(index) {
    const certs = PORTFOLIO_DATA.certificates.filter(c => c.enabled !== false);
    const cert = certs[index];
    if (!cert) return;

    let isPDF = false;
    if (cert.type === "pdf") {
        isPDF = true;
    } else if (cert.file && cert.file.toLowerCase().endsWith(".pdf")) {
        isPDF = true;
    }

    if (isPDF) {
        certificateViewer.innerHTML = `<iframe src="${escapeHTML(cert.file)}" title="${escapeHTML(cert.title)}"></iframe>`;
    } else {
        certificateViewer.innerHTML = `<img src="${escapeHTML(cert.file)}" alt="${escapeHTML(cert.title)}">`;
    }

    certificateModal.classList.add("open");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
}

/**
 * Custom opener for certificates explicitly originating from the Journey timeline.
 * @param {string} file - Path to the file.
 * @param {string} title - Title of the certificate.
 * @param {string} type - "pdf" or "image".
 */
function openCustomCertificate(file, title, type) {
    if (!file) return;

    if (type === "pdf") {
        certificateViewer.innerHTML = `<iframe src="${escapeHTML(file)}" title="${escapeHTML(title)}"></iframe>`;
    } else {
        certificateViewer.innerHTML = `<img src="${escapeHTML(file)}" alt="${escapeHTML(title)}">`;
    }

    certificateModal.classList.add("open");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
}


function closeModals() {
    if (projectModal) {
        projectModal.classList.remove("open");
        projectModal.setAttribute("aria-hidden", "true");
    }
    if (certificateModal) {
        certificateModal.classList.remove("open");
        certificateModal.setAttribute("aria-hidden", "true");
        if (certificateViewer) certificateViewer.innerHTML = ""; 
    }
    document.body.classList.remove("no-scroll");
}

// Modal Bindings
const projectCloseBtn = document.getElementById("project-modal-close");
if (projectCloseBtn) projectCloseBtn.addEventListener("click", closeModals);

const certCloseBtn = document.getElementById("certificate-modal-close");
if (certCloseBtn) certCloseBtn.addEventListener("click", closeModals);

[projectModal, certificateModal].forEach(modal => {
    if (modal) {
        modal.addEventListener("click", event => { 
            if (event.target === modal) {
                closeModals(); 
            }
        });
    }
});

document.addEventListener("keydown", event => { 
    if (event.key === "Escape") {
        closeModals(); 
    }
});


/**
 * ============================================================================
 * SCROLL PROGRESS
 * ============================================================================
 */
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    if (!scrollProgress) return;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) {
        scrollProgress.style.width = "0%";
        return;
    }
    const progress = (window.scrollY / scrollableHeight) * 100;
    scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}, { passive: true });


/**
 * ============================================================================
 * SCROLL REVEAL OBSERVER
 * ============================================================================
 */
let revealObserver;

function activateDynamicReveals() {
    const elements = document.querySelectorAll(".reveal:not(.reveal-observed)");
    
    if (!("IntersectionObserver" in window)) {
        elements.forEach(el => el.classList.add("visible"));
        return;
    }
    
    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); 
                }
            });
        }, { 
            threshold: 0.08, 
            rootMargin: "0px 0px -50px 0px" 
        });
    }
    
    elements.forEach(el => {
        el.classList.add("reveal-observed");
        revealObserver.observe(el);
    });
}


/**
 * ============================================================================
 * NAVBAR EFFECTS & SCROLL SPY
 * ============================================================================
 */
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    let currentSectionId = "";
    document.querySelectorAll("main section[id]").forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}, { passive: true });


/**
 * ============================================================================
 * THREE.JS BACKGROUND
 * ============================================================================
 */
let threeScene = null;
let threeCamera = null;
let threeRenderer = null;
let threeParticles = null;
let animationFrame = null;

let scrollAmount = 0;
let currentMouseX = 0;
let currentMouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

function initializeThreeJS() {
    if (!PORTFOLIO_DATA.settings.enableThreeJS || typeof THREE === "undefined") {
        return;
    }
    
    const canvas = document.getElementById("three-background");
    if (!canvas) return;

    const isMobile = window.innerWidth <= 600;
    if (isMobile && !PORTFOLIO_DATA.settings.enableMobile3D) {
        return;
    }

    threeScene = new THREE.Scene();
    threeCamera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    threeCamera.position.z = isMobile ? 9 : 7;

    threeRenderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: !isMobile, 
        powerPreference: "high-performance" 
    });
    
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.8));
    threeRenderer.setSize(window.innerWidth, window.innerHeight);

    const particleCount = isMobile ? 350 : 950;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        positions[i*3] = (Math.random() - 0.5) * 22;
        positions[i*3+1] = (Math.random() - 0.5) * 15;
        positions[i*3+2] = (Math.random() - 0.5) * 18;
    }
    
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({ 
        color: 0x7d9f82, 
        size: isMobile ? 0.018 : 0.025, 
        transparent: true, 
        opacity: isMobile ? 0.32 : 0.5, 
        depthWrite: false 
    });
    
    threeParticles = new THREE.Points(geometry, material);
    threeScene.add(threeParticles);

    const sphereMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x476f51, 
        wireframe: true, 
        transparent: true, 
        opacity: isMobile ? 0.05 : 0.09 
    });
    
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 2), sphereMaterial);
    sphere.position.set(2.5, 0.3, -1.5);
    threeScene.add(sphere);

    const innerMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xc9aa68, 
        wireframe: true, 
        transparent: true, 
        opacity: isMobile ? 0.05 : 0.1 
    });
    
    const innerObject = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), innerMaterial);
    innerObject.position.set(-3, -1, -2);
    threeScene.add(innerObject);

    window.addEventListener("mousemove", (event) => {
        targetMouseX = (event.clientX / window.innerWidth) - 0.5;
        targetMouseY = (event.clientY / window.innerHeight) - 0.5;
    }, { passive: true });

    window.addEventListener("scroll", () => { 
        scrollAmount = window.scrollY; 
    }, { passive: true });
    
    window.addEventListener("resize", () => {
        if (!threeCamera || !threeRenderer) return;
        threeCamera.aspect = window.innerWidth / window.innerHeight;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
        animationFrame = requestAnimationFrame(animate);
        
        currentMouseX += (targetMouseX - currentMouseX) * 0.035;
        currentMouseY += (targetMouseY - currentMouseY) * 0.035;

        if (threeParticles) {
            threeParticles.rotation.y += 0.00025;
            threeParticles.rotation.x = currentMouseY * 0.08;
            threeParticles.position.x = currentMouseX * 0.35;
            threeParticles.position.y = currentMouseY * 0.25;
            threeParticles.position.z = Math.sin(scrollAmount * 0.0004) * 0.25;
        }

        if (sphere) {
            sphere.rotation.x += 0.0015; 
            sphere.rotation.y += 0.002;
            sphere.position.y = 0.3 + Math.sin(performance.now() * 0.0005) * 0.15;
        }
        
        if (innerObject) {
            innerObject.rotation.x -= 0.001; 
            innerObject.rotation.y += 0.002;
        }

        if (threeCamera) {
            threeCamera.position.x += (currentMouseX * 0.5 - threeCamera.position.x) * 0.015;
            threeCamera.position.y += (-currentMouseY * 0.35 - threeCamera.position.y) * 0.015;
            threeCamera.lookAt(0, 0, 0);
        }

        threeRenderer.render(threeScene, threeCamera);
    }
    
    animate();
}

// Pause animation when tab is inactive
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null; 
        }
    } else {
        if (threeScene && threeRenderer && !animationFrame) {
            function resumeAnimation() {
                animationFrame = requestAnimationFrame(resumeAnimation);
                threeRenderer.render(threeScene, threeCamera);
            }
            resumeAnimation();
        }
    }
});


/**
 * ============================================================================
 * MOBILE MENU BINDINGS
 * ============================================================================
 */
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", isOpen);
        document.body.classList.toggle("no-scroll", isOpen);
    });
    
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(anchor => {
        anchor.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            document.body.classList.remove("no-scroll");
            if (menuBtn) {
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    });
}

/**
 * ============================================================================
 * INITIALIZATION
 * ============================================================================
 */
window.addEventListener("load", () => {
    populateStaticContent();
    renderProjects();
    renderExperience();
    renderCertificates();
    renderSocialLinks();
    
    activateDynamicReveals();
    initializeThreeJS();

    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        if (loader) {
            loader.classList.add("loaded");
        }
    }, 650);
});
