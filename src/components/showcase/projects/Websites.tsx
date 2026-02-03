import React from 'react';
import scallywagLogo from '../../../assets/pictures/projects/websites/scallywag.png';
import taxImmigrationImg from '../../../assets/pictures/projects/websites/tax-immigration.png';
import barosTaxImg from '../../../assets/pictures/projects/websites/baros-tax.png';
import MobileNav from '../MobileNav';

export interface WebsitesProjectsProps {}

const WebsitesProjects: React.FC<WebsitesProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <MobileNav />
            <h1>Websites</h1>
            <h3>Projects</h3>
            <br />
            <p>
                A collection of websites I've designed and developed for clients
                and personal projects. Each site is crafted with attention to
                performance, user experience, and modern design principles.
            </p>
            <br />
            <br />
            <div className="text-block">
                <div style={styles.projectHeader}>
                    <h2>Scallywag</h2>
                    <a
                        href="https://wearescallywag.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.visitButton}
                    >
                        Visit Site
                    </a>
                </div>
                <br />
                <p>
                    Designed and developed the primary website for Scallywag, a leading
                    AI agency specializing in automation solutions and digital marketing.
                    The site serves as their main digital presence, showcasing their portfolio,
                    services, and brand identity.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={scallywagLogo}
                        alt="Scallywag Logo"
                        style={styles.projectImage}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Scallywag</b> - AI Agency
                        </sub>
                    </p>
                </div>
                <p>
                    Built with a focus on visual impact and conversion optimization, the website
                    features smooth animations, responsive design across all devices, and an
                    intuitive user interface that reflects Scallywag's innovative AI-driven approach.
                    The site effectively communicates their brand story and has contributed to
                    significant client acquisition growth.
                </p>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> React, Custom CSS Animations, Responsive Design
                </p>
            </div>
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2 style={styles.noWrap}>Tax & Immigration Center</h2>
                    <a
                        href="https://taxandimmigrationcenter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.visitButton}
                    >
                        Visit Site
                    </a>
                </div>
                <br />
                <p>
                    Designed and developed a professional website for a Tax and Immigration
                    services center, helping them establish a strong digital presence and
                    attract new clients in their industry.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={taxImmigrationImg}
                        alt="Tax & Immigration Center Website"
                        style={styles.projectImageLight}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Tax & Immigration Center</b> - Professional Services
                        </sub>
                    </p>
                </div>
                <p>
                    The website provides clear, compassionate messaging that resonates with
                    clients seeking immigration and tax support. Built with a focus on
                    transparency and trust, the site effectively communicates their expert
                    services and has helped drive significant client acquisition growth.
                </p>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Modern Web Technologies, Responsive Design, SEO Optimization
                </p>
            </div>
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2 style={styles.noWrap}>Baros Tax Service</h2>
                    <a
                        href="https://www.barostaxservice.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.visitButton}
                    >
                        Visit Site
                    </a>
                </div>
                <br />
                <p>
                    Designed and developed a professional website for Baros Tax Service,
                    a tax and resolution specialist firm. The site establishes their
                    credibility and helps attract clients seeking expert tax assistance.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={barosTaxImg}
                        alt="Baros Tax Service Logo"
                        style={styles.projectImageLight}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Baros Tax Service</b> - Tax & Resolution Specialists
                        </sub>
                    </p>
                </div>
                <p>
                    The website showcases their expertise in tax preparation and resolution
                    services with a clean, professional design that builds trust with
                    potential clients. Features easy navigation and clear calls-to-action
                    to drive client engagement.
                </p>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Modern Web Technologies, Responsive Design, SEO Optimization
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    projectHeaderStacked: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
    },
    noWrap: {
        whiteSpace: 'nowrap',
    },
    visitButton: {
        backgroundColor: '#c0c0c0',
        border: '2px outset #dfdfdf',
        padding: '4px 16px',
        fontSize: '14px',
        fontFamily: "Millennium, 'Times New Roman', Times, serif",
        color: '#000',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    projectImage: {
        width: '100%',
        maxHeight: 400,
        objectFit: 'contain',
        backgroundColor: '#1a1a2e',
    },
    projectImageLight: {
        width: '100%',
        maxHeight: 400,
        objectFit: 'contain',
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
    },
    placeholder: {
        width: '100%',
        height: 300,
        backgroundColor: '#c0c0c0',
        border: '2px solid #808080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caption: {
        width: '80%',
    },
    techStack: {
        marginTop: '8px',
        fontSize: '14px',
        color: '#444',
        fontStyle: 'italic',
    },
};

export default WebsitesProjects;
