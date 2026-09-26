
const PORTFOLIO_DATA = {

    /**
     * ========================================================================
     * PERSONAL IDENTIFICATION & GLOBAL SETTINGS
     * ========================================================================
     */
    personal: {
        
        // Your full name. This generates the 'S' logo in the navbar automatically.
        name: 
            "Saptarshi Basak",
        
        // The main greeting in the Hero section. Use \n for a line break.
        headline: 
            "Hi,\nI'm Saptarshi Basak",
        
        // Your professional title or academic standing.
        role: 
            "Data Science & AI Student",
        
        // Your current location.
        location: 
            "Dhupguri, West Bengal, India",
        
        // The email address where clients or recruiters can reach you.
        email: 
            "saptarshibasak2006@gmail.com",
        
        // The path to your profile picture in the media folder.
        profileImage: 
            "media/profile.png",
        
        // The path to your downloadable PDF resume in the media folder.
        resume: 
            "media/resume.pdf"
        
    },

    /**
     * ========================================================================
     * DYNAMIC SECTION HEADINGS
     * ========================================================================
     */
    sections: {
        
        about: {
            number: 
                "01 / About",
            title: 
                "Curious by nature.<br>Analytical by design.",
            description: 
                "My personal introduction, academic journey, interests, goals and the story behind my work."
        },
        
        skills: {
            number: 
                "02 / Skills",
            title: 
                "Tools for turning<br>ideas into systems.",
            description: 
                "" 
        },
        
        projects: {
            number: 
                "03 / Projects",
            title: 
                "Work in<br>progress.",
            description: 
                ""
        },
        
        journey: {
            number: 
                "04 / Journey",
            title: 
                "Learning through<br>experience.",
            description: 
                "Education, internships, programs, competitions and other chronological experiences."
        },
        
        certificates: {
            number: 
                "05 / Certificates",
            title: 
                "Learning,<br>documented.",
            description: 
                "Certificates and academic or professional credentials."
        },
        
        contact: {
            title: 
                "Let's build<br>something meaningful.",
            description: 
                "Whether it's a data problem, an AI experiment, a technical project or an interesting idea, this portfolio is a place to document the journey."
        }
        
    },

    /**
     * ========================================================================
     * HERO SECTION CONFIGURATION
     * ========================================================================
     */
    hero: {
        
        // The small gold text above the main headline.
        eyebrow: 
            "Data Science · Responsible AI · Technology",
        
        // The massive text. Use <span class="accent"> to apply the green italic styling.
        title: 
            "Building with <span class=\"accent\">data.</span><br>Shaping responsible <span class=\"accent\">AI.</span>",
        
        // The paragraph text below the hero title.
        subtitle: 
            "An evolving portfolio showcasing projects, research, internships and learning in Data Science and Responsible AI - exploring the intersection of data, technology and human impact.",
        
        // Button labels
        btnExplore: 
            "Explore my work",
            
        btnResume: 
            "Download Resume (PDF)",
            
        btnContact: 
            "Get in touch"
            
    },

    /**
     * ========================================================================
     * ABOUT SECTION CONTENT
     * ========================================================================
     */
    about: {
        
        quote: 
            "The goal isn't just to understand data — it's to understand what the data is trying to tell us.",
            
        quoteLabel: 
            "--",
            
        description1: 
            "I am a Data Science and AI student currently pursuing my B.Sc. Honors from IIT Guwahati. I build my skills through structured learning, practical projects, internships and deep-dives into real-world datasets.",
            
        description2: 
            "This portfolio is designed to grow alongside my journey. It is a living document of my projects, experiments, research and learning in the fields of Data Science, Machine Learning and Artificial Intelligence.",
            
    },

    /**
     * ========================================================================
     * LANGUAGE PROFICIENCY
     * ========================================================================
     */
    languages: [
        
        { 
            language: 
                "English", 
            proficiency: 
                "Read, Write, Speak" 
        },
        
        { 
            language: 
                "Hindi", 
            proficiency: 
                "Conversational / Speak" 
        },
        
        { 
            language: 
                "Bengali", 
            proficiency: 
                "Read, Write, Speak" 
        }
        
    ],

    /**
     * ========================================================================
     * SKILLS 
     * ========================================================================
     */
    skills: [
        
        "Python", 
        "C Programming",  
        "SQL", 
        "MS Word", 
        "MS Excel", 
        "Probability & Statistics", 
        "Git", 
        "GitHub",  
        "Jupyter Notebook", 
        "Google Colab", 
        "Web Development",
        "AI Policy & Ethics",
        "AI Governance", 
        
    ],

    /**
     * ========================================================================
     * SOCIAL / CONTACT LINKS
     * ========================================================================
     */
    links: {
        
        github: {
            enabled: 
                true,
            label: 
                "GitHub",
            url: 
                "",
            icon: 
                "fa-brands fa-github"
        },
        
        linkedin: {
            enabled: 
                false,
            label: 
                "LinkedIn",
            url: 
                "", 
            icon: 
                "fa-brands fa-linkedin"
        },
        
        email: {
            enabled: 
                true,
            label: 
                "Email Me",
            url: 
                "mailto:saptarshibasak2006@gmail.com",
            icon: 
                "fa-solid fa-envelope"
        }
        
    },

    /**
     * ========================================================================
     * PROJECTS DATABASE
     * ========================================================================
     */
    projects: [
        
        {
            enabled: 
                false,
            title: 
                "",
            shortDescription: 
                "",
            fullDescription: 
                "",
            image: 
                "",
            status: 
                "",
            github: 
                "",
            live: 
                "",
            dataset: 
                "",
            notebook: 
                "",
            report: 
                "",
            tags: [
                "", 
                "", 
                
            ],
            information: [
                { 
                    label: 
                        "Dataset", 
                    value: 
                        "" 
                },
                { 
                    label: 
                        "Primary Goal", 
                    value: 
                        "" 
                }
            ]
        },

        

        

        

          
    ],

    /**
     * ========================================================================
     * JOURNEY / EXPERIENCE 
     * ========================================================================
     */
    experience: [
        
        {
            enabled: 
                true,
            date: 
                "September 2025 - Present",
            title: 
                "2nd Year B.Sc. Honors — Data Science & AI",
            organization: 
                "Indian Institute of Technology, Guwahati",
            description: 
                "Deepening knowledge in advanced mathematics, probability, statistical models and machine learning architectures alongside practical programming in Python and C.",
            status: 
                "In Progress", 
            hasCertificate: 
                false,
            certificateFile: 
                "", 
            certificateType: 
                "" 
        },
        
        {
            enabled: 
                true,
            date: 
                "September 2026",
            title: 
                "Smart India Hackathon 2026 Participant",
            organization: 
                "SIH / Government of India",
            description: 
                "Drafted technical proposals for the 'SatQuery AI' problem statement, focusing on remote sensing and vision-language models.",
            status: 
                "Submitted",
            hasCertificate: 
                false,
            certificateFile: 
                "",
            certificateType: 
                ""
        },
        
        {
            enabled: 
                true,
            date: 
                "September 2026",
            title: 
                "Internship Research Analyst",
            organization: 
                "Independent Research (InAmigos Foundation)",
            description: 
                "Conducted AI-assisted research and generated summary reports evaluating the operations of ten Indian social organizations.",
            status: 
                "In Progress",
            hasCertificate: 
                false,
            certificateFile: 
                "", 
            certificateType: 
                "", 
            certificateTitle: 
                ""
        },
        
        {
            enabled: 
                true,
            date: 
                "September 2026 – Present",
            title: 
                "GCI World 2026 | Data Science & AI Internship",
            organization: 
                "Matsuo-Iwasawa Laboratory, The University of Tokyo",
            description: 
                "Currently participating in a global AI & Data Science program covering Python, NumPy, Pandas, Machine Learning, SQL, Feature Engineering, Model Evaluation, and practical data science applications through lectures, assignments, competitions, and real-world projects.",
            status: 
                "In Progress",
            hasCertificate: 
                false,
            certificateFile: 
                "",
            certificateType: 
                ""
        },
        
        
        
        
        
    ],

    /**
     * ========================================================================
     * CERTIFICATES GALLERY
     * ========================================================================
     */
    certificates: [
        
     /*   {
            enabled: 
                true,
            title: 
                "",
            issuer: 
                "",
            date: 
                "",
            file: 
                "", 
            type: 
                "pdf"
        }, */
        
        {
            enabled: 
                true,
            title: 
                "Python Certification",
            issuer: 
                "FreeCodeCamp.Org",
            date: 
                "September 2026",
            file: 
                "media/python.png", 
            type: 
                "image"
        },
        
        
        
        
    ],

    /**
     * ========================================================================
     * THREE.JS & ANIMATION
     * ========================================================================
     */
    settings: {
        
        enableThreeJS: 
            true,
            
        enableMouseParallax: 
            true,
            
        enableScrollAnimations: 
            true,
            
        enableMobile3D: 
            false
            
    }
};