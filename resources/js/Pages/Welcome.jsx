import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const skills = [
    { group: 'Languages', items: [['PHP', 'php'], ['C#', 'csharp'], ['JavaScript', 'javascript'], ['Node.js', 'nodedotjs'], ['C / C++', 'cplusplus'], ['Java', 'java'], ['Visual Basic', 'visualbasic']] },
    { group: 'Frameworks & CMS', items: [['Laravel', 'laravel'], ['ASP.NET Core / MVC', 'dotnet'], ['React', 'react'], ['Vue.js', 'vuedotjs'], ['WordPress', 'wordpress'], ['Dart', 'dart'], ['Flutter', 'flutter']] },
    { group: 'Web & data', items: [['HTML5', 'html5'], ['CSS3', 'css3'], ['Tailwind CSS', 'tailwindcss'], ['Bootstrap', 'bootstrap'], ['SQL Server', 'microsoftsqlserver'], ['MySQL', 'mysql']] },
    { group: 'Systems', items: [['Linux', 'linux'], ['Windows Server', 'windows'], ['IIS', 'internetinformationservices'], ['Microsoft Entra ID', 'microsoftentra'], ['Office 365', 'microsoftoffice'], ['PowerShell', 'powershell'], ['Git', 'git']] },
];

const experience = [
    {
        company: 'Department of Agriculture â€” Bureau of Soils and Water Management',
        role: 'Computer Programmer III (COS)', date: '2026', type: 'Philippines',
        summary: 'Independently delivered two mission-critical ASP.NET web applications, taking them from requirements through deployment.',
        bullets: [
            'Translated stakeholder requirements into scalable application features and handled full-stack development from scratch.',
            'Managed source control with Git and coordinated deployment workflows with leadership.',
        ],
        skills: ['ASP.NET Core / MVC', 'C#', 'Git'],
    },
    {
        company: 'Manila Central University',
        role: 'System Programmer', date: '2023 â€” 2026', type: 'Hybrid Â· Philippines',
        summary: 'Built and deployed web and mobile applications while supporting the universityâ€™s enterprise systems and users.',
        bullets: [
            'Developed full-stack web and cross-platform mobile apps independently with Laravel, WordPress, and Dart/Flutter.',
            'Administered Microsoft Entra ID, Office 365, and ERP systems, including user support through Microsoft Teams.',
            'Automated student account provisioning and data management during peak enrollment periods with PowerShell.',
            'Worked with ManCom and ExeCom to gather software requirements and present system updates.',
            'Managed Git repositories and coordinated in-house server deployments.',
        ],
        skills: ['Laravel', 'WordPress', 'Dart / Flutter', 'PowerShell', 'Microsoft Entra ID'],
    },
    {
        company: 'Atos Information Technology Inc.',
        role: 'Service Desk Analyst', date: '2022 â€” 2023', type: 'Remote Â· North America & Australia',
        summary: 'Provided remote level one support for enterprise clients across North America and Australia.',
        bullets: [
            'Resolved software and hardware issues and supported Office 365 administration, with a focus on Microsoft Teams.',
            'Managed high-priority tickets under strict service level agreements to keep diagnosis and resolution moving.',
            'Completed communication training focused on cross-cultural support and de-escalating difficult user situations.',
        ],
        skills: ['Office 365', 'Microsoft Teams', 'Remote Support', 'SLA Ticketing'],
    },
];

const projects = [
    { number: '01', type: 'Records management', title: 'DRMS â€” Digital Records Management System', description: 'A registrar records retrieval system for Manila Central University. DRMS helps Registrar staff search student records and retrieve digitized documents such as transcripts of records and Form 137. Staff can view, download, and print linked PDF files, while access activity is recorded for accountability. The digitized archive reaches back to 1904, MCUâ€™s founding year.', stack: ['Laravel', 'Livewire', 'MySQL'], image: '/files/drms/preview.png', imageAlt: 'DRMS digital records management system preview', liveDemo: 'https://drms-demo.onrender.com/login', repository: 'https://github.com/knnthcstrvl/drms-demo' },
    { number: '02', type: 'Space reservation system', title: 'BoardRoom', description: 'A web-based reservation system for company spaces. Employees can check availability and request bookings through a tablet kiosk, while approvers manage requests in the admin panel.', stack: ['Laravel', 'React', 'MySQL', 'SQLite'], image: '/files/boardroom/preview.png', imageAlt: 'BoardRoom space reservation system preview', liveDemo: 'https://boardroom-demo.onrender.com/kiosk', repository: 'https://github.com/knnthcstrvl/boardroom-demo' },
    { number: '03', type: 'Attendance & timekeeping', title: 'ETRS â€” Electronic Time Record System', description: 'A web-based attendance and timekeeping system that brings onsite biometric logs and work-from-home records together for HR review. It helps staff monitor attendance, manage exceptions, verify submissions, and export reports for payroll preparation.', stack: ['ASP.NET Core', 'Blazor', 'MySQL'], image: '/files/etrs/preview.png', imageAlt: 'ETRS electronic time record system preview', liveDemo: 'https://etrs-demo.onrender.com/', repository: 'https://github.com/knnthcstrvl/etrs-demo' },
];

