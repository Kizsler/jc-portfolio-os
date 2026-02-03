import React, { useState } from 'react';
import paymentAutomationImg from '../../../assets/pictures/projects/automations/payment-automation.png';
import personalAssistantImg from '../../../assets/pictures/projects/automations/personal-assistant.png';
import ragAgentImg from '../../../assets/pictures/projects/automations/rag-agent.png';
import ImageModal from '../../general/ImageModal';
import MobileNav from '../MobileNav';

export interface AIAutomationsProjectsProps {}

const AIAutomationsProjects: React.FC<AIAutomationsProjectsProps> = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState({ src: '', alt: '' });

    const openModal = (src: string, alt: string) => {
        setModalImage({ src, alt });
        setModalOpen(true);
    };

    return (
        <div className="site-page-content">
            <MobileNav />
            <h1>AI Automations</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Custom AI-powered automation solutions designed to streamline business
                operations, eliminate manual tasks, and boost efficiency. These systems
                integrate multiple platforms and APIs to create seamless workflows.
            </p>
            <br />
            <br />
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Payment Confirmation & Order Fulfillment</h2>
                </div>
                <br />
                <p>
                    Built an end-to-end automation system that handles the complete payment
                    and order fulfillment workflow. When a customer pays their invoice, the
                    system automatically processes and tracks everything from confirmation
                    to delivery notification.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={paymentAutomationImg}
                        alt="Payment Automation Workflow"
                        style={styles.projectImageClickable}
                        onClick={() => openModal(paymentAutomationImg, 'Payment & Order Automation Workflow')}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Payment & Order Automation</b> - Full Workflow Diagram (Click to enlarge)
                        </sub>
                    </p>
                </div>
                <h3>How It Works:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Payment Confirmation:</b> Integrates with Stripe API to automatically
                            detect when customers pay their invoices and confirms successful payments.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Organization:</b> Auto-sorts customer data into a structured
                            Google Sheet including customer ID, name, phone number, email, product
                            purchased, and receipt information.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Order Processing:</b> The sheet data feeds into a secondary automation
                            that saves all records and prepares the order for fulfillment.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Shipping Notification:</b> Once the order ships, the automation
                            re-triggers to send customers a confirmation that their order is on the way.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Stripe API, Google Sheets, Gmail API, AI Agent, Custom Webhooks
                </p>
            </div>
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Personal Assistant AI</h2>
                </div>
                <br />
                <p>
                    Built a comprehensive AI-powered personal assistant system featuring a main
                    orchestrating agent that delegates tasks to specialized sub-agents. The system
                    handles everything from email management to research, all accessible through
                    a simple chat interface.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={personalAssistantImg}
                        alt="Personal Assistant Workflow"
                        style={styles.projectImageClickable}
                        onClick={() => openModal(personalAssistantImg, 'Personal Assistant AI Workflow')}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Personal Assistant AI</b> - Multi-Agent Workflow Diagram (Click to enlarge)
                        </sub>
                    </p>
                </div>
                <h3>Capabilities:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Email Management:</b> Sends emails on your behalf, drafts responses,
                            and manages your inbox through natural language commands.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Calendar Integration:</b> Schedules meetings, sends calendar invites,
                            and manages your appointments automatically.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Research Agent:</b> Conducts in-depth research on any topic and
                            delivers summarized findings directly to you.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Contact Management:</b> Creates, edits, and deletes contacts in your
                            address book through simple chat commands.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Task Summaries:</b> Sends confirmation messages summarizing completed
                            actions so you always know what was done.
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    Currently integrated with <b>Telegram</b> for chat interaction, but fully
                    customizable to work with Slack, WhatsApp, or other messaging platforms.
                    Contact me for custom integrations.
                </p>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> OpenAI GPT-4, Telegram API, Google Calendar API, Gmail API, Multi-Agent Architecture
                </p>
            </div>
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Advanced Learning RAG Agent</h2>
                </div>
                <br />
                <p>
                    Built an intelligent Retrieval-Augmented Generation (RAG) system that allows
                    users to upload FAQ sheets or any documents, which are automatically processed
                    and stored in a vector database for lightning-fast, context-aware responses.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={ragAgentImg}
                        alt="RAG Agent Workflow"
                        style={styles.projectImageClickable}
                        onClick={() => openModal(ragAgentImg, 'Advanced Learning RAG Agent Workflow')}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>RAG Agent</b> - Document Processing & Retrieval Workflow (Click to enlarge)
                        </sub>
                    </p>
                </div>
                <h3>How It Works:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Document Upload:</b> Drop any FAQ sheet, PDF, Excel, or text file into
                            the system. The automation triggers immediately upon file creation or update.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Smart Processing:</b> Files are automatically parsed, extracted, and
                            transformed based on file type (PDF, Excel, text) for optimal storage
                            and retrieval.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Vector Storage:</b> Processed content is converted to embeddings using
                            OpenAI and stored in a Supabase vector database for semantic search capabilities.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Instant Retrieval:</b> When users ask questions through the website chat,
                            the RAG agent pulls relevant documents from the vector store and delivers
                            accurate answers in under 5-10 seconds.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Conversation Learning:</b> All conversations are stored in a separate
                            database, allowing the system to learn over time and enabling owners to
                            review chat history and insights.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> OpenAI GPT-4, OpenAI Embeddings, Supabase Vector Store, PostgreSQL, Google Drive API, Webhooks
                </p>
            </div>
            <ImageModal
                src={modalImage.src}
                alt={modalImage.alt}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
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
        maxHeight: 500,
        objectFit: 'contain',
        backgroundColor: '#1a1a1a',
        borderRadius: '4px',
    },
    projectImageClickable: {
        width: '100%',
        maxHeight: 500,
        objectFit: 'contain',
        backgroundColor: '#1a1a1a',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
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

export default AIAutomationsProjects;
