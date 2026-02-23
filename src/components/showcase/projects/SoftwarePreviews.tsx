import React from 'react';

/**
 * Inline SVG mockup previews for the three software project cards.
 * Each renders a simplified UI mockup at 800x400 viewBox.
 */

export const PolyMindPreview: React.FC = () => (
    <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
    >
        {/* Background */}
        <rect width="800" height="400" fill="#0f1117" />

        {/* ── Top nav bar ── */}
        <rect width="800" height="44" fill="#161822" />
        <text x="24" y="28" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#e2e8f0">
            PolyMind
        </text>
        {/* Nav tabs */}
        <rect x="130" y="14" width="60" height="18" rx="3" fill="#22c55e" opacity="0.25" />
        <text x="138" y="27" fontFamily="sans-serif" fontSize="10" fill="#22c55e">
            Dashboard
        </text>
        <rect x="200" y="14" width="48" height="18" rx="3" fill="#1e293b" />
        <text x="208" y="27" fontFamily="sans-serif" fontSize="10" fill="#64748b">
            Trades
        </text>
        <rect x="258" y="14" width="48" height="18" rx="3" fill="#1e293b" />
        <text x="266" y="27" fontFamily="sans-serif" fontSize="10" fill="#64748b">
            Wallets
        </text>
        <rect x="316" y="14" width="52" height="18" rx="3" fill="#1e293b" />
        <text x="324" y="27" fontFamily="sans-serif" fontSize="10" fill="#64748b">
            Settings
        </text>
        {/* Status dot */}
        <circle cx="750" cy="22" r="5" fill="#22c55e" />
        <text x="720" y="26" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="end">
            Live
        </text>

        {/* ── Chart area (left panel) ── */}
        <rect x="16" y="56" width="480" height="270" rx="6" fill="#161822" />
        <text x="32" y="78" fontFamily="sans-serif" fontSize="11" fill="#64748b">
            Portfolio Value (7d)
        </text>
        <text x="32" y="96" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#e2e8f0">
            $14,847.32
        </text>
        <text x="180" y="96" fontFamily="sans-serif" fontSize="12" fill="#22c55e">
            +12.4%
        </text>

        {/* Y-axis labels */}
        <text x="32" y="130" fontFamily="sans-serif" fontSize="9" fill="#475569">$15k</text>
        <text x="32" y="175" fontFamily="sans-serif" fontSize="9" fill="#475569">$13k</text>
        <text x="32" y="220" fontFamily="sans-serif" fontSize="9" fill="#475569">$11k</text>
        <text x="32" y="265" fontFamily="sans-serif" fontSize="9" fill="#475569">$9k</text>

        {/* Grid lines */}
        <line x1="60" y1="127" x2="480" y2="127" stroke="#1e293b" strokeWidth="1" />
        <line x1="60" y1="172" x2="480" y2="172" stroke="#1e293b" strokeWidth="1" />
        <line x1="60" y1="217" x2="480" y2="217" stroke="#1e293b" strokeWidth="1" />
        <line x1="60" y1="262" x2="480" y2="262" stroke="#1e293b" strokeWidth="1" />

        {/* Chart line — upward trend with realistic dips */}
        <polyline
            points="
                65,255  95,250  120,245  145,240  170,248  195,235
                220,230  245,222  265,228  285,210  310,200  335,195
                355,205  375,185  400,175  420,168  440,155  460,148  475,135
            "
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* Chart area fill */}
        <polyline
            points="
                65,255  95,250  120,245  145,240  170,248  195,235
                220,230  245,222  265,228  285,210  310,200  335,195
                355,205  375,185  400,175  420,168  440,155  460,148  475,135
                475,270  65,270
            "
            fill="url(#chartGradient)"
        />
        <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
        </defs>

        {/* X-axis labels */}
        <text x="75" y="285" fontFamily="sans-serif" fontSize="9" fill="#475569">Mon</text>
        <text x="150" y="285" fontFamily="sans-serif" fontSize="9" fill="#475569">Tue</text>
        <text x="225" y="285" fontFamily="sans-serif" fontSize="9" fill="#475569">Wed</text>
        <text x="300" y="285" fontFamily="sans-serif" fontSize="9" fill="#475569">Thu</text>
        <text x="375" y="285" fontFamily="sans-serif" fontSize="9" fill="#475569">Fri</text>
        <text x="450" y="285" fontFamily="sans-serif" fontSize="9" fill="#475569">Sat</text>

        {/* ── Trade log (right panel) ── */}
        <rect x="508" y="56" width="276" height="270" rx="6" fill="#161822" />
        <text x="524" y="78" fontFamily="sans-serif" fontSize="11" fill="#64748b">
            Recent Trades
        </text>

        {/* Trade row 1 - win */}
        <rect x="524" y="90" width="244" height="28" rx="4" fill="#22c55e" opacity="0.08" />
        <rect x="532" y="98" width="4" height="12" rx="2" fill="#22c55e" />
        <text x="544" y="107" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            Trump 2024 — YES
        </text>
        <text x="730" y="107" fontFamily="sans-serif" fontSize="10" fill="#22c55e" textAnchor="end">
            +$340
        </text>

        {/* Trade row 2 - win */}
        <rect x="524" y="124" width="244" height="28" rx="4" fill="#22c55e" opacity="0.08" />
        <rect x="532" y="132" width="4" height="12" rx="2" fill="#22c55e" />
        <text x="544" y="141" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            Fed Rate Cut Mar — YES
        </text>
        <text x="730" y="141" fontFamily="sans-serif" fontSize="10" fill="#22c55e" textAnchor="end">
            +$185
        </text>

        {/* Trade row 3 - loss */}
        <rect x="524" y="158" width="244" height="28" rx="4" fill="#ef4444" opacity="0.08" />
        <rect x="532" y="166" width="4" height="12" rx="2" fill="#ef4444" />
        <text x="544" y="175" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            BTC &gt; $100K Feb — NO
        </text>
        <text x="730" y="175" fontFamily="sans-serif" fontSize="10" fill="#ef4444" textAnchor="end">
            -$90
        </text>

        {/* Trade row 4 - win */}
        <rect x="524" y="192" width="244" height="28" rx="4" fill="#22c55e" opacity="0.08" />
        <rect x="532" y="200" width="4" height="12" rx="2" fill="#22c55e" />
        <text x="544" y="209" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            ETH Merge Success — YES
        </text>
        <text x="730" y="209" fontFamily="sans-serif" fontSize="10" fill="#22c55e" textAnchor="end">
            +$520
        </text>

        {/* Trade row 5 - loss */}
        <rect x="524" y="226" width="244" height="28" rx="4" fill="#ef4444" opacity="0.08" />
        <rect x="532" y="234" width="4" height="12" rx="2" fill="#ef4444" />
        <text x="544" y="243" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            SPY &gt; $500 Apr — YES
        </text>
        <text x="730" y="243" fontFamily="sans-serif" fontSize="10" fill="#ef4444" textAnchor="end">
            -$120
        </text>

        {/* Trade row 6 - win */}
        <rect x="524" y="260" width="244" height="28" rx="4" fill="#22c55e" opacity="0.08" />
        <rect x="532" y="268" width="4" height="12" rx="2" fill="#22c55e" />
        <text x="544" y="277" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            Copy: 0xA3f...wallet
        </text>
        <text x="730" y="277" fontFamily="sans-serif" fontSize="10" fill="#22c55e" textAnchor="end">
            +$215
        </text>

        {/* ── Bottom stats bar ── */}
        <rect x="0" y="340" width="800" height="60" fill="#161822" />

        {/* Stat 1 */}
        <text x="60" y="365" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">
            P&amp;L (7d)
        </text>
        <text x="60" y="383" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#22c55e" textAnchor="middle">
            +$2,847
        </text>

        {/* Stat 2 */}
        <text x="220" y="365" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">
            Win Rate
        </text>
        <text x="220" y="383" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#e2e8f0" textAnchor="middle">
            73%
        </text>

        {/* Stat 3 */}
        <text x="400" y="365" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">
            Active Trades
        </text>
        <text x="400" y="383" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#e2e8f0" textAnchor="middle">
            12
        </text>

        {/* Stat 4 */}
        <text x="580" y="365" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">
            Wallets Tracked
        </text>
        <text x="580" y="383" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#e2e8f0" textAnchor="middle">
            8
        </text>

        {/* Stat 5 */}
        <text x="740" y="365" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">
            Total Trades
        </text>
        <text x="740" y="383" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#e2e8f0" textAnchor="middle">
            347
        </text>
    </svg>
);

