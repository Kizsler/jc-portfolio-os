import React from 'react';
// import me from '../../assets/pictures/workingAtComputer.jpg';
// import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
// import ResumeDownload from './ResumeDownload';
import MobileNav from './MobileNav';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <MobileNav />
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Joncarlo Benton</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm an AI Engineer based in San Francisco, the heart of
                    Silicon Valley where tech innovation thrives. I specialize
                    in building websites, crafting social media strategies,
                    creating custom niche software, and developing AI automations
                    that help businesses work smarter.
                </p>
                <br />
                <p>
                    Everything I know today is self-taught. I believe that
                    passion and dedication can take you further than any
                    traditional path. Feel free to reach out using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:jc@wearescallywag.com">
                        jc@wearescallywag.com
                    </a>
                </p>
            </div>
            {/* <ResumeDownload /> */}
            <div className="text-block">
                <h3>What I Do</h3>
                <br />
                <p>
                    My work spans across multiple domains in the tech space.
                    From building stunning websites to managing social media
                    presence, I help businesses establish their digital footprint.
                    I also develop custom software solutions tailored to specific
                    business needs and create AI-powered automations that
                    streamline workflows and boost productivity.
                </p>
                <br />
                <p>
                    Being in San Francisco puts me right at the epicenter of
                    technological innovation. It's an environment that constantly
                    pushes me to stay ahead of the curve and explore new
                    possibilities in AI and software development.
                </p>
                <br />
                <p>
                    What drives me is a genuine love for what I do. This isn't
                    just a job for me - it's a passion. There's nothing quite
                    like the satisfaction of solving complex problems and seeing
                    ideas come to life through code.
                </p>
                <br />
                <h3>Beyond the Code</h3>
                <br />
                <p>
                    When I'm not engineering AI solutions or building
                    software, you'll find me spending time with my dog
                    Thor. I'm a huge animal lover - there's something
                    special about the unconditional companionship they
                    bring to our lives.
                </p>
                <br />
                <p>
                    I believe in continuous learning and growth. Being
                    self-taught has taught me that with enough curiosity
                    and persistence, you can master anything you set
                    your mind to.
                </p>
                <br />
                <br />
                <p>
                    I'm always excited to take on new challenges and collaborate
                    on interesting projects. Whether you need a website, social
                    media management, custom software, or AI automation solutions,
                    I'd love to hear about what you're building.
                </p>
                <br />
                <p>
                    Let's create something amazing together. Reach out through the{' '}
                    <Link to="/contact">contact page</Link> or email me directly
                    at{' '}
                    <a href="mailto:jc@wearescallywag.com">
                        jc@wearescallywag.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default About;