function SectionLabel({ children }) {
    return <div className="section-label"><span>{children}</span><i /></div>;
}

function Arrow({ diagonal = false }) {
    return <span aria-hidden="true">{diagonal ? 'â†—' : 'â†’'}</span>;
}

function PlaceholderLink({ children }) {
    return <a href="#contact" className="pill-button">{children} <Arrow diagonal /></a>;
}

function SkillIcon({ label, icon }) {
    const fallback = label.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
    const [hasIconError, setHasIconError] = useState(false);

    return (
        <span className="skill-icon" aria-hidden="true">
            {hasIconError ? fallback : <img src={`https://cdn.simpleicons.org/${icon}`} alt="" onError={() => setHasIconError(true)} />}
        </span>
    );
}

export default function Welcome() {
    const [dark, setDark] = useState(false);
    const [activeExperience, setActiveExperience] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const updateBackToTopVisibility = () => setShowBackToTop(window.scrollY > 100);

        updateBackToTopVisibility();
        window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });

        return () => window.removeEventListener('scroll', updateBackToTopVisibility);
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const focusExperience = (index) => setActiveExperience(index);
    const activeJob = experience[activeExperience];

    return (
        <div className={`portfolio ${dark ? 'theme-dark' : ''}`}>
            <Head title="Portfolio">
                <meta name="description" content="Kenneth Avila is a full stack developer building web experiences with Laravel, WordPress, and ASP.NET." />
            </Head>

            <header className="site-header">
                <a className="monogram" href="#home" aria-label="Kenneth Avila, home">KA</a>
                <nav className="desktop-nav hidden items-center gap-6 md:flex" aria-label="Main navigation">
                    <a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
                </nav>
                <div className="header-actions flex items-center gap-3">
                    <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>
                        <span className={`theme-toggle-icon ${dark ? 'is-dark' : ''}`} aria-hidden="true">{dark ? 'â˜¾' : 'â˜¼'}</span>
                    </button>
                    <a className="pill-button resume-link" href="/resume/download">Resume PDF <span aria-hidden="true">â†“</span></a>
                </div>
            </header>

            <main>
                <section className="hero" id="home">
                    <div className="hero-grid" aria-hidden="true" />
                    <div className="hero-content">
                        <div data-reveal><SectionLabel>MALABON CITY, PHILIPPINES</SectionLabel></div>
                        <h1 data-reveal data-reveal-delay="1">Kenneth<br />Avila</h1>
                        <p className="hero-copy" data-reveal data-reveal-delay="2">Full-stack software engineer building web and mobile applications with <strong>Laravel, ASP.NET, WordPress, and Flutter.</strong></p>
                        <div className="hero-actions flex flex-wrap items-center gap-4" data-reveal data-reveal-delay="3">
                            <a className="pill-button pill-button-strong" href="#projects">See the projects <Arrow /></a>
                            <div className="note-link"><span className="note-dot" /> Open to remote opportunities <b>Available</b></div>
                        </div>
                    </div>
                </section>

                <section className="about section-wrap" id="about">
                    <div className="section-heading" data-reveal>
                        <SectionLabel>ABOUT</SectionLabel>
                        <h2>Hi, Iâ€™m Kenneth.</h2>
                    </div>
                    <div className="about-body grid grid-cols-1 gap-8 md:grid-cols-2" data-reveal>
                        <div className="about-portrait"><img src="/files/ken.jpg" alt="Kenneth Avila" /></div>
                        <div className="about-copy">
                            <p className="about-lead">Iâ€™m a full-stack software engineer and Magna Cum Laude IT graduate with 3.5 years of experience building and deploying web and mobile applications.</p>
                            <p>My experience spans the full software lifecycle: gathering requirements, building and deploying applications, administering business systems, and supporting the people who use them. Iâ€™ve developed web and mobile products with Laravel, ASP.NET, WordPress, and Flutter, and supported university and enterprise environments across hybrid and remote teams.</p>
                            <p>I also bring hands-on experience with Microsoft Entra ID, Office 365, ERP administration, PowerShell automation, SQL Server, MySQL, Linux, Windows Server, and IIS. I value clear documentation, thoughtful handovers, and taking ownership from the first conversation through production support.</p>
                            <p className="muted-copy">B.S. Information Technology Â· Manila Central University Â· Magna Cum Laude Â· 2018â€“2022</p>
                            <p className="muted-copy">Malabon City, Philippines Â· Open to remote opportunities.</p>
                            <div className="social-links"><a className="pill-button" href="https://github.com/knnthcstrvl" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div>
                        </div>
                    </div>
                </section>

                <section className="skills-section section-wrap" id="skills">
                    <div className="section-heading" data-reveal>
                        <SectionLabel>TOOLBOX</SectionLabel>
                        <h2>What I build with</h2>
                    </div>
                    <div className="skill-list">
                        {skills.map(({ group, items }, index) => <div className="skill-row grid grid-cols-1 items-center gap-4 md:grid-cols-[175px_1fr]" key={group} data-reveal data-reveal-delay={String(Math.min(index, 3))}>
                            <span className="skill-group">{group}</span>
                            <div className="skill-tags flex flex-wrap gap-2">{items.map(([label, icon]) => <span className="skill-tag" key={label}><SkillIcon label={label} icon={icon} />{label}</span>)}</div>
                        </div>)}
                    </div>
                </section>

                <section className="experience-section section-wrap grid grid-cols-1 gap-8 md:grid-cols-2" id="experience">
                    <div className="experience-sidebar">
                        <div className="section-heading" data-reveal>
                            <SectionLabel>EXPERIENCE</SectionLabel>
                            <h2>Where Iâ€™ve been</h2>
                            <p className="section-intro">Building software, supporting users, and improving the systems teams depend on.</p>
                        </div>
                        <nav className="experience-list" aria-label="Jump to an experience">
                            {experience.map((job, index) => <button className={`experience-tab ${activeExperience === index ? 'is-active' : ''}`} type="button" aria-pressed={activeExperience === index} aria-controls="experience-detail" key={job.company} onClick={() => focusExperience(index)}>
                                <span className="experience-marker" />
                                <span>{job.company}<small>{job.role} Â· {job.date}</small></span>
                            </button>)}
                        </nav>
                    </div>
                    <div className="experience-cards">
                        <article className="experience-detail experience-detail-enter" id="experience-detail" aria-labelledby="experience-heading" key={activeJob.company}>
                            <div className="experience-top"><span>{activeJob.date}</span><span>{activeJob.type}</span></div>
                            <h3 id="experience-heading">{activeJob.company}</h3>
                            <p className="job-title">{activeJob.role}</p>
                            <p className="experience-summary">{activeJob.summary}</p>
                            <ul>{activeJob.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                            <div className="experience-tags">{activeJob.skills.map((skill) => <span className="small-tag" key={skill}>{skill}</span>)}</div>
                        </article>
                    </div>
                </section>

                <section className="projects-section section-wrap" id="projects">
                    <div className="section-heading" data-reveal>
                        <SectionLabel>SELECTED PROJECTS</SectionLabel>
                        <h2>Projects worth opening</h2>
                        <p className="section-intro">A selection of systems and applications Iâ€™ve built.</p>
                    </div>
                    <div className="project-list grid gap-12">
                        {projects.map((project, index) => <article className={`project-row grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${index % 2 ? 'project-reverse' : ''}`} key={project.number} data-reveal data-reveal-delay={index % 2 ? '1' : '0'}>
                            <div className="project-art" aria-label={`${project.title} preview`}>
                                <div className="project-art-window"><div className="window-bar"><span /><span /><span /><i /></div>{project.image ? <img className="project-preview" src={project.image} alt={project.imageAlt} /> : <div className="window-content"><small>{project.type.toUpperCase()}</small><b>{project.title}</b><span className="window-line" /><span className="window-line short" /><span className="window-cta" /></div>}</div>
                                <span className="project-number">{project.number} / 03</span>
                            </div>
                            <div className="project-info">
                                <p className="project-meta">{project.number} <span> / </span> {project.type}</p>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">{project.stack.map((item) => <span className="small-tag" key={item}>{item}</span>)}</div>
                                <div className="project-actions">
                                    {project.liveDemo && <a className="pill-button" href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo <Arrow diagonal /></a>}
                                    {project.repository ? <a className="pill-button" href={project.repository} target="_blank" rel="noreferrer">Project details <Arrow diagonal /></a> : <PlaceholderLink>Project details</PlaceholderLink>}
                                </div>
                            </div>
                        </article>)}
                    </div>
                </section>

                <section className="contact-section" id="contact">
                    <div className="section-wrap contact-inner" data-reveal>
                        <SectionLabel>CONTACT</SectionLabel>
                        <h2>Letâ€™s build<br />something useful.</h2>
                        <p>Open to remote opportunities and interesting projects. Feel free to get in touch.</p>
                        <a className="contact-email" href="mailto:knnthcstrvl@gmail.com">knnthcstrvl@gmail.com</a>
                        <a className="contact-phone" href="tel:+639567919152">+63 956 791 9152</a>
                        <div className="social-links"><a className="pill-button" href="https://github.com/knnthcstrvl" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a className="pill-button" href="/resume/download">Download rÃ©sumÃ© <span aria-hidden="true">â†“</span></a></div>
                    </div>
                </section>
            </main>

            <a href="#home" className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`} aria-label="Back to top" aria-hidden={!showBackToTop} tabIndex={showBackToTop ? 0 : -1}>â†‘</a>
            <footer className="site-footer" data-reveal><span>Â© {new Date().getFullYear()} Kenneth Avila</span></footer>
        </div>
    );
}
