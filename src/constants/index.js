import {
    FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt,
    FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaDocker,
    FaGithubAlt, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt
} from "react-icons/fa";
import {
    SiJavascript, SiCplusplus, SiTailwindcss, SiBootstrap,
    SiExpress, SiSpringboot, SiMongodb, SiPostgresql, SiMysql,
    SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiLinux,
    SiJenkins, SiTypescript, SiNextdotjs
} from "react-icons/si";

export const PORTFOLIO_DATA = {
    name: "Abhiudaya Pratap Singh",
    role: "AI & Full Stack Developer",
    tagline: "Building Intelligent Applications with AI and Modern Web Technologies.",
    about: "I am a Computer Science Engineering student specializing in AI and Machine Learning, with hands-on experience designing, training, and deploying predictive models. I am highly skilled in data preprocessing, feature engineering, and model evaluation, paired with deep expertise in full-stack web development using React.js and Node.js. My recent journey has also exposed me to Generative AI architectures, including Prompt Engineering, RAG, and LLM implementations.",
    contact: {
        email: "abhiudayasngh2005@gmail.com",
        linkedin: "https://www.linkedin.com/in/abhiudayapratapsingh",
        github: "https://github.com/Abhi2005-abhi",
        location: "India"
    },
    skills: [
        {
            category: "Programming",
            items: [
                { name: "Java", icon: FaJava, level: "Advanced", description: "Enterprise applications & OOP", color: "#f89820" },
                { name: "C++", icon: SiCplusplus, level: "Advanced", description: "DSA & High-performance computing", color: "#00599C" },
                { name: "Python", icon: FaPython, level: "Advanced", description: "Machine learning & scripting", color: "#3776AB" },
                { name: "JavaScript", icon: SiJavascript, level: "Expert", description: "Dynamic web apps & DOM", color: "#F7DF1E" },
                { name: "TypeScript", icon: SiTypescript, level: "Advanced", description: "Type-safe scalability", color: "#3178C6" }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "React", icon: FaReact, level: "Expert", description: "Component-driven UIs", color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, level: "Advanced", description: "SSR & Full-stack frameworks", color: "#ffffff" },
                { name: "HTML5", icon: FaHtml5, level: "Expert", description: "Semantic web architecture", color: "#E34F26" },
                { name: "CSS3", icon: FaCss3Alt, level: "Expert", description: "Responsive layouts", color: "#1572B6" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", description: "Utility-first styling", color: "#06B6D4" },
                { name: "Bootstrap", icon: SiBootstrap, level: "Advanced", description: "Classic responsive grids", color: "#7952B3" },
                { name: "Figma", icon: FaFigma, level: "Intermediate", description: "UI/UX wireframing & mockups", color: "#F24E1E" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: FaNodeJs, level: "Advanced", description: "Asynchronous backend logic", color: "#339933" },
                { name: "Express.js", icon: SiExpress, level: "Advanced", description: "RESTful API engineering", color: "#ffffff" },
                { name: "Spring Boot", icon: SiSpringboot, level: "Intermediate", description: "Java enterprise microservices", color: "#6DB33F" }
            ]
        },
        {
            category: "Database",
            items: [
                { name: "MongoDB", icon: SiMongodb, level: "Advanced", description: "NoSQL schema design", color: "#47A248" },
                { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", description: "Relational data modeling", color: "#4169E1" },
                { name: "MySQL", icon: SiMysql, level: "Advanced", description: "Structured querying", color: "#4479A1" }
            ]
        },
        {
            category: "AI / ML",
            items: [
                { name: "TensorFlow", icon: SiTensorflow, level: "Intermediate", description: "Deep learning models", color: "#FF6F00" },
                { name: "Scikit-learn", icon: SiScikitlearn, level: "Advanced", description: "Predictive algorithms", color: "#F7931E" },
                { name: "Pandas", icon: SiPandas, level: "Advanced", description: "Data manipulation & analysis", color: "#150458" },
                { name: "NumPy", icon: SiNumpy, level: "Advanced", description: "Scientific array computing", color: "#013243" }
            ]
        },
        {
            category: "Cloud & DevOps",
            items: [
                { name: "Docker", icon: FaDocker, level: "Intermediate", description: "Containerized deployments", color: "#2496ED" },
                { name: "AWS", icon: FaAws, level: "Intermediate", description: "Cloud infrastructure", color: "#FF9900" },
                { name: "Git", icon: FaGitAlt, level: "Expert", description: "Version control", color: "#F05032" },
                { name: "GitHub", icon: FaGithub, level: "Expert", description: "CI/CD & repository management", color: "#ffffff" },
                { name: "Linux", icon: SiLinux, level: "Advanced", description: "OS architecture & scripting", color: "#FCC624" },
                { name: "Jenkins", icon: SiJenkins, level: "Intermediate", description: "Automation server pipelines", color: "#D24939" }
            ]
        }
    ],
    projects: [
        {
            title: "Smart Health AI",
            description: "Developed a full-stack AI healthcare platform using React, Node.js, Express, MongoDB, JWT Authentication, and Google Gemini API. Integrated AI chatbot, disease prediction, secure authentication, and personalized health recommendations.",
            stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
            features: ["JWT Authentication", "AI Chatbot", "Disease Prediction", "Responsive Dashboard", "Secure APIs"],
            links: { demo: "https://smart-health-ai-elb1.vercel.app/", github: "#" }
        },
        {
            title: "Faillytics AI Productivity Analyzer",
            description: "An AI-powered productivity analytics platform that tracks task performance, provides intelligent insights, visualizes productivity metrics, and generates AI suggestions using Google Gemini.",
            stack: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
            features: [],
            links: { demo: "#", github: "#" }
        },
        {
            title: "Diabetes Prediction System",
            description: "Machine Learning application that predicts diabetes risk using Logistic Regression with data preprocessing, feature engineering, and an intuitive web interface.",
            stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
            features: [],
            links: { demo: "https://adiabetesprediction.streamlit.app/", github: "#" }
        }
    ],
    education: {
        degree: "B.Tech Computer Science Engineering (AI & ML)",
        university: "VIT Bhopal University",
        cgpa: "8.59"
    },
    achievements: [
        "Built multiple AI-powered full-stack applications",
        "Solved 200+ DSA problems",
        "Hands-on experience with MERN Stack",
        "Experience with Machine Learning deployment",
        "Strong problem-solving skills"
    ],
    certifications: [
        { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia - Forage", date: "Jul 2025" },
        { title: "Applied Machine Learning in Python", issuer: "Coursera", date: "Dec 2025" },
        { title: "Computer Vision", issuer: "Vityarthi", date: "Feb 2026" },
        { title: "MATLAB Certified", issuer: "MathWorks", date: "Aug 2023" },
        { title: "Python Essentials", issuer: "Vityarthi", date: "Dec 2023" },
        { title: "Cloud Computing", issuer: "NPTEL", date: "May 2025" }
    ],
    timeline: [
        { year: 2024, objective: "Started Full Stack Development" },
        { year: 2025, objective: "Built AI and Machine Learning Projects" },
        { year: 2026, objective: "Building Production Ready Applications and Preparing for Software Engineering Roles" }
    ]
};
