import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            {/* <ResumeDownload /> */}
            <br />
            <div className="text-block">
                <h2>Project One</h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Project demonstration video
                            placeholder.
                        </sub>
                    </p>
                </div>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="text-block">
                <h2>Project Two</h2>
                <br />
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Nullam quis risus eget urna mollis ornare
                    vel eu leo. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Project demonstration video
                                placeholder.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Aenean lacinia bibendum nulla sed consectetur. Donec
                    ullamcorper nulla non metus auctor fringilla. Maecenas
                    faucibus mollis interdum. Vestibulum id ligula porta felis
                    euismod semper.
                </p>
            </div>
            <div className="text-block">
                <h2>Project Three</h2>
                <br />
                <p>
                    Curabitur blandit tempus porttitor. Etiam porta sem
                    malesuada magna mollis euismod. Vivamus sagittis lacus vel
                    augue laoreet rutrum faucibus dolor auctor.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Project demonstration video
                            placeholder.
                        </sub>
                    </p>
                </div>
                <p>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris condimentum nibh, ut fermentum massa justo sit amet
                    risus.
                </p>
            </div>
            {/* <ResumeDownload /> */}
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
