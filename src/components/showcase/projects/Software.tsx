import React from 'react';
import MobileNav from '../MobileNav';
import { ScallywagOSPreview, LiteraryEngineersPreview, PolyMindPreview, BondPushPreview, StudyOSPreview } from './SoftwarePreviews';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <MobileNav />
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                A collection of software I've built — spanning AI-powered trading
                systems, low-latency blockchain infrastructure, and mobile
                applications. Each project solves real problems with production-grade
                architecture.
            </p>
            <br />
            <br />
            {/* === SCALLYWAGOS === */}
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Scallywag IDE</h2>
                </div>
                <br />
                <p>
                    A full-stack framework that generates REST APIs, CLI commands,
                    MCP tools, and TypeScript SDKs from a single decorator. Write
                    one method, get four interfaces — powered by a custom{' '}
                    <b>@fractal</b> decorator system with convention-over-configuration,
                    dependency injection, and a full middleware gateway pipeline.
                </p>
                <br />
                <div className="captioned-image">
                    <ScallywagOSPreview />
                    <p style={styles.caption}>
                        <sub>
                            <b>Scallywag IDE</b> - Multi-Interface Backend Framework
                        </sub>
                    </p>
                </div>
                <h3>Highlights:</h3>
                <ul>
                    <li>
                        <p>
                            <b>One Decorator, Four Interfaces:</b> A single @fractal
                            annotation on a method auto-generates a REST endpoint, CLI
                            command, MCP tool, and typed SDK method with zero boilerplate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>40+ Modules:</b> Identity &amp; auth (ABAC/RBAC/ReBAC),
                            real-time events (WebSocket + SSE), AI agents with Graph RAG,
                            multi-token commerce, and workspace management.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Enterprise Data Layer:</b> PostgreSQL, Redis, MongoDB,
                            Neo4j, and Milvus vector DB — with CRDTs for offline sync
                            and privilege-aware graph caching.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>100% Test Coverage:</b> Zero-tolerance testing with
                            mutation testing, performance baselines, and mode-aware
                            dependency injection for unit vs integration tests.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Next.js 15, TypeScript, Prisma, Redis, Neo4j,
                    Milvus, XState, Temporal, LiveKit, Zod, pnpm Monorepo
                </p>
            </div>
            {/* === LITERARY ENGINEERS === */}
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Literary Engineers</h2>
                </div>
                <br />
                <p>
                    A real-time CodeOps monitoring and approval dashboard — a governance
                    layer for AI-assisted code operations. Monitors agent activities
                    (file reads, edits, writes, deletions, command execution) and
                    enforces human-in-the-loop approval workflows for high-risk
                    operations.
                </p>
                <br />
                <div className="captioned-image">
                    <LiteraryEngineersPreview />
                    <p style={styles.caption}>
                        <sub>
                            <b>Literary Engineers</b> - AI Agent Governance Dashboard
                        </sub>
                    </p>
                </div>
                <h3>Highlights:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Live Activity Feed:</b> Real-time polling of all agent
                            operations — writes, edits, deletions, shell commands, and
                            search queries — with deduplication and instant UI updates.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Approval Workflows:</b> High-risk operations (file
                            deletions, destructive commands, schema changes) require
                            human approval before execution, with full audit trails.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Agent Trust Scoring:</b> Tracks approval rates per agent
                            to build trust profiles — agents with higher trust can
                            auto-approve low-risk operations over time.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>GitHub Integration:</b> OAuth authentication and webhook
                            handling for connecting repositories and tracking changes
                            across the development lifecycle.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Next.js 15, React 19, TypeScript, NextAuth.js,
                    GitHub OAuth, EventBus Pattern, Zod Validation
                </p>
            </div>
            {/* === POLYMIND TRADING BOT === */}
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>PolyMind Trading Bot</h2>
                    <a
                        href="https://github.com/Kizsler/polymind-trading-bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.visitButton}
                    >
                        View on GitHub
                    </a>
                </div>
                <br />
                <p>
                    An autonomous trading system for prediction markets like Polymarket
                    and Kalshi. Uses Claude AI as the decision brain to analyze markets,
                    score opportunities, and execute trades — plus a wallet copy-trading
                    engine that monitors high-performing wallets and replicates their
                    positions.
                </p>
                <br />
                <div className="captioned-image">
                    <PolyMindPreview />
                    <p style={styles.caption}>
                        <sub>
                            <b>PolyMind</b> - AI-Powered Prediction Market Trading
                        </sub>
                    </p>
                </div>
                <h3>Highlights:</h3>
                <ul>
                    <li>
                        <p>
                            <b>AI Trade Analysis:</b> Claude API evaluates market
                            conditions, news sentiment, and probability shifts to generate
                            trade signals with confidence scoring.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Copy-Trading Engine:</b> Monitors top-performing wallets
                            on-chain and mirrors their trades with configurable position
                            sizing and filters.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Real-Time Dashboard:</b> Next.js 14 frontend with
                            WebSocket updates for live P&L tracking, trade history,
                            and portfolio analytics.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Risk Management:</b> Daily loss limits, exposure caps,
                            kill switches, and cooldown periods after consecutive losses.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Python, FastAPI, Next.js 14, TypeScript,
                    Claude API, PostgreSQL, Redis, Docker, Web3.py, Discord Bot
                </p>
            </div>
            {/* === BONDPUSH AI === */}
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>BondPush AI</h2>
                    <a
                        href="https://github.com/Kizsler/bondpush-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.visitButton}
                    >
                        View on GitHub
                    </a>
                </div>
                <br />
                <p>
                    A high-performance Solana trading bot written entirely in Rust.
                    Monitors tokens approaching the 85 SOL bonding threshold on pump.fun
                    via WebSocket, scores opportunities in real-time, and executes
                    MEV-protected trades through Jito bundles.
                </p>
                <br />
                <div className="captioned-image">
                    <BondPushPreview />
                    <p style={styles.caption}>
                        <sub>
                            <b>BondPush AI</b> - High-Performance Solana Trading
                        </sub>
                    </p>
                </div>
                <h3>Highlights:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Sub-100ms Latency:</b> From signal detection to
                            transaction submission in under 100 milliseconds, built
                            with Tokio async runtime for maximum throughput.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>MEV Protection:</b> Jito bundled transactions prevent
                            frontrunning and sandwich attacks, ensuring trades execute
                            at intended prices.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Handles 1000+ Events/sec:</b> Processes over a thousand
                            token events per second on roughly 50MB of memory with
                            compile-time verified SQL queries.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Safety Systems:</b> Circuit breakers, daily loss caps,
                            consecutive loss pauses, and hot-reloadable blacklists
                            for production stability.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> Rust, Tokio, Solana SDK, Jito Bundles,
                    PostgreSQL, SQLx, WebSocket, Discord Webhooks
                </p>
            </div>
            {/* === STUDY-OS === */}
            <div className="text-block">
                <div style={styles.projectHeaderStacked}>
                    <h2>Study-OS</h2>
                </div>
                <br />
                <p>
                    An AI-powered study companion mobile app built for iOS. Transforms
                    messy learning materials into structured study resources with
                    adaptive planning, AI-generated flashcards, lecture recording, and
                    personalized coaching — all calendar-aware around real deadlines.
                </p>
                <br />
                <div className="captioned-image">
                    <StudyOSPreview />
                    <p style={styles.caption}>
                        <sub>
                            <b>Study-OS</b> - AI Study Companion
                        </sub>
                    </p>
                </div>
                <h3>Highlights:</h3>
                <ul>
                    <li>
                        <p>
                            <b>AI Flashcards:</b> GPT-4 analyzes uploaded notes, PDFs,
                            and lecture recordings to automatically generate flashcard
                            decks with spaced repetition.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Lecture Recorder:</b> Record audio in-app with automatic
                            transcription and AI-powered summarization of key concepts.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Smart Study Planner:</b> Calendar-aware scheduling that
                            builds study blocks around your real deadlines, courses,
                            and weekly availability.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Full Analytics:</b> Track study time, homework completion,
                            and progress across all courses with detailed breakdowns
                            and insights.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={styles.techStack}>
                    <b>Built with:</b> React Native, Expo, TypeScript, Supabase,
                    PostgreSQL, OpenAI GPT-4, Zustand, React Query
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

export default SoftwareProjects;
