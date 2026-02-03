import React from 'react';
// import ResumeDownload from './ResumeDownload';
import MobileNav from './MobileNav';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <MobileNav />
            {/* <ResumeDownload /> */}
            <h1>Previous Work</h1>
            <h3>Experience</h3>
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Scallywag</h1>
                        <a 
                            href="https://wearescallywag.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={styles.websiteButton}
                        >
                            Website
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI Engineer & Social Media Consultant</h3>
                        <b>
                            <p style={styles.dateText}>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Spearheaded digital transformation initiatives and engineered AI-driven solutions
                    to optimize business operations and accelerate growth for a leading creative agency.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and executed comprehensive social media strategies that
                            drove measurable business growth, resulting in the acquisition of
                            <b> 15 new clients</b> and significant revenue increases.
                        </p>
                    </li>
                    <li>
                        <p>
                            Scaled Scallywag's brand presence to <b>100,000+ followers</b> across
                            all platforms with <b>20+ million views</b> through data-driven
                            content optimization and audience engagement tactics.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and developed the company's primary web platform,
                            delivering a high-performance, conversion-optimized digital presence.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built custom client websites and implemented AI automation systems
                            that streamlined workflows, reduced operational overhead, and
                            eliminated resource inefficiencies—directly boosting client ROI.{' '}
                            <a href="#" style={{color: '#0066cc', textDecoration: 'underline'}}>
                                See AI Automations
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Amazon Web Services</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AWS Warehouse Server Tech</h3>
                        <b>
                            <p style={styles.dateText}>2025 - 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Maintained critical infrastructure reliability and ensured seamless connectivity
                    across enterprise server systems supporting high-availability cloud operations.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Monitored and maintained server connectivity across distributed systems,
                            ensuring consistent API uptime and reliable communication between
                            services and client-facing applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            Diagnosed and resolved server-side and web application incidents with
                            rapid response times, minimizing downtime and maintaining service
                            level agreements.
                        </p>
                    </li>
                    <li>
                        <p>
                            Performed root cause analysis on infrastructure failures, implementing
                            preventive measures to enhance system reliability and reduce
                            recurring issues.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Study Coach</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Founder & CEO</h3>
                        <b>
                            <p style={styles.dateText}>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Founded an AI-powered education platform designed to revolutionize learning by
                    providing personalized, self-directed education for students of all ages who
                    seek knowledge beyond traditional classroom limitations.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and developed an intelligent learning system that leverages
                            AI to generate custom courses, flashcards, tests, and homework
                            tailored to individual learning goals and interests.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built lecture recording functionality that automatically transforms
                            audio content into structured study materials, enabling efficient
                            knowledge retention and review.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed the platform to empower learners to explore subjects schools
                            often overlook, giving students autonomy over their education and
                            reigniting passion for learning.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created a solution addressing systemic education gaps, providing an
                            alternative for students whose learning experiences have been
                            hindered by ineffective teaching environments.
                        </p>
                    </li>
                </ul>
                <p style={styles.techStack}>
                    <b>Built with:</b> React Native, Expo, TypeScript, Supabase (PostgreSQL, Auth, Edge Functions), OpenAI GPT-4, Zustand, TanStack React Query
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    websiteButton: {
        backgroundColor: '#c0c0c0',
        border: '2px outset #dfdfdf',
        padding: '2px 12px',
        fontSize: '16px',
        fontFamily: "Millennium, 'Times New Roman', Times, serif",
        color: '#000',
        textDecoration: 'none',
        cursor: 'pointer',
        marginLeft: '12px',
    },
    dateText: {
        marginLeft: '24px',
        whiteSpace: 'nowrap',
    },
    techStack: {
        marginTop: '16px',
        fontSize: '14px',
        color: '#444',
        fontStyle: 'italic',
    },
};

export default Experience;