export const BondPushPreview: React.FC = () => (
    <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
    >
        {/* Background */}
        <rect width="800" height="400" fill="#0a0a0a" />

        {/* ── Header / title bar ── */}
        <rect width="800" height="36" fill="#111111" />
        <text x="16" y="24" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#06b6d4">
            BondPush AI v2.1
        </text>
        <text x="155" y="24" fontFamily="monospace" fontSize="11" fill="#525252">
            ---
        </text>
        <text x="182" y="24" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Monitoring 847 tokens
        </text>
        <text x="760" y="24" fontFamily="monospace" fontSize="11" fill="#22c55e" textAnchor="end">
            LIVE
        </text>
        <circle cx="770" cy="20" r="3" fill="#22c55e">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* ── Metrics row ── */}
        <rect x="0" y="36" width="800" height="30" fill="#0f0f0f" />
        <text x="24" y="55" fontFamily="monospace" fontSize="10" fill="#525252">
            Latency:
        </text>
        <text x="82" y="55" fontFamily="monospace" fontSize="10" fill="#22c55e">
            43ms
        </text>
        <text x="160" y="55" fontFamily="monospace" fontSize="10" fill="#525252">
            Events/s:
        </text>
        <text x="228" y="55" fontFamily="monospace" fontSize="10" fill="#eab308">
            1,247
        </text>
        <text x="310" y="55" fontFamily="monospace" fontSize="10" fill="#525252">
            Uptime:
        </text>
        <text x="365" y="55" fontFamily="monospace" fontSize="10" fill="#22c55e">
            99.97%
        </text>
        <text x="460" y="55" fontFamily="monospace" fontSize="10" fill="#525252">
            Memory:
        </text>
        <text x="518" y="55" fontFamily="monospace" fontSize="10" fill="#a3a3a3">
            47MB
        </text>
        <text x="600" y="55" fontFamily="monospace" fontSize="10" fill="#525252">
            Jito Tips:
        </text>
        <text x="665" y="55" fontFamily="monospace" fontSize="10" fill="#eab308">
            0.0024 SOL
        </text>

        {/* Divider */}
        <line x1="16" y1="72" x2="784" y2="72" stroke="#1a1a1a" strokeWidth="1" />

        {/* ── Terminal output lines ── */}
        {/* Line 1 - system */}
        <text x="24" y="92" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:01]
        </text>
        <text x="110" y="92" fontFamily="monospace" fontSize="11" fill="#06b6d4">
            SYS
        </text>
        <text x="148" y="92" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            WebSocket connected to pump.fun mainnet
        </text>

        {/* Line 2 - monitoring */}
        <text x="24" y="112" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:02]
        </text>
        <text x="110" y="112" fontFamily="monospace" fontSize="11" fill="#eab308">
            MON
        </text>
        <text x="148" y="112" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Token 7xKp...3mNv approaching bond threshold (82.4/85 SOL)
        </text>

        {/* Line 3 - monitoring */}
        <text x="24" y="132" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:02]
        </text>
        <text x="110" y="132" fontFamily="monospace" fontSize="11" fill="#eab308">
            MON
        </text>
        <text x="148" y="132" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Scoring opportunity... holders: 342, velocity: +4.2 SOL/min
        </text>

        {/* Line 4 - trade executed */}
        <text x="24" y="152" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:03]
        </text>
        <text x="110" y="152" fontFamily="monospace" fontSize="11" fill="#22c55e">
            BUY
        </text>
        <text x="148" y="152" fontFamily="monospace" fontSize="11" fill="#22c55e">
            Executed 0.5 SOL on 7xKp...3mNv via Jito bundle (slot 248391047)
        </text>

        {/* Line 5 - system */}
        <text x="24" y="172" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:05]
        </text>
        <text x="110" y="172" fontFamily="monospace" fontSize="11" fill="#06b6d4">
            SYS
        </text>
        <text x="148" y="172" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Position opened. Stop-loss set at -15%. Take-profit at +40%
        </text>

        {/* Line 6 - monitoring */}
        <text x="24" y="192" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:08]
        </text>
        <text x="110" y="192" fontFamily="monospace" fontSize="11" fill="#eab308">
            MON
        </text>
        <text x="148" y="192" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Token Bq9R...xW2p at 79.1/85 SOL — watching (score: 6.2/10)
        </text>

        {/* Line 7 - win */}
        <text x="24" y="212" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:14]
        </text>
        <text x="110" y="212" fontFamily="monospace" fontSize="11" fill="#22c55e">
            WIN
        </text>
        <text x="148" y="212" fontFamily="monospace" fontSize="11" fill="#22c55e">
            Closed 7xKp...3mNv at +32% (0.5 SOL -&gt; 0.66 SOL) in 11s
        </text>

        {/* Line 8 - monitoring */}
        <text x="24" y="232" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:16]
        </text>
        <text x="110" y="232" fontFamily="monospace" fontSize="11" fill="#eab308">
            MON
        </text>
        <text x="148" y="232" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Token Bq9R...xW2p rejected — velocity declining, score dropped to 3.1
        </text>

        {/* Line 9 - system */}
        <text x="24" y="252" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:18]
        </text>
        <text x="110" y="252" fontFamily="monospace" fontSize="11" fill="#06b6d4">
            SYS
        </text>
        <text x="148" y="252" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            Daily P&amp;L: +2.41 SOL | Trades: 14/19 won | Circuit breaker: OK
        </text>

        {/* Line 10 - loss */}
        <text x="24" y="272" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:22]
        </text>
        <text x="110" y="272" fontFamily="monospace" fontSize="11" fill="#ef4444">
            LOSS
        </text>
        <text x="152" y="272" fontFamily="monospace" fontSize="11" fill="#ef4444">
            Closed Km4T...9qLp at -15% (stop-loss triggered) in 8s
        </text>

        {/* Line 11 - monitoring */}
        <text x="24" y="292" fontFamily="monospace" fontSize="11" fill="#525252">
            [14:23:25]
        </text>
        <text x="110" y="292" fontFamily="monospace" fontSize="11" fill="#eab308">
            MON
        </text>
        <text x="148" y="292" fontFamily="monospace" fontSize="11" fill="#a3a3a3">
            New token Xt8V...bN1c detected — 71.3/85 SOL, scoring...
        </text>

        {/* Blinking cursor */}
        <text x="24" y="316" fontFamily="monospace" fontSize="11" fill="#06b6d4">
            &gt;
        </text>
        <rect x="36" y="306" width="8" height="14" fill="#06b6d4" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite" />
        </rect>

        {/* ── Bottom status bar ── */}
        <rect x="0" y="336" width="800" height="64" fill="#111111" />
        <line x1="0" y1="336" x2="800" y2="336" stroke="#1a1a1a" strokeWidth="1" />

        {/* Bottom stats */}
        <text x="24" y="358" fontFamily="monospace" fontSize="10" fill="#525252">
            SESSION
        </text>
        <text x="24" y="374" fontFamily="monospace" fontSize="12" fill="#22c55e">
            +2.41 SOL ($387.42)
        </text>

        <text x="220" y="358" fontFamily="monospace" fontSize="10" fill="#525252">
            WIN RATE
        </text>
        <text x="220" y="374" fontFamily="monospace" fontSize="12" fill="#e2e8f0">
            73.7% (14/19)
        </text>

        <text x="400" y="358" fontFamily="monospace" fontSize="10" fill="#525252">
            AVG HOLD
        </text>
        <text x="400" y="374" fontFamily="monospace" fontSize="12" fill="#e2e8f0">
            9.3s
        </text>

        <text x="520" y="358" fontFamily="monospace" fontSize="10" fill="#525252">
            BEST TRADE
        </text>
        <text x="520" y="374" fontFamily="monospace" fontSize="12" fill="#22c55e">
            +67% (0.84 SOL)
        </text>

        <text x="700" y="358" fontFamily="monospace" fontSize="10" fill="#525252">
            CIRCUIT
        </text>
        <text x="700" y="374" fontFamily="monospace" fontSize="12" fill="#22c55e">
            OK
        </text>

        {/* Rust/performance badge */}
        <rect x="690" y="382" width="90" height="14" rx="2" fill="#1a1a1a" />
        <text x="735" y="393" fontFamily="monospace" fontSize="9" fill="#525252" textAnchor="middle">
            built in Rust
        </text>
    </svg>
);

