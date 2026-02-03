import React, { useState, useEffect } from 'react';
import currySips1 from '../../../assets/pictures/projects/social-media/curry-sips-1.jpg';
import currySips2 from '../../../assets/pictures/projects/social-media/curry-sips-2.jpg';
import kaiCenatImg from '../../../assets/pictures/projects/social-media/kai-cenat-streamer-university.jpg';
import MobileNav from '../MobileNav';

export interface SocialMediaProjectsProps {}

const SocialMediaProjects: React.FC<SocialMediaProjectsProps> = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const curryImages = [
        { src: currySips1, alt: 'Stephen Curry at Sips Bottle Emporium - Signing' },
        { src: currySips2, alt: 'Stephen Curry at Sips Bottle Emporium - Event' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % curryImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [curryImages.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + curryImages.length) % curryImages.length);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % curryImages.length);
    };

    return (
        <div className="site-page-content">
            <MobileNav />
            <h1>Social Media</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Strategic social media campaigns and content production that drive engagement,
                build brand awareness, and deliver measurable results. Combining creative
                storytelling with data-driven strategies to maximize reach and impact.
            </p>
            <br />
            <br />
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Stephen Curry X Sips</h2>
                </div>
                <br />
                <p>
                    Served as Video Producer and Social Media Strategist for the Stephen Curry
                    partnership with Sips - The Bottle Emporium. Created viral content that
                    captured massive attention across multiple platforms and mainstream media.
                </p>
                <br />
                <div className="captioned-image">
                    <div style={styles.slideshowContainer}>
                        <img
                            src={curryImages[currentSlide].src}
                            alt={curryImages[currentSlide].alt}
                            style={styles.slideImage}
                        />
                        <div style={styles.slideControls}>
                            <div style={styles.slideButton} onClick={prevSlide}>
                                <span style={styles.slideButtonIcon}>◄</span>
                            </div>
                            <div style={styles.dotsContainer}>
                                {curryImages.map((_, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            ...styles.dot,
                                            backgroundColor: index === currentSlide ? '#000080' : '#fff',
                                        }}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                            <div style={styles.slideButton} onClick={nextSlide}>
                                <span style={styles.slideButtonIcon}>►</span>
                            </div>
                        </div>
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>Stephen Curry X Sips</b> - Event Coverage ({currentSlide + 1}/{curryImages.length})
                        </sub>
                    </p>
                </div>
                <h3>Results & Impact:</h3>
                <ul>
                    <li>
                        <p>
                            <b>25+ Million Views:</b> Content reached over 25 million views across
                            all social media platforms combined.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Major Media Coverage:</b> Featured on ESPN and multiple Bay Area
                            news channels, amplifying reach beyond social media.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Personal Growth:</b> Grew my own platforms by over 10,000 followers
                            through strategic content distribution and engagement.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Role:</b> Video Producer, Social Media Strategist
                </p>
            </div>
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Kai Cenat X Streamer University</h2>
                </div>
                <br />
                <p>
                    Collaborated with Kai Cenat and the Streamer University initiative,
                    working directly with up-and-coming streamers while also consulting
                    on Kai's personal social strategy for the program. Helped emerging
                    creators build their brands and maximize their exposure during this
                    groundbreaking streaming event.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={kaiCenatImg}
                        alt="Kai Cenat - Streamer University"
                        style={styles.projectImage}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Kai Cenat</b> - Streamer University
                        </sub>
                    </p>
                </div>
                <h3>Results & Impact:</h3>
                <ul>
                    <li>
                        <p>
                            <b>250+ Million Views:</b> Content across Streamer University
                            reached close to 250 million views across all platforms.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>300% Average Follower Growth:</b> Clients experienced an
                            average of 300% follower gain and significant new engagement
                            to their communities.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Lasting Impact:</b> Many of the streamers mentored during
                            this program continue to thrive and are bigger than ever today.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Role:</b> Social Media Strategist, Creator Consultant
                </p>
            </div>
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>& Many More Clients</h2>
                </div>
                <br />
                <p>
                    Beyond these featured projects, I've had the privilege of working with
                    a diverse roster of creators, brands, and businesses to amplify their
                    digital presence and achieve measurable growth.
                </p>
                <br />
                <div style={styles.statsContainer}>
                    <div style={styles.statBox}>
                        <h2 style={styles.statNumber}>25+</h2>
                        <p style={styles.statLabel}>Clients Served</p>
                    </div>
                    <div style={styles.statBox}>
                        <h2 style={styles.statNumber}>500M+</h2>
                        <p style={styles.statLabel}>Total Views in 2025</p>
                    </div>
                    <div style={styles.statBox}>
                        <h2 style={styles.statNumber}>3M+</h2>
                        <p style={styles.statLabel}>Followers Gained</p>
                    </div>
                </div>
                <br />
                <p>
                    Every client receives a tailored strategy designed to maximize their
                    unique strengths and connect with their target audience. From content
                    creation to platform optimization, I deliver results that speak for
                    themselves.
                </p>
                <br />
                <p style={styles.techStack}>
                    <b>Services:</b> Social Media Strategy, Content Production, Platform Growth, Brand Development
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectHeaderStacked: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
    },
    projectImage: {
        width: '100%',
        maxHeight: 450,
        objectFit: 'contain',
        backgroundColor: '#1a1a1a',
        borderRadius: '4px',
    },
    slideshowContainer: {
        width: '100%',
        backgroundColor: '#1a1a1a',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
    },
    slideImage: {
        width: '100%',
        maxHeight: 450,
        objectFit: 'contain',
        display: 'block',
    },
    slideControls: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 0',
        backgroundColor: '#c0c0c0',
        gap: '12px',
    },
    slideButton: {
        width: 18,
        height: 14,
        backgroundColor: '#c0c0c0',
        border: '2px outset #dfdfdf',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    slideButtonIcon: {
        fontSize: '8px',
        color: '#000',
    },
    dotsContainer: {
        display: 'flex',
        gap: '6px',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        cursor: 'pointer',
        border: '1px solid #808080',
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
    statsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px 0',
    },
    statBox: {
        textAlign: 'center',
        padding: '16px 24px',
        backgroundColor: '#c0c0c0',
        border: '2px outset #dfdfdf',
        minWidth: '120px',
    },
    statNumber: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#000080',
        margin: 0,
    },
    statLabel: {
        fontSize: '12px',
        color: '#333',
        marginTop: '4px',
    },
};

export default SocialMediaProjects;