export const StudyOSPreview: React.FC = () => (
    <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
    >
        {/* Outer background */}
        <rect width="800" height="400" fill="#0f0f18" />

        {/* ── Phone frame ── */}
        <rect x="260" y="10" width="280" height="380" rx="24" fill="#1a1a2e" stroke="#2d2d4a" strokeWidth="2" />

        {/* Screen inset */}
        <rect x="268" y="18" width="264" height="364" rx="20" fill="#10101e" />

        {/* ── Status bar (phone top) ── */}
        <text x="286" y="40" fontFamily="sans-serif" fontSize="10" fill="#64748b">
            9:41
        </text>
        {/* Signal bars */}
        <rect x="480" y="32" width="3" height="5" rx="0.5" fill="#64748b" />
        <rect x="485" y="30" width="3" height="7" rx="0.5" fill="#64748b" />
        <rect x="490" y="28" width="3" height="9" rx="0.5" fill="#64748b" />
        <rect x="495" y="26" width="3" height="11" rx="0.5" fill="#64748b" />
        {/* Battery */}
        <rect x="506" y="30" width="16" height="8" rx="2" fill="none" stroke="#64748b" strokeWidth="1" />
        <rect x="508" y="32" width="10" height="4" rx="1" fill="#22c55e" />
        <rect x="522" y="32" width="1.5" height="4" rx="0.5" fill="#64748b" />

        {/* ── App header ── */}
        <text x="400" y="62" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#e2e8f0" textAnchor="middle">
            Study-OS
        </text>
        <text x="400" y="76" fontFamily="sans-serif" fontSize="9" fill="#64748b" textAnchor="middle">
            Good afternoon, JC
        </text>

        {/* Divider */}
        <line x1="284" y1="84" x2="516" y2="84" stroke="#1e1e36" strokeWidth="1" />

        {/* ── Main course card ── */}
        <rect x="284" y="92" width="232" height="90" rx="12" fill="#1e1e36" />
        {/* Purple accent strip on left */}
        <rect x="284" y="92" width="5" height="90" rx="2.5" fill="#8b5cf6" />

        <text x="302" y="112" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#e2e8f0">
            Calculus II
        </text>
        <text x="302" y="126" fontFamily="sans-serif" fontSize="9" fill="#64748b">
            MTH-202 -- Exam in 5 days
        </text>

        {/* Progress bar background */}
        <rect x="302" y="138" width="196" height="8" rx="4" fill="#0f0f18" />
        {/* Progress bar fill */}
        <rect x="302" y="138" width="143" height="8" rx="4" fill="#8b5cf6" />
        {/* Progress text */}
        <text x="302" y="158" fontFamily="sans-serif" fontSize="10" fill="#8b5cf6">
            73% complete
        </text>
        <text x="498" y="158" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="end">
            22/30 topics
        </text>

        {/* Mastery badge */}
        <rect x="302" y="166" width="50" height="12" rx="6" fill="#8b5cf6" opacity="0.15" />
        <text x="327" y="175" fontFamily="sans-serif" fontSize="8" fill="#8b5cf6" textAnchor="middle">
            On Track
        </text>

        {/* ── Two smaller cards row ── */}
        {/* Flashcards card */}
        <rect x="284" y="192" width="112" height="68" rx="10" fill="#1e1e36" />
        <rect x="298" y="206" width="20" height="20" rx="4" fill="#eab308" opacity="0.15" />
        {/* Card icon */}
        <rect x="302" y="210" width="12" height="9" rx="1.5" fill="#eab308" opacity="0.7" />
        <rect x="304" y="212" width="8" height="1.5" rx="0.75" fill="#1e1e36" />
        <rect x="304" y="215" width="5" height="1.5" rx="0.75" fill="#1e1e36" />

        <text x="298" y="240" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#e2e8f0">
            Flashcards
        </text>
        <text x="298" y="252" fontFamily="sans-serif" fontSize="9" fill="#eab308">
            48 due today
        </text>

        {/* Lecture card */}
        <rect x="404" y="192" width="112" height="68" rx="10" fill="#1e1e36" />
        <rect x="418" y="206" width="20" height="20" rx="4" fill="#06b6d4" opacity="0.15" />
        {/* Play icon */}
        <polygon points="424,211 424,221 432,216" fill="#06b6d4" opacity="0.7" />

        <text x="418" y="240" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#e2e8f0">
            Next Up
        </text>
        <text x="418" y="252" fontFamily="sans-serif" fontSize="9" fill="#06b6d4">
            Lecture Rec.
        </text>

        {/* ── Upcoming section ── */}
        <text x="298" y="282" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#64748b">
            UPCOMING
        </text>

        {/* Task row 1 */}
        <rect x="284" y="290" width="232" height="32" rx="8" fill="#1e1e36" />
        <circle cx="300" cy="306" r="6" fill="none" stroke="#22c55e" strokeWidth="1.5" />
        <text x="314" y="310" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            Problem Set 7
        </text>
        <text x="498" y="310" fontFamily="sans-serif" fontSize="9" fill="#ef4444" textAnchor="end">
            Due tmrw
        </text>

        {/* Task row 2 */}
        <rect x="284" y="326" width="232" height="32" rx="8" fill="#1e1e36" />
        <circle cx="300" cy="342" r="6" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <text x="314" y="346" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">
            Review Ch. 11 Notes
        </text>
        <text x="498" y="346" fontFamily="sans-serif" fontSize="9" fill="#64748b" textAnchor="end">
            Thu
        </text>

        {/* ── Bottom tab bar ── */}
        <rect x="268" y="362" width="264" height="20" rx="0" fill="#141428" />
        {/* Round off bottom corners to match phone */}
        <rect x="268" y="362" width="264" height="22" rx="0" fill="#141428" />
        <rect x="268" y="370" width="264" height="14" rx="14" fill="#141428" />

        {/* Tab icons — simple abstract shapes */}
        {/* Home tab (active) */}
        <rect x="308" y="367" width="14" height="10" rx="2" fill="#8b5cf6" />
        <rect x="312" y="364" width="6" height="4" rx="1" fill="#8b5cf6" />

        {/* Flashcards tab */}
        <rect x="356" y="365" width="12" height="10" rx="1.5" fill="#475569" />
        <rect x="358" y="367" width="8" height="1.5" rx="0.75" fill="#141428" />
        <rect x="358" y="370" width="5" height="1.5" rx="0.75" fill="#141428" />

        {/* Calendar tab */}
        <rect x="401" y="364" width="14" height="12" rx="2" fill="none" stroke="#475569" strokeWidth="1.5" />
        <line x1="401" y1="368" x2="415" y2="368" stroke="#475569" strokeWidth="1.5" />
        <rect x="404" y="370" width="3" height="3" rx="0.5" fill="#475569" />

        {/* Stats tab */}
        <rect x="446" y="373" width="3" height="4" rx="0.5" fill="#475569" />
        <rect x="451" y="369" width="3" height="8" rx="0.5" fill="#475569" />
        <rect x="456" y="365" width="3" height="12" rx="0.5" fill="#475569" />

        {/* Profile tab */}
        <circle cx="493" cy="368" r="4" fill="none" stroke="#475569" strokeWidth="1.5" />
        <line x1="489" y1="376" x2="497" y2="376" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── Left-side floating context (course list peek) ── */}
        <rect x="30" y="80" width="200" height="240" rx="12" fill="#1a1a2e" opacity="0.5" />
        <text x="50" y="106" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#64748b">
            Your Courses
        </text>

        <rect x="46" y="118" width="168" height="28" rx="6" fill="#1e1e36" opacity="0.7" />
        <circle cx="62" cy="132" r="6" fill="#8b5cf6" opacity="0.6" />
        <text x="76" y="136" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">
            Calculus II
        </text>
        <text x="198" y="136" fontFamily="sans-serif" fontSize="9" fill="#8b5cf6" textAnchor="end">
            73%
        </text>

        <rect x="46" y="152" width="168" height="28" rx="6" fill="#1e1e36" opacity="0.7" />
        <circle cx="62" cy="166" r="6" fill="#22c55e" opacity="0.6" />
        <text x="76" y="170" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">
            Data Structures
        </text>
        <text x="198" y="170" fontFamily="sans-serif" fontSize="9" fill="#22c55e" textAnchor="end">
            91%
        </text>

        <rect x="46" y="186" width="168" height="28" rx="6" fill="#1e1e36" opacity="0.7" />
        <circle cx="62" cy="200" r="6" fill="#eab308" opacity="0.6" />
        <text x="76" y="204" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">
            Linear Algebra
        </text>
        <text x="198" y="204" fontFamily="sans-serif" fontSize="9" fill="#eab308" textAnchor="end">
            58%
        </text>

        <rect x="46" y="220" width="168" height="28" rx="6" fill="#1e1e36" opacity="0.7" />
        <circle cx="62" cy="234" r="6" fill="#06b6d4" opacity="0.6" />
        <text x="76" y="238" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">
            Physics I
        </text>
        <text x="198" y="238" fontFamily="sans-serif" fontSize="9" fill="#06b6d4" textAnchor="end">
            82%
        </text>

        {/* ── Right-side floating context (weekly stats peek) ── */}
        <rect x="570" y="80" width="200" height="240" rx="12" fill="#1a1a2e" opacity="0.5" />
        <text x="590" y="106" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#64748b">
            This Week
        </text>

        {/* Study time */}
        <text x="590" y="132" fontFamily="sans-serif" fontSize="10" fill="#525252">
            Study Time
        </text>
        <text x="590" y="150" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#e2e8f0">
            12.5h
        </text>
        <text x="646" y="150" fontFamily="sans-serif" fontSize="10" fill="#22c55e">
            +2.1h
        </text>

        {/* Mini bar chart for weekly study */}
        <rect x="590" y="164" width="16" height="28" rx="2" fill="#8b5cf6" opacity="0.3" />
        <rect x="612" y="172" width="16" height="20" rx="2" fill="#8b5cf6" opacity="0.3" />
        <rect x="634" y="160" width="16" height="32" rx="2" fill="#8b5cf6" opacity="0.3" />
        <rect x="656" y="168" width="16" height="24" rx="2" fill="#8b5cf6" opacity="0.3" />
        <rect x="678" y="156" width="16" height="36" rx="2" fill="#8b5cf6" opacity="0.5" />
        <rect x="700" y="176" width="16" height="16" rx="2" fill="#8b5cf6" opacity="0.2" />
        <rect x="722" y="182" width="16" height="10" rx="2" fill="#8b5cf6" opacity="0.15" />

        {/* Cards reviewed */}
        <text x="590" y="214" fontFamily="sans-serif" fontSize="10" fill="#525252">
            Cards Reviewed
        </text>
        <text x="590" y="232" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#e2e8f0">
            247
        </text>

        {/* Streak */}
        <text x="590" y="260" fontFamily="sans-serif" fontSize="10" fill="#525252">
            Study Streak
        </text>
        <text x="590" y="278" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#eab308">
            14 days
        </text>

        {/* Accuracy */}
        <text x="590" y="306" fontFamily="sans-serif" fontSize="10" fill="#525252">
            Flashcard Accuracy
        </text>
        <rect x="590" y="312" width="150" height="6" rx="3" fill="#0f0f18" />
        <rect x="590" y="312" width="126" height="6" rx="3" fill="#22c55e" />
        <text x="746" y="319" fontFamily="sans-serif" fontSize="9" fill="#22c55e" textAnchor="end">
            84%
        </text>
    </svg>
);

export const ScallywagOSPreview: React.FC = () => (
    <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
    >
        {/* Background */}
        <rect width="800" height="400" fill="#0e0e12" />

        {/* ── Title bar ── */}
        <rect width="800" height="34" fill="#18181f" />
        <circle cx="16" cy="17" r="5" fill="#ef4444" />
        <circle cx="32" cy="17" r="5" fill="#eab308" />
        <circle cx="48" cy="17" r="5" fill="#22c55e" />
        <text x="400" y="22" fontFamily="monospace" fontSize="11" fill="#64748b" textAnchor="middle">
            Scallywag IDE — @fractal gateway
        </text>

        {/* ── Left sidebar — module explorer ── */}
        <rect x="0" y="34" width="180" height="366" fill="#111118" />
        <text x="14" y="56" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#525252">
            MODULES
        </text>

        {/* Module items */}
        <rect x="8" y="64" width="164" height="22" rx="4" fill="#8b5cf6" opacity="0.12" />
        <rect x="14" y="70" width="8" height="8" rx="1" fill="#8b5cf6" opacity="0.6" />
        <text x="28" y="79" fontFamily="monospace" fontSize="10" fill="#8b5cf6">
            payments.module
        </text>

        <rect x="14" y="96" width="8" height="8" rx="1" fill="#525252" opacity="0.4" />
        <text x="28" y="105" fontFamily="monospace" fontSize="10" fill="#94a3b8">
            identity.module
        </text>

        <rect x="14" y="118" width="8" height="8" rx="1" fill="#525252" opacity="0.4" />
        <text x="28" y="127" fontFamily="monospace" fontSize="10" fill="#94a3b8">
            workspace.module
        </text>

        <rect x="14" y="140" width="8" height="8" rx="1" fill="#525252" opacity="0.4" />
        <text x="28" y="149" fontFamily="monospace" fontSize="10" fill="#94a3b8">
            events.module
        </text>

        <rect x="14" y="162" width="8" height="8" rx="1" fill="#525252" opacity="0.4" />
        <text x="28" y="171" fontFamily="monospace" fontSize="10" fill="#94a3b8">
            ai-agents.module
        </text>

        <rect x="14" y="184" width="8" height="8" rx="1" fill="#525252" opacity="0.4" />
        <text x="28" y="193" fontFamily="monospace" fontSize="10" fill="#94a3b8">
            commerce.module
        </text>

        {/* Separator */}
        <line x1="8" y1="210" x2="172" y2="210" stroke="#1e1e2a" strokeWidth="1" />
        <text x="14" y="228" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#525252">
            INTERFACES
        </text>

        <text x="28" y="248" fontFamily="monospace" fontSize="10" fill="#22c55e">
            REST API
        </text>
        <text x="28" y="266" fontFamily="monospace" fontSize="10" fill="#06b6d4">
            CLI
        </text>
        <text x="28" y="284" fontFamily="monospace" fontSize="10" fill="#eab308">
            MCP Tools
        </text>
        <text x="28" y="302" fontFamily="monospace" fontSize="10" fill="#f97316">
            SDK
        </text>

        {/* ── Center — code editor ── */}
        <rect x="180" y="34" width="400" height="366" fill="#0e0e12" />

        {/* Tab bar */}
        <rect x="180" y="34" width="400" height="26" fill="#141420" />
        <rect x="180" y="34" width="130" height="26" fill="#0e0e12" />
        <text x="196" y="51" fontFamily="monospace" fontSize="10" fill="#e2e8f0">
            payments.module.ts
        </text>
        <text x="325" y="51" fontFamily="monospace" fontSize="10" fill="#525252">
            identity.module.ts
        </text>

        {/* Line numbers */}
        <text x="194" y="78" fontFamily="monospace" fontSize="10" fill="#334155">1</text>
        <text x="194" y="94" fontFamily="monospace" fontSize="10" fill="#334155">2</text>
        <text x="194" y="110" fontFamily="monospace" fontSize="10" fill="#334155">3</text>
        <text x="194" y="126" fontFamily="monospace" fontSize="10" fill="#334155">4</text>
        <text x="194" y="142" fontFamily="monospace" fontSize="10" fill="#334155">5</text>
        <text x="194" y="158" fontFamily="monospace" fontSize="10" fill="#334155">6</text>
        <text x="194" y="174" fontFamily="monospace" fontSize="10" fill="#334155">7</text>
        <text x="194" y="190" fontFamily="monospace" fontSize="10" fill="#334155">8</text>
        <text x="194" y="206" fontFamily="monospace" fontSize="10" fill="#334155">9</text>
        <text x="188" y="222" fontFamily="monospace" fontSize="10" fill="#334155">10</text>
        <text x="188" y="238" fontFamily="monospace" fontSize="10" fill="#334155">11</text>
        <text x="188" y="254" fontFamily="monospace" fontSize="10" fill="#334155">12</text>

        {/* Code lines */}
        <text x="214" y="78" fontFamily="monospace" fontSize="10" fill="#c084fc">@fractal</text>
        <text x="274" y="78" fontFamily="monospace" fontSize="10" fill="#94a3b8">(&#123;</text>
        <text x="214" y="94" fontFamily="monospace" fontSize="10" fill="#94a3b8">  description:</text>
        <text x="318" y="94" fontFamily="monospace" fontSize="10" fill="#86efac">'Payment processing'</text>
        <text x="214" y="110" fontFamily="monospace" fontSize="10" fill="#94a3b8">&#125;)</text>
        <text x="214" y="126" fontFamily="monospace" fontSize="10" fill="#c084fc">export class</text>
        <text x="310" y="126" fontFamily="monospace" fontSize="10" fill="#eab308">PaymentsModule</text>
        <text x="432" y="126" fontFamily="monospace" fontSize="10" fill="#94a3b8">&#123;</text>
        <text x="214" y="158" fontFamily="monospace" fontSize="10" fill="#94a3b8">  </text>
        <text x="224" y="158" fontFamily="monospace" fontSize="10" fill="#c084fc">@fractal</text>
        <text x="284" y="158" fontFamily="monospace" fontSize="10" fill="#94a3b8">(&#123; api: &#123; method:</text>
        <text x="428" y="158" fontFamily="monospace" fontSize="10" fill="#86efac">'POST'</text>
        <text x="464" y="158" fontFamily="monospace" fontSize="10" fill="#94a3b8">&#125; &#125;)</text>
        <text x="224" y="174" fontFamily="monospace" fontSize="10" fill="#c084fc">async</text>
        <text x="264" y="174" fontFamily="monospace" fontSize="10" fill="#60a5fa">createPayment</text>
        <text x="370" y="174" fontFamily="monospace" fontSize="10" fill="#94a3b8">(input)&#123;</text>
        <text x="234" y="190" fontFamily="monospace" fontSize="10" fill="#c084fc">return</text>
        <text x="278" y="190" fontFamily="monospace" fontSize="10" fill="#94a3b8">this.stripe.charge(input)</text>
        <text x="224" y="206" fontFamily="monospace" fontSize="10" fill="#94a3b8">&#125;</text>
        <text x="214" y="238" fontFamily="monospace" fontSize="10" fill="#525252">  // One decorator → REST + CLI + MCP + SDK</text>
        <text x="214" y="254" fontFamily="monospace" fontSize="10" fill="#94a3b8">&#125;</text>

        {/* ── Right panel — generated interfaces ── */}
        <rect x="580" y="34" width="220" height="366" fill="#111118" />
        <text x="596" y="56" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#525252">
            GENERATED OUTPUT
        </text>

        {/* REST API card */}
        <rect x="590" y="66" width="200" height="60" rx="6" fill="#22c55e" opacity="0.08" />
        <rect x="590" y="66" width="4" height="60" rx="2" fill="#22c55e" />
        <text x="602" y="82" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#22c55e">
            REST API
        </text>
        <text x="602" y="96" fontFamily="monospace" fontSize="9" fill="#64748b">
            POST /api/payments
        </text>
        <text x="602" y="110" fontFamily="monospace" fontSize="9" fill="#64748b">
            GET  /api/payments/:id
        </text>
        <text x="602" y="120" fontFamily="monospace" fontSize="9" fill="#334155">
            + 4 more endpoints
        </text>

        {/* CLI card */}
        <rect x="590" y="134" width="200" height="52" rx="6" fill="#06b6d4" opacity="0.08" />
        <rect x="590" y="134" width="4" height="52" rx="2" fill="#06b6d4" />
        <text x="602" y="150" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#06b6d4">
            CLI
        </text>
        <text x="602" y="164" fontFamily="monospace" fontSize="9" fill="#64748b">
            $ scallywag payments create
        </text>
        <text x="602" y="178" fontFamily="monospace" fontSize="9" fill="#334155">
            + 6 more commands
        </text>

        {/* MCP card */}
        <rect x="590" y="194" width="200" height="52" rx="6" fill="#eab308" opacity="0.08" />
        <rect x="590" y="194" width="4" height="52" rx="2" fill="#eab308" />
        <text x="602" y="210" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#eab308">
            MCP Tools
        </text>
        <text x="602" y="224" fontFamily="monospace" fontSize="9" fill="#64748b">
            payments_createPayment
        </text>
        <text x="602" y="238" fontFamily="monospace" fontSize="9" fill="#334155">
            + 6 more tools
        </text>

        {/* SDK card */}
        <rect x="590" y="254" width="200" height="52" rx="6" fill="#f97316" opacity="0.08" />
        <rect x="590" y="254" width="4" height="52" rx="2" fill="#f97316" />
        <text x="602" y="270" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#f97316">
            TypeScript SDK
        </text>
        <text x="602" y="284" fontFamily="monospace" fontSize="9" fill="#64748b">
            sdk.payments.create(&#123;...&#125;)
        </text>
        <text x="602" y="298" fontFamily="monospace" fontSize="9" fill="#334155">
            Fully typed client
        </text>

        {/* Stats at bottom of right panel */}
        <line x1="590" y1="320" x2="780" y2="320" stroke="#1e1e2a" strokeWidth="1" />
        <text x="596" y="340" fontFamily="monospace" fontSize="9" fill="#525252">Modules:</text>
        <text x="658" y="340" fontFamily="monospace" fontSize="9" fill="#e2e8f0">40+</text>
        <text x="596" y="356" fontFamily="monospace" fontSize="9" fill="#525252">Coverage:</text>
        <text x="658" y="356" fontFamily="monospace" fontSize="9" fill="#22c55e">100%</text>
        <text x="596" y="372" fontFamily="monospace" fontSize="9" fill="#525252">Tests:</text>
        <text x="658" y="372" fontFamily="monospace" fontSize="9" fill="#e2e8f0">Zero-tolerance</text>

        {/* Bottom bar */}
        <rect x="180" y="380" width="400" height="20" fill="#141420" />
        <text x="196" y="393" fontFamily="monospace" fontSize="9" fill="#525252">
            TypeScript  |  Next.js 15  |  Prisma  |  Redis  |  Neo4j
        </text>
    </svg>
);

export const LiteraryEngineersPreview: React.FC = () => (
    <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
    >
        {/* Background */}
        <rect width="800" height="400" fill="#0a0c10" />

        {/* ── Top bar ── */}
        <rect width="800" height="40" fill="#111318" />
        <text x="24" y="26" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#e2e8f0">
            Literary Engineers
        </text>
        <text x="180" y="26" fontFamily="sans-serif" fontSize="10" fill="#64748b">
            CodeOps Dashboard
        </text>
        {/* Status */}
        <circle cx="730" cy="20" r="4" fill="#22c55e">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="740" y="24" fontFamily="sans-serif" fontSize="10" fill="#22c55e">
            3 agents active
        </text>

        {/* ── Left panel — activity feed ── */}
        <rect x="16" y="52" width="380" height="330" rx="8" fill="#111318" />
        <text x="32" y="74" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#64748b">
            ACTIVITY FEED
        </text>
        <text x="350" y="74" fontFamily="sans-serif" fontSize="9" fill="#334155" textAnchor="end">
            Live
        </text>
        <circle cx="360" cy="70" r="3" fill="#22c55e" opacity="0.7" />

        {/* Activity row 1 - write */}
        <rect x="28" y="84" width="356" height="36" rx="5" fill="#22c55e" opacity="0.06" />
        <rect x="36" y="92" width="6" height="20" rx="3" fill="#22c55e" />
        <text x="52" y="100" fontFamily="monospace" fontSize="9" fill="#22c55e">WRITE</text>
        <text x="96" y="100" fontFamily="monospace" fontSize="9" fill="#94a3b8">
            src/modules/payments/handler.ts
        </text>
        <text x="52" y="114" fontFamily="monospace" fontSize="8" fill="#475569">
            agent-01  •  2s ago  •  +47 lines
        </text>

        {/* Activity row 2 - edit */}
        <rect x="28" y="126" width="356" height="36" rx="5" fill="#60a5fa" opacity="0.06" />
        <rect x="36" y="134" width="6" height="20" rx="3" fill="#60a5fa" />
        <text x="52" y="142" fontFamily="monospace" fontSize="9" fill="#60a5fa">EDIT</text>
        <text x="90" y="142" fontFamily="monospace" fontSize="9" fill="#94a3b8">
            src/core/gateway/middleware.ts
        </text>
        <text x="52" y="156" fontFamily="monospace" fontSize="8" fill="#475569">
            agent-02  •  5s ago  •  Modified validateAuth()
        </text>

        {/* Activity row 3 - run */}
        <rect x="28" y="168" width="356" height="36" rx="5" fill="#eab308" opacity="0.06" />
        <rect x="36" y="176" width="6" height="20" rx="3" fill="#eab308" />
        <text x="52" y="184" fontFamily="monospace" fontSize="9" fill="#eab308">RUN</text>
        <text x="86" y="184" fontFamily="monospace" fontSize="9" fill="#94a3b8">
            pnpm test -- --coverage payments
        </text>
        <text x="52" y="198" fontFamily="monospace" fontSize="8" fill="#475569">
            agent-01  •  8s ago  •  Exit: 0 (passed)
        </text>

        {/* Activity row 4 - read */}
        <rect x="28" y="210" width="356" height="36" rx="5" fill="#525252" opacity="0.06" />
        <rect x="36" y="218" width="6" height="20" rx="3" fill="#525252" />
        <text x="52" y="226" fontFamily="monospace" fontSize="9" fill="#64748b">READ</text>
        <text x="90" y="226" fontFamily="monospace" fontSize="9" fill="#94a3b8">
            prisma/schema.prisma
        </text>
        <text x="52" y="240" fontFamily="monospace" fontSize="8" fill="#475569">
            agent-03  •  12s ago
        </text>

        {/* Activity row 5 - delete (flagged) */}
        <rect x="28" y="252" width="356" height="36" rx="5" fill="#ef4444" opacity="0.06" />
        <rect x="36" y="260" width="6" height="20" rx="3" fill="#ef4444" />
        <text x="52" y="268" fontFamily="monospace" fontSize="9" fill="#ef4444">DELETE</text>
        <text x="102" y="268" fontFamily="monospace" fontSize="9" fill="#94a3b8">
            src/deprecated/old-auth.ts
        </text>
        <text x="52" y="282" fontFamily="monospace" fontSize="8" fill="#475569">
            agent-02  •  15s ago  •  AWAITING APPROVAL
        </text>

        {/* Activity row 6 - grep */}
        <rect x="28" y="294" width="356" height="36" rx="5" fill="#525252" opacity="0.06" />
        <rect x="36" y="302" width="6" height="20" rx="3" fill="#06b6d4" />
        <text x="52" y="310" fontFamily="monospace" fontSize="9" fill="#06b6d4">GREP</text>
        <text x="90" y="310" fontFamily="monospace" fontSize="9" fill="#94a3b8">
            "validateSession" across src/**/*.ts
        </text>
        <text x="52" y="324" fontFamily="monospace" fontSize="8" fill="#475569">
            agent-01  •  18s ago  •  12 matches
        </text>

        {/* More indicator */}
        <text x="206" y="358" fontFamily="sans-serif" fontSize="9" fill="#334155" textAnchor="middle">
            47 operations in last hour
        </text>

        {/* ── Right panel — pending approvals ── */}
        <rect x="408" y="52" width="376" height="200" rx="8" fill="#111318" />
        <text x="424" y="74" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#64748b">
            PENDING APPROVALS
        </text>
        <rect x="710" y="62" width="56" height="16" rx="8" fill="#ef4444" opacity="0.15" />
        <text x="738" y="74" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#ef4444" textAnchor="middle">
            2
        </text>

        {/* Approval 1 */}
        <rect x="420" y="84" width="352" height="64" rx="6" fill="#ef4444" opacity="0.04" />
        <rect x="420" y="84" width="3" height="64" rx="1.5" fill="#ef4444" />
        <text x="436" y="100" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#e2e8f0">
            Delete: old-auth.ts
        </text>
        <rect x="600" y="90" width="40" height="14" rx="3" fill="#ef4444" opacity="0.15" />
        <text x="620" y="100" fontFamily="monospace" fontSize="8" fill="#ef4444" textAnchor="middle">
            HIGH
        </text>
        <text x="436" y="116" fontFamily="monospace" fontSize="9" fill="#64748b">
            agent-02 wants to remove deprecated auth module
        </text>
        {/* Approve / Reject buttons */}
        <rect x="436" y="126" width="60" height="16" rx="4" fill="#22c55e" opacity="0.15" />
        <text x="466" y="137" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#22c55e" textAnchor="middle">
            Approve
        </text>
        <rect x="504" y="126" width="52" height="16" rx="4" fill="#ef4444" opacity="0.15" />
        <text x="530" y="137" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#ef4444" textAnchor="middle">
            Reject
        </text>

        {/* Approval 2 */}
        <rect x="420" y="156" width="352" height="64" rx="6" fill="#eab308" opacity="0.04" />
        <rect x="420" y="156" width="3" height="64" rx="1.5" fill="#eab308" />
        <text x="436" y="172" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#e2e8f0">
            Run: DROP TABLE sessions
        </text>
        <rect x="636" y="162" width="40" height="14" rx="3" fill="#ef4444" opacity="0.15" />
        <text x="656" y="172" fontFamily="monospace" fontSize="8" fill="#ef4444" textAnchor="middle">
            CRIT
        </text>
        <text x="436" y="188" fontFamily="monospace" fontSize="9" fill="#64748b">
            agent-03 migration requires table drop
        </text>
        <rect x="436" y="198" width="60" height="16" rx="4" fill="#22c55e" opacity="0.15" />
        <text x="466" y="209" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#22c55e" textAnchor="middle">
            Approve
        </text>
        <rect x="504" y="198" width="52" height="16" rx="4" fill="#ef4444" opacity="0.15" />
        <text x="530" y="209" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#ef4444" textAnchor="middle">
            Reject
        </text>

        {/* ── Right bottom — agent metrics ── */}
        <rect x="408" y="264" width="376" height="118" rx="8" fill="#111318" />
        <text x="424" y="286" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#64748b">
            AGENT METRICS
        </text>

        {/* Agent 1 */}
        <rect x="420" y="296" width="108" height="72" rx="6" fill="#0a0c10" />
        <text x="432" y="312" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#22c55e">
            agent-01
        </text>
        <text x="432" y="328" fontFamily="monospace" fontSize="9" fill="#64748b">
            Ops: 23
        </text>
        <text x="432" y="342" fontFamily="monospace" fontSize="9" fill="#64748b">
            Approved: 21
        </text>
        <text x="432" y="356" fontFamily="monospace" fontSize="9" fill="#22c55e">
            Trust: 91%
        </text>

        {/* Agent 2 */}
        <rect x="540" y="296" width="108" height="72" rx="6" fill="#0a0c10" />
        <text x="552" y="312" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#eab308">
            agent-02
        </text>
        <text x="552" y="328" fontFamily="monospace" fontSize="9" fill="#64748b">
            Ops: 15
        </text>
        <text x="552" y="342" fontFamily="monospace" fontSize="9" fill="#64748b">
            Approved: 12
        </text>
        <text x="552" y="356" fontFamily="monospace" fontSize="9" fill="#eab308">
            Trust: 80%
        </text>

        {/* Agent 3 */}
        <rect x="660" y="296" width="108" height="72" rx="6" fill="#0a0c10" />
        <text x="672" y="312" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#06b6d4">
            agent-03
        </text>
        <text x="672" y="328" fontFamily="monospace" fontSize="9" fill="#64748b">
            Ops: 9
        </text>
        <text x="672" y="342" fontFamily="monospace" fontSize="9" fill="#64748b">
            Approved: 8
        </text>
        <text x="672" y="356" fontFamily="monospace" fontSize="9" fill="#06b6d4">
            Trust: 89%
        </text>
    </svg>
);
